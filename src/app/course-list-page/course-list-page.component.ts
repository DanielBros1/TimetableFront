import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../course.service";

@Component({
    selector: 'app-course-list-page',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './course-list-page.component.html',
    styleUrl: './course-list-page.component.css'
})
export class CourseListPageComponent {

    courses: any[] = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    // constructor() {
    //     this.courseService.getAllCourses().subscribe((courses: Course[]) => {
    //         this.courses = courses;
    //     });
    // }


    ngOnInit(): void {
      this.http.get<any[]>('http://localhost:8080/courses').subscribe(data => {
        this.courses = data;
      });
    }

    navigateToCourse(id: number) {
      // navigate to the course details page
      this.router.navigate(['/courses', id]);


    }

    onRowClick(courseId: number) {
        console.log('Kliknięto wiersz o ID:', courseId);
        // Wyświetlenie alertu z komunikatem
        alert('Kliknięto wiersz o ID: ' + courseId);

    }
}
