import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";

@Component({
  selector: "lessons-list",
  templateUrl: "./lessons-list.component.html",
  styleUrls: ["./lessons-list.component.css"],
})
export class LessonsListComponent implements OnInit {
  lessons: LessonSummary[];
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.lessons = this.route.snapshot.data["lessons"];
  }
}
