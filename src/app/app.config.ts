import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const URLSERVER = new InjectionToken<string>("url")

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(
        withFetch()
      ),
      {
        provide:URLSERVER, useValue:'https://my-json-server.typicode.com/typicode/demo'
      }
  ]
};
