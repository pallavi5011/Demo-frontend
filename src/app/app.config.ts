import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TournamentService } from './services/tournament.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { TenantInterceptorService } from './services/tenant-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),TournamentService, provideHttpClient(withFetch()),{
    provide: HTTP_INTERCEPTORS,
    useClass: TenantInterceptorService,
    multi: true
  }]
};
