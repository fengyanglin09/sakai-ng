import { Injectable } from '@angular/core';
import {
    MsalService,
    MsalBroadcastService
} from '@azure/msal-angular';
import { AuthenticationResult, AccountInfo } from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { UserInfo } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private activeAccount: AccountInfo | null = null;

    constructor(
        private msal: MsalService,
        private http: HttpClient,
        private msalBroadcast: MsalBroadcastService
    ) {
        this.initialize();
    }

    /** Initialize MSAL & activate account */
    private initialize() {
        const accounts = this.msal.instance.getAllAccounts();
        if (accounts.length > 0) {
            this.activeAccount = accounts[0];
            this.msal.instance.setActiveAccount(accounts[0]);
        }

        // Listen for login redirect complete
        this.msalBroadcast.inProgress$
            .pipe(filter((status) => status === 'none'))
            .subscribe(() => {
                const active = this.msal.instance.getActiveAccount();
                if (active) this.activeAccount = active;
            });
    }

    /** Trigger login */
    login() {
        this.msal.loginRedirect();
    }

    /** Trigger logout */
    logout() {
        this.msal.logoutRedirect();
    }

    /** Whether user is logged in */
    isLoggedIn(): boolean {
        return !!this.activeAccount;
    }

    /** Extract ID token */
    getIdToken(): string | null {
        const idToken = this.msal.instance.getActiveAccount()?.idTokenClaims;
        return idToken ? JSON.stringify(idToken) : null;
    }

    /** Extract App Roles from ID token */
    getUserRoles(): string[] {
        const claims: any = this.msal.instance.getActiveAccount()?.idTokenClaims;
        if (!claims) return [];

        // appRoles are usually under "roles" or "appRoles"
        return claims.roles || claims.appRoles || [];
    }

    /** Get Microsoft 365 user profile (name, email, etc.) */
    async getUserInfo(): Promise<any> {
        const token = await this.getAccessToken(["User.Read", "Group.Read.All", "User.Read.All"]);

        return firstValueFrom(this.http.get("https://graph.microsoft.com/v1.0/me", {
            headers: { Authorization: `Bearer ${token}` }
        }));
    }


    /** Acquire access token */
    async getAccessToken(scopes: string[] = ["User.Read"]): Promise<string | null> {
        try {
            const result = await firstValueFrom(this.msal.acquireTokenSilent({
                scopes,
                account: this.activeAccount!
            }));
            return result.accessToken as string;
        } catch {
            // Redirect fallback
            this.msal.acquireTokenRedirect({ scopes });
            return null;
        }
    }

    /** Get user profile info from Graph */
    async getUserProfile(): Promise<UserInfo> {
        const token = await this.getAccessToken(["User.Read"]);

        const graphUser: any = await firstValueFrom(
            this.http.get("https://graph.microsoft.com/v1.0/me", {
                headers: { Authorization: `Bearer ${token}` }
            })
        );



        return {
            fullName: graphUser.displayName,
            firstName: graphUser.givenName,
            lastName: graphUser.surname,
            jobTitle: graphUser.jobTitle,
            email: graphUser.mail || graphUser.userPrincipalName,
            roles: this.getUserRoles()
        } as UserInfo;
    }

    /** Get user photo as base64 */
    async getUserPhoto(): Promise<string | null> {
        const token = await this.getAccessToken(["User.Read"]);
        try {
            const blob = await firstValueFrom(
                this.http
                .get("https://graph.microsoft.com/v1.0/me/photo/$value", {
                    headers: { Authorization: `Bearer ${token}` },
                    responseType: 'blob'
                }));

            return await this.convertBlobToBase64(blob!);
        } catch {
            return null;
        }
    }

    private convertBlobToBase64(blob: Blob): Promise<string> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
        });
    }
}
