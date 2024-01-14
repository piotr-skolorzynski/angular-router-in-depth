import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    //conditional checking if data metadata has preload prop set to true
    if (route.data["preload"]) {
      return load(); //if true execute load function associate with this route
    } else {
      of(null);
    }
  }
}
