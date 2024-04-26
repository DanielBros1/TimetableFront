import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";
import {GroupsService} from "../groups.service";

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
  groups: any[] = [];
  times: string[] = ['8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
  days: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  events: any[] = [
    { title: 'Securities Regulation', dayOfWeek: 'Wednesday', start: '2 PM', end: '5 PM', class: 'corp-fi' },
    { title: 'Corporate Finance', dayOfWeek: 'Thursday', start: '10 AM', end: '12 AM', class: 'ent-law' },
    { title: 'Entertainment Law', dayOfWeek: 'Monday', start: '8 AM', end: '12 AM', class: 'securities-reg' },
    { title: 'Criminal Law', dayOfWeek: 'Tuesday', start: '12 AM', end: '3 PM', class: 'criminal-law' },
  ];


  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseService.getCourseById(params['id']).subscribe(course => {
        this.course = course;
        // this.getAllGroups();
       this.getGroups(this.course.id);
      });
    });
  }

    // getAllGroups() {
    // this.groupsService.getGroups().subscribe(groups => {
    //   this.groups = groups;
    // });
    // }

    // getGroups(courseId: number) {
    // this.groupsService.getGroupsByCourseId(courseId).subscribe(groups => {
    //   this.groups = groups;
    //   // print the groups
    //
    // });
    // }

  getGroups(courseId: number) {
    this.groupsService.getGroupsByCourseId(courseId).subscribe(groups => {
      this.groups = groups.map(group => {
        // convert the date format ex. (8:00:00 --> 8 AM)
        const dateStarted = this.convertTimeFormat(group.dateStarted);
        const dateFinished = this.convertTimeFormat(group.dateFinished);
        return {...group, dateStarted, dateFinished};
      });
    });
  }

  convertTimeFormat(time: string): string {
    const [hour, minute, second] = time.split(':');
    const hourNumber = Number(hour);
    const period = hourNumber < 12 ? 'AM' : 'PM';
    const newHour = hourNumber <= 12 ? hourNumber : hourNumber - 12;
    return `${newHour} ${period}`;
  }
}
