import { CourseComponent } from "../courses/course/course.component";

export const confirmExitGuard = (component: CourseComponent): boolean => {
  return component.confirmExit();
};
