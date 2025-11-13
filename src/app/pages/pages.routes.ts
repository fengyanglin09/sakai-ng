import { Routes } from '@angular/router';
import { SpecialtyAppsComponent } from './specialty-apps/specialty-apps.component';
import { AnalyticsReportingComponent } from './analytics-reporting/analytics-reporting.component';


export default [
    { path: 'specialty-app-dashboard', component: SpecialtyAppsComponent },
    { path: 'analytics-report-dashboard', component:AnalyticsReportingComponent},
] as Routes;
