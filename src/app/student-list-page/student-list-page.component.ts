import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-student-list-page',
  standalone: true,
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './student-list-page.component.html',
  styleUrl: './student-list-page.component.css'
})
export class StudentListPageComponent implements OnInit {

  students: any[] = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/person-students').subscribe(data => {
      this.students = data;
    });
  }
}
