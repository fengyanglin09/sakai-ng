import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';


export function msalInstanceFactory() {
    return new PublicClientApplication({
        auth: {
            clientId: '483a2857-ef87-4f5f-b9b5-8cdf2c031586',
            authority: 'https://login.microsoftonline.com/a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a',
            redirectUri: 'http://localhost:4200/'
        },
        cache: {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: false
        }
    });
}

export function msalGuardConfigFactory(): MsalGuardConfiguration {
    return {
        interactionType: InteractionType.Redirect,
        authRequest: {
            scopes: ['User.Read']  // Or your API scopes
        }
    };
}

export function msalInterceptorConfigFactory(): MsalInterceptorConfiguration {
    return {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
            ['https://graph.microsoft.com/v1.0/me', ['User.Read']],
        ])
    };
}
