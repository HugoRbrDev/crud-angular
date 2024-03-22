import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'courses',
    loadChildren: () => import('./courses/courses.module').then(m=> m.CoursesModule)
  },
];
