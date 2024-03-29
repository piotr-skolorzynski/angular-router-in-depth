import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { courseResolver } from "./services/course.resolver";
import { lessonsResolver } from "./services/lessons.resolver";
import { HomeComponent } from "./home/home.component";
import { CourseComponent } from "./course/course.component";
import { LessonDetailComponent } from "./lesson/lesson-detail.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { lessonDetailResolver } from "./services/lesson-detail.resolver";
import { authGuard } from "../services/auth.guard";
import { confirmExitGuard } from "../services/confirm-exit.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    canDeactivate: [confirmExitGuard],
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: { lessons: lessonsResolver },
      },
      {
        path: "lessons/:lessonSeqNo",
        component: LessonDetailComponent,
        resolve: { lesson: lessonDetailResolver },
      },
    ],
    resolve: { course: courseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CoursesRoutingModule {}
