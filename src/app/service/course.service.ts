import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private url = 'http://localhost:8080/courses';

    constructor(private http: HttpClient) { }



    courses: any[] = [];

    // Call the API endpoint to get the list of courses
    //   getAllCourses(): Observable<Course[]> {
    //       return this.http.get<Course[]>(this.url);
    //
    // }
    //
    // // Why Promise<Observable<Course>>???
    //   getCourseById(id: number): Observable<Course> {
    //       return this.http.get<Course>(`${this.url}/${id}`);
    //   }


    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:8080/courses').subscribe(data => {
            this.courses = data;
        });
    }

    getCourses(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }
    getCourseById(id: any): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    addCourse(course: any): Observable<any> {
        return this.http.post(this.url, course);
    }
}
