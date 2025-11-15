#### ✅ 1. Install Microsoft Identity (MSAL) libraries

```shell
npm install @azure/msal-browser @azure/msal-angular
```

#### ✅ 2. Azure App Registration (Entra ID)

In Azure Portal:

- Go to Azure Active Directory → App registrations
- Create a SPA application
- Set Redirect URIs:

 - http://localhost:4200/
 - http://localhost:4200/auth


Enable:
- ✔ Single-page application
- ✔ Authorization Code Flow with PKCE

Add API permissions (example):

- User.Read (Microsoft Graph)
- Any custom API: api://xxx/.default

Keep the values:

- Tenant ID
- Client ID


#### ✅ 3. Add MSAL to your main.ts (standalone app) or app.module.ts 

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {
  MsalGuard,
  MsalService,
  MsalBroadcastService,
  MsalInterceptor,
  MSAL_INSTANCE,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG
} from '@azure/msal-angular';

import {
  PublicClientApplication,
  InteractionType
} from '@azure/msal-browser';

export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'YOUR_CLIENT_ID',
      authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID',
      redirectUri: 'http://localhost:4200'
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false
    }
  });
}

export function MsalGuardConfigFactory() {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['User.Read']
    }
  };
}

export function MsalInterceptorConfigFactory() {
  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap: new Map([
      ['https://graph.microsoft.com/v1.0/me', ['User.Read']]
    ])
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    // Required services
    MsalService,
    MsalGuard,
    MsalBroadcastService,

    // MSAL instance
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MsalGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MsalInterceptorConfigFactory
    },

    // HTTP client + interceptor
    provideHttpClient(
      withInterceptorsFromDi()
    ),

    {
      provide: MsalInterceptor,
      useClass: MsalInterceptor,
      multi: true
    }
  ]
});

```


#### ✅ 4. Protect routes with MsalGuard
```typescript
import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './pages/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  }
];

```


#### Allowed Role Types

##### Allowed member types: Applications
- Machine-to-machine auth
- API-to-API permissions
- Daemon apps
- Microservices calling other services
- 
##### Allowed role types: Users/Groups
- Assigning roles to real users
- Roles appear inside ID token
- Angular can read them via idTokenClaims['roles']

##### assign roles to users/groups
- Go to Azure AD → Enterprise Applications → Your App → Users and Groups
- add youruser → Admin

##### read roles in angular
```typescript
const roles = this.msal.instance.getActiveAccount()?.idTokenClaims?.['roles'];
console.log(roles); // ["Admin"]
```
