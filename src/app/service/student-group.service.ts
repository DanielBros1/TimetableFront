import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StudentGroupService {

    private url = 'http://localhost:8080/studentGroups';

    constructor(private http: HttpClient) {
    }
    getStudentGroupsByStudentNumber(studentNumber: String): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/student/${studentNumber}`);
    }

    addStudentToGroup(studentGroup: any): Observable<any> {
        return this.http.post(this.url, studentGroup);
    }

}
