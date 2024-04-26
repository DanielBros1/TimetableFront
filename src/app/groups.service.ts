import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private url = 'http://localhost:8080/groups';

  constructor(private http: HttpClient) { }

    groups: any[] = [];


    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:8080/groups').subscribe(data => {
            this.groups = data;
        });
    }

    getGroups(): Observable<any> {
        return this.http.get<any>(this.url);
    }


    getGroupsByCourseId(courseId: any): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/course/${courseId}`);
    }
}
