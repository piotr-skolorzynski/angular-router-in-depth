import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, first } from "rxjs";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

@Injectable({
  providedIn: "root",
})
export class CourseResolver implements Resolve<Course> {
  private readonly coursesService = inject(CoursesService);

  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Course | Observable<Course> | Promise<Course> {
    const courseUrl = route.paramMap.get("courseUrl");

    return this.coursesService.loadCourseByUrl(courseUrl).pipe(first());
  }
}
