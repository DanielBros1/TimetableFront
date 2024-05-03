import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url = 'http://localhost:8080/groups';

  constructor(private http: HttpClient) { }


    getGroups(): Observable<any> {
        return this.http.get<any>(this.url);
    }


    getGroupsByCourseId(courseId: any): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/course/${courseId}`);
    }

    addGroup(group: any): Observable<any> {
        return this.http.post(this.url, group);
    }
}
