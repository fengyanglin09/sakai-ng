import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">

        <img src="assets/app/mayo-footer.png" alt="Footer Logo" style="height: 1.8em; width: auto">
        Mayo Foundation for Medical Education and Research © 2025. All rights reserved.
    </div>`
})
export class AppFooter {}
