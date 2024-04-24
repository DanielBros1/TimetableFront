import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) {
    }

    private url = 'http://localhost:8080/courses';

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

}
