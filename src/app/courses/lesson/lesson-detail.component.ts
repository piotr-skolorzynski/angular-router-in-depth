import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson: LessonDetail;
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.lesson = this.route.snapshot.data["lesson"];
  }
}
