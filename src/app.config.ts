import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withHashLocation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalGuard, MsalInterceptor, MsalService } from '@azure/msal-angular';
import { msalGuardConfigFactory, msalInstanceFactory, msalInterceptorConfigFactory } from './app/core/auth/auth.config';

export const appConfig: ApplicationConfig = {
    providers: [
        // Required services
        MsalService,
        MsalGuard,
        MsalBroadcastService,

        {
            provide: MSAL_INSTANCE,
            useFactory: msalInstanceFactory
        },
        {
            provide: MSAL_GUARD_CONFIG,
            useFactory: msalGuardConfigFactory
        },
        {
            provide: MSAL_INTERCEPTOR_CONFIG,
            useFactory: msalInterceptorConfigFactory
        },

        // HTTP client + interceptor
        provideHttpClient(withInterceptorsFromDi()),

        {
            provide: MsalInterceptor,
            useClass: MsalInterceptor,
            multi: true
        },

        provideRouter(appRoutes,
            withHashLocation(),
            withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
            // withEnabledBlockingInitialNavigation(),
        ),
        // provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })
    ]
};
