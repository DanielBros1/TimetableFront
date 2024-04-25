import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";

// CommonModule is imported to use ngFor and ngIf in the template
@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit{

  course: any;
  times: string[] = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
  days: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  events: any[] = [
    { title: 'Securities Regulation', dayOfWeek: 'Wed', start: '2 PM', end: '5 PM', class: 'corp-fi' },
    { title: 'Corporate Finance', dayOfWeek: 'Thu', start: '10 AM', end: '12 PM', class: 'ent-law' },
    { title: 'Entertainment Law', dayOfWeek: 'Mon', start: '8 AM', end: '12 PM', class: 'securities-reg' },
    { title: 'Criminal Law', dayOfWeek: 'Tue', start: '12 AM', end: '3 PM', class: 'criminal-law' },
  ];

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseService.getCourseById(params['id']).subscribe(course => {
        this.course = course;
      });
    });
  }
}
