import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    selector: 'app-cad-apps',
    imports: [],
    templateUrl: './cad-apps.component.html',
    styleUrl: './cad-apps.component.scss'
})
export class CadAppsComponent implements OnInit {

    constructor(private auth: AuthService) {
    }

    ngOnInit(): void {
        if (!this.auth.isLoggedIn()) {
            this.auth.login();
        }

        console.log("Roles:", this.auth.getUserRoles());

        this.auth.getUserPhoto().then(photo => {
            const userPhoto = photo;
            console.log(photo);
        });
    }
}
