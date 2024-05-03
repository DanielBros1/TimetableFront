import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../service/course.service";
import {GroupService} from "../service/group.service";

// CommonModule is imported to use ngFor and ngIf in the template
@Component({
    selector: 'app-course-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

    course: any;
    groups: any[] = [];
    times: string[] = ['8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
    days: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    constructor(private route: ActivatedRoute,
                private courseService: CourseService,
                private groupsService: GroupService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.courseService.getCourseById(params['id']).subscribe(course => {
                this.course = course;
                // this.getAllGroups();
                this.getGroups(this.course.id);
            });
        });
    }
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
