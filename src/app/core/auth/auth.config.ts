import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';
import { environment } from '../../../environments/environment';


export function msalInstanceFactory() {
    return new PublicClientApplication({
        auth: {
            clientId: environment.clientId,
            authority: `https://login.microsoftonline.com/{environment.tenantId}`,
            redirectUri: environment.redirectUri
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
