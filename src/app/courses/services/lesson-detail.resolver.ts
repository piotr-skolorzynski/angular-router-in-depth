import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { LessonDetail } from "../model/lesson-detail";

export const lessonDetailResolver = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  coursesService: CoursesService = inject(CoursesService)
): Observable<LessonDetail> =>
  coursesService.loadLessonDetail(
    route.parent.paramMap.get("courseUrl"),
    route.paramMap.get("lessonSeqNo")
  );
