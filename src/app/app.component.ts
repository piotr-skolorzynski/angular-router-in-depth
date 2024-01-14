import { Component, OnInit, inject } from "@angular/core";
import { AuthStore } from "./services/auth.store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  auth = inject(AuthStore);

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
