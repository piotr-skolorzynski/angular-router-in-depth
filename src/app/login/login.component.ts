import { Component, OnInit, inject } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import { Router } from "@angular/router";
import { AuthStore } from "../services/auth.store";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  private readonly fb = inject(UntypedFormBuilder);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthStore);

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  login(): void {
    const val = this.form.value;

    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl("/courses");
      },
      (err) => {
        alert("Login failed!");
      }
    );
  }
}
