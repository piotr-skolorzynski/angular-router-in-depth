import { inject } from "@angular/core";
import { Route, Router, UrlSegment } from "@angular/router";
import { first, Observable, tap } from "rxjs";
import { AuthStore } from "./auth.store";

export const canLoadAuthGuard = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const auth = inject(AuthStore);
  const router = inject(Router);

  return auth.isLoggedIn$.pipe(
    first(),
    tap((isLoggedIn) => {
      // if not authenticated make side effect by redirecting user to login page
      if (!isLoggedIn) {
        router.navigateByUrl("/login");
      }
    })
  );
};
