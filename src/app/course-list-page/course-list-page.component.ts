import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../service/course.service";
import {FormsModule} from "@angular/forms";


@Component({
    selector: 'app-course-list-page',
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule],
    templateUrl: './course-list-page.component.html',
    styleUrl: './course-list-page.component.css'
})
export class CourseListPageComponent {

    courses: any[] = [];

    constructor(private http: HttpClient, private router: Router, private courseService: CourseService) {
    }

    ngOnInit(): void {
      this.http.get<any[]>('http://localhost:8080/courses').subscribe(data => {
        this.courses = data;
      });
    }

    navigateToCourse(id: number) {
      // navigate to the course details page
      this.router.navigate(['/courses', id]);


    }

    addCourse() {
        const course = {
            name: 'New Course',
            coordinatorTeacher: {
                id: 1 // replace with the actual teacher ID
            },
            ects: 6
        };

        this.courseService.addCourse(course).subscribe(() => {
            console.log('Course added');
        });
    }
}
