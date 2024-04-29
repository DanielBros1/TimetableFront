import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {StudentGroupService} from "../service/student-group.service";
import {GroupsService} from "../service/groups.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-student-list-page',
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule],
    templateUrl: './student-list-page.component.html',
    styleUrl: './student-list-page.component.css'
})
export class StudentListPageComponent implements OnInit {

    students: any[] = [];
    groups: any[] = [];

    studentID: string = '';
    groupID: string = '';

    @ViewChild('popup') popup!: ElementRef;
    @ViewChild('email') email!: ElementRef;
    @ViewChild('password') password!: ElementRef;

    constructor(private http: HttpClient, private router: Router, private studentGroupService: StudentGroupService, private groupsService: GroupsService) {
    }

    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:8080/students').subscribe(data => {
            this.students = data;
            this.fetchGroups();
        });
    }

    // groupId should be a number (int)

    addStudentToGroup(studentId: string, groupId: string): void {
        let selectedStudent: any = this.findStudentById(studentId);
        let selectedGroup: any = this.findGroupById(+groupId);
        const studentGroup = {
            student: selectedStudent,
            group: selectedGroup
        };
        console.log('StudentGroup: ' + studentGroup);
        // check if student is already in group


        this.studentGroupService.addStudentToGroup(studentGroup).subscribe(studentGroup => {
            console.log('Student added to group');
        });
    }

    findStudentById(studentId: string): any {
        for (let student of this.students) {
            if (student["studentNumber"] === studentId) {
                console.log('Student found: ' + student);
                return student;
            }
        }
    }

    findGroupById(groupId: number): any {
        for (let group of this.groups) {
            if (group["id"] === groupId) {
                console.log('Group found: ' + group);
                return group;
            }
        }
    }

    showLogin(): void {
        this.popup.nativeElement.classList.add('active');
    }

    closePopup(): void {
        this.popup.nativeElement.classList.remove('active');
    }

    // fetch all groups
    fetchGroups(): void {
        this.groupsService.getGroups().subscribe(data => {
            this.groups = data;
        });
    }

    login(): void {
        const email = this.email.nativeElement.value;
        const password = this.password.nativeElement.value;
        console.log('Email: ' + email);
        console.log('Password: ' + password);
    }
}
