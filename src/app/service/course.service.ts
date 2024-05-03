import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) {
  }

  courses: any[] = [];

  getCourseById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post(this.url, course);
  }
}
