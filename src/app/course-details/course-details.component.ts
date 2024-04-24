import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";
import {Course} from "../course";

// CommonModule is imported to use ngFor and ngIf in the template
@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);
  course: Course | undefined;


  constructor() {
    const courseId = Number(this.route.snapshot.params['id']);
    this.courseService.getCourseById(courseId).subscribe((course: Course) => {
      this.course = course;
    });
  }
}
