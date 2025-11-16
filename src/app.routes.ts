import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { MsalGuard } from '@azure/msal-angular';
import { environment } from './environments/environment';


export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canActivate: environment.production ? [] : [MsalGuard],
        children: [
            { path: '', redirectTo: 'pages/specialty-app-dashboard', pathMatch: 'full' },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    }
];
