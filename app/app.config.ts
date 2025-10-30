import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Note: platform-specific providers (like provideClientHydration) are applied
// in the platform bootstrap files (main.ts / main.server.ts). This file
// contains only application-wide providers to avoid duplicate provider
// registration between server and browser.
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};
