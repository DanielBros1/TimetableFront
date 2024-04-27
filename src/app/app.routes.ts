import {Routes} from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {StudentListPageComponent} from "./student-list-page/student-list-page.component";
import {CourseListPageComponent} from "./course-list-page/course-list-page.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {StudentDetailsComponent} from "./student-details/student-details.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
    title: 'Welcome Page'
  },
  {
    path: 'students',
    component: StudentListPageComponent,
    title: 'Student List Page'
  },

  {
    path: 'student/details/:studentNumber',
    component: StudentDetailsComponent,
    title: 'Student Details Page'
  },

  {
    path: 'courses',
    component: CourseListPageComponent,
    title: 'Course List Page'
  },

  {
    path: 'course/details/:id',
    component: CourseDetailsComponent,
    title: 'Course Details Page'
  }

];
