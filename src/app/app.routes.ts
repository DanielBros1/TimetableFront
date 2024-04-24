import {Routes} from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {StudentListPageComponent} from "./student-list-page/student-list-page.component";
import {CourseListPageComponent} from "./course-list-page/course-list-page.component";

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
    path: 'courses',
    component: CourseListPageComponent,
    title: 'Course List Page'
  }

];
