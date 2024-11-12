import { ApplicationConfig, InjectionToken, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

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
      }, provideClientHydration(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
};
