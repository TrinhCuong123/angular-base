import { Route } from '@angular/router';


export const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('../app.module').then(m => m.AppModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
