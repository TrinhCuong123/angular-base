import { Route } from '@angular/router';


export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('../ui/recruitment/recruitment.component').then(m => m.RecruitmentComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('../ui/recruitment/recruitment.component').then(m => m.RecruitmentComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
