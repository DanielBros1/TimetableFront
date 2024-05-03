import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../service/course.service";
import {FormsModule} from "@angular/forms";
import {GroupService} from "../service/group.service";
import {TeacherService} from "../service/teacher.service";


@Component({
    selector: 'app-course-list-page',
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule],
    templateUrl: './course-list-page.component.html',
    styleUrl: './course-list-page.component.css'
})
export class CourseListPageComponent {

    courses: any[] = [];
    teachers: any[] = [];

    courseName: string = '';
    coordinatorTeacherId: string = '';
    ects: string = '';

    courseID: string = '';
    teacherID: string = '';
    groupNumber: string = '';
    dateStarted: string = '';
    dateFinished: string = '';
    dayOfWeek: string = '';
    type: string = '';


    @ViewChild('popupCourse') popupCourse!: ElementRef;
    @ViewChild('popupGroup') popupGroup!: ElementRef;

    constructor(private http: HttpClient, private router: Router, private courseService: CourseService, private groupService: GroupService, private teacherService: TeacherService) {
    }

    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:8080/courses').subscribe(data => {
            this.courses = data;
            this.fetchAllTeachers();
        });
    }

    private fetchAllTeachers() {
        // use the teacher service to fetch all teachers
        this.teacherService.getTeachers().subscribe(teachers => {
            this.teachers = teachers;
        });
    }

    addCourse(courseName: string, coordinatorTeacherId: string, ects: string): void {
        const course = {
            name: courseName,
            coordinatorTeacher: {
                id: +coordinatorTeacherId // + converts string to number
            },
            ects: +ects
        };

        this.courseService.addCourse(course).subscribe(() => {
            console.log('Course added');
        });
        this.closeCoursePopup();
    }

    async addGroup(courseId: string, teacherId: string, groupNumber: string, dateStarted: string, dateFinished: string, dayOfWeek: string, type: string): Promise<void> {
        let selectedCourse: any = this.findCourseById(+courseId);
        let selectedTeacher: any = this.findTeacherById(+teacherId);

        if (groupNumber === '') {
            groupNumber = '0';
        }
        if (dateStarted >= dateFinished) {
            throw new Error('Date started must be before date finished');
        }

        try {
            await this.checkIfTimeSlotIsAvailable(selectedCourse, dateStarted, dateFinished, dayOfWeek);
            const group = {
                course: selectedCourse,
                teacher: selectedTeacher,
                groupNumber: +groupNumber,
                dateStarted: dateStarted,
                dateFinished: dateFinished,
                dayOfWeek: dayOfWeek,
                type: type
            };
            await this.groupService.addGroup(group).toPromise();
            console.log('Group added');
        } catch (error) {
            console.error(error);
        }
        this.closeGroupPopup();
    }


    private async checkIfTimeSlotIsAvailable(selectedCourse: any, dateStarted: string, dateFinished: string, dayOfWeek: string): Promise<void> {
        const groups = await this.groupService.getGroupsByCourseId(selectedCourse.id).toPromise();
        if (groups) {
            for (let group of groups) {
                if (dayOfWeek === group.dayOfWeek) {
                    console.log('Group: ' + group);
                    console.log('This group details: ' + group.dateStarted + ' ' + group.dateFinished + ' ' + group.dayOfWeek);
                    console.log('Selected group details: ' + dateStarted + ' ' + dateFinished + ' ' + dayOfWeek);

                    // porownaj godziny rozpoczecia i zakonczenia
                    if (dateStarted < group.dateStarted) {
                        console.log('dateStarted < group.dateStarted' + dateStarted + ' < ' + group.dateStarted);
                    }
                    if (dateFinished > group.dateFinished) {
                        console.log('dateFinished > group.dateFinished' + dateFinished + ' > ' + group.dateFinished);
                    }
                    if (dateStarted > group.dateStarted) {
                        console.log('dateStarted > group.dateStarted' + dateStarted + ' > ' + group.dateStarted);
                    }
                    if (dateFinished < group.dateFinished) {
                        console.log('dateFinished < group.dateFinished' + dateFinished + ' < ' + group.dateFinished);
                    }
                    if (dateFinished > group.dateStarted) {
                        console.log('dateFinished > group.dateStarted' + dateFinished + ' > ' + group.dateStarted);
                    }
                    if (dateStarted < group.dateFinished) {
                        console.log('dateStarted < group.dateFinished' + dateStarted + ' < ' + group.dateFinished);
                    }
                }
                if (dateStarted <= group.dateStarted && dateFinished >= group.dateFinished && dayOfWeek === group.dayOfWeek) {
                    throw new Error('1: Time slot is not available');
                }
                if (dateStarted >= group.dateStarted && dateFinished <= group.dateFinished && dayOfWeek === group.dayOfWeek) {
                    throw new Error('2: Time slot is not available');
                }
                if (dateFinished > group.dateStarted && dateStarted < group.dateFinished && dayOfWeek === group.dayOfWeek) {
                    throw new Error('3: Time slot is not available');
                }
                if (dateStarted < group.dateFinished && dateFinished > group.dateStarted && dayOfWeek === group.dayOfWeek) {
                    throw new Error('4: Time slot is not available');
                }

            }
        }
    }

    findCourseById(courseId: number): any {
        for (let course of this.courses) {
            if (course["id"] === courseId) {
                console.log('Course found: ' + course);
                return course;
            }
        }
    }


    findTeacherById(teacherId: number): any {
        for (let teacher of this.teachers) {
            if (teacher["id"] === teacherId) {
                console.log('Teacher found: ' + teacher);
                return teacher;
            }
        }
    }

    showAddGroupPopup(): void {
        this.popupGroup.nativeElement.classList.add('active');
    }

    closeGroupPopup(): void {
        this.popupGroup.nativeElement.classList.remove('active');

    }

    showAddCoursePopup(): void {
        this.popupCourse.nativeElement.classList.add('active');
    }

    closeCoursePopup(): void {
        this.popupCourse.nativeElement.classList.remove('active');
    }
}
