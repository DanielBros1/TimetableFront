import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../groups.service";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";
import {StudentService} from "../student.service";
import {StudentGroupService} from "../student-group.service";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-student-details',
    standalone: true,
    imports: [
        CommonModule // zamiast CommonModule warto rozważyć bardziej specyficzne moduły (NgIf, NgForOf)
    ],
    templateUrl: './student-details.component.html',
    styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

    student: any;
    groups: any[] = [];
    times: string[] = ['8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
    days: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];


    constructor(private route: ActivatedRoute,
                private studentsService: StudentService,
                private studentGroupService: StudentGroupService
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.studentsService.getStudentByStudentNumber(params['studentNumber']).subscribe(student => {
                this.student = student;
                this.getGroupsByStudentNumber(this.student.studentNumber);
            });
        });
    }

    getGroupsByStudentNumber(studentNumber: String) {
        this.studentGroupService.getStudentGroupsByStudentNumber(studentNumber).subscribe(studentGroups => {
            this.groups = studentGroups.map(group => {
                // convert the date format ex. (8:00:00 --> 8 AM)
                const dateStarted = this.convertTimeFormat(group.group.dateStarted);
                const dateFinished = this.convertTimeFormat(group.group.dateFinished);
                return {...group, group: {...group.group, dateStarted, dateFinished}};
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
