import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }


  students: any[] = [];


  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/students').subscribe(data => {
      this.students = data;
    });
  }

    getStudents(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    getStudentByStudentNumber(studentNumber: number): Observable<any> {
        return this.http.get<any>(`${this.url}/${studentNumber}`);
    }
}
