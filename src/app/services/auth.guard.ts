import { inject } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthStore } from "./auth.store";

export const authGuard = (): Observable<boolean | UrlTree> => {
  const auth = inject(AuthStore);
  const router = inject(Router);

  return auth.isLoggedIn$.pipe(
    map((loggedIn) => (loggedIn ? true : router.parseUrl("/login")))
  );
};
