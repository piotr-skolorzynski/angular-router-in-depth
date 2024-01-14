import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  course: Course;
  couponCode: string;
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.course = this.route.snapshot.data["course"];
  }

  confirmExit(): boolean {
    return confirm(`Are you sure you want to exit ${this.course.description}?`);
  }
}
