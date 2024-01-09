import { Component, OnInit, inject } from "@angular/core";
import { Course, sortCoursesBySeqNo } from "../model/course";
import { Observable } from "rxjs";
import { CoursesService } from "../services/courses.service";
import { map } from "rxjs/operators";
import { LoadingService } from "../../shared/loading/loading.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  private readonly coursesService = inject(CoursesService);
  private readonly loadingService = inject(LoadingService);

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses(): void {
    const courses$ = this.coursesService.loadAllCourses();
    this.beginnerCourses$ = this.filterByCategory(courses$, "BEGINNER");
    this.advancedCourses$ = this.filterByCategory(courses$, "ADVANCED");
  }

  private filterByCategory(courses$: Observable<Course[]>, category: string) {
    return this.loadingService
      .showLoaderUntilCompleted(courses$)
      .pipe(
        map((courses) =>
          courses
            .filter((course) => course.category == category)
            .sort(sortCoursesBySeqNo)
        )
      );
  }
}
