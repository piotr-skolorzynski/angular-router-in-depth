import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { canLoadAuthGuard } from "./services/can-load-auth.guard";
import { CustomPreloadingStrategy } from "./services/custom-preloading.strategy";
import { ChatComponent } from "./chat/chat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    data: {
      preload: true,
    },
    // canMatch: [canLoadAuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  // route to place component in secondary outlet
  {
    path: "helpdesk-chat",
    component: ChatComponent,
    //name of secondary outlet
    outlet: "chat",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
      //usefull to debug, display a lot of information in console
      // enableTracing: true,
      // let to use routes with #
      // useHash: true,
      //automatically scrolls to chosen position of page if is e.g. top By default is set to disabled
      // enabled - if we navigate first time to page it scrolls to the top but if we back it scrolls to last position on page - it is browers behave
      scrollPositionRestoration: "enabled",
      //it is worth to set like that because the you do not have to take some route params from parent but it is inherited in child paramMap
      paramsInheritanceStrategy: "always",
    }),
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy],
})
export class AppRoutingModule {}
