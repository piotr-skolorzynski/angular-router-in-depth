import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, first } from "rxjs";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

export const courseResolver = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  coursesService: CoursesService = inject(CoursesService)
): Observable<Course> =>
  coursesService.loadCourseByUrl(route.paramMap.get("courseUrl")).pipe(first());
