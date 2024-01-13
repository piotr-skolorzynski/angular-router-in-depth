import { Observable } from "rxjs";
import { LessonSummary } from "../model/lesson-summary";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { CoursesService } from "./courses.service";

export const lessonsResolver = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  coursesService: CoursesService = inject(CoursesService)
): Observable<LessonSummary[]> =>
  coursesService.loadAllCourseLessonsSummary(route.paramMap.get("courseUrl"));
