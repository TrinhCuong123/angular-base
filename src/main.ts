import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { LayoutModule } from './app/layout/layout.module';

platformBrowserDynamic().bootstrapModule(LayoutModule)
  .catch(err => console.error(err));
