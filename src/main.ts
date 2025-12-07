import { bootstrapApplication } from '@angular/platform-browser';
import { AppLayoutComponent } from './app/layout/layout.component';
import { appConfig } from './app/app.config,';

bootstrapApplication(AppLayoutComponent, appConfig)
  .catch(err => console.error(err));
