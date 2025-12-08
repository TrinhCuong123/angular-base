 
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BaseConfig } from './services/base-config.service';
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide : APP_INITIALIZER,
		  multi : true,
		  deps : [BaseConfig],
		  useFactory : (appConfigService : BaseConfig) =>  () => appConfigService.loadConfig()
    }
  ]
};