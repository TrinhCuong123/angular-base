import { bootstrapApplication } from '@angular/platform-browser';
import { AppLayoutComponent } from './app/layout/layout.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/layout/layout-router';

bootstrapApplication(AppLayoutComponent, {
  providers: [provideRouter(routes)],
})
  .catch(err => console.error(err));
