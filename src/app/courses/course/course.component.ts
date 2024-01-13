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

  ngOnInit() {
    //course data will be provided by CourseResolver and we need to store it
    this.course = this.route.snapshot.data["course"];
  }
}
