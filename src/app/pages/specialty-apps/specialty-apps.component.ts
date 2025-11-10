import { Component, OnInit } from '@angular/core';
import { SpapDataService } from './spap-data.service';
import { AppItemIcon, SpecialtyApp } from './spap-data.model';
import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Ripple } from 'primeng/ripple';
import { DatePipe, NgForOf, NgStyle } from '@angular/common';

@Component({
    selector: 'app-specialty-apps',
    imports: [TableModule, ButtonDirective, Tag, Ripple, NgStyle, DatePipe, NgForOf],
    templateUrl: './specialty-apps.component.html',
    styleUrl: './specialty-apps.component.scss',
    providers: [SpapDataService]
})
export class SpecialtyAppsComponent implements OnInit {
    // @ViewChild("table") table!: Table;

    specialtyApps!: SpecialtyApp[];

    // specialty-apps.component.ts
    expandedRowGroupKeys: { [s: number]: boolean } = {};

    constructor(private dataService: SpapDataService) {}

    // ngAfterViewInit(): void {
    //     // Expand all groups
    //     this.customers.forEach(c => {
    //         this.table.toggleRowGroup(c.representative.name, true);
    //     });
    // }

    ngOnInit() {
        this.dataService.getCustomersMedium().then((data) => {
            this.specialtyApps = data;

            // Add all group keys (e.g., representative names)
            this.specialtyApps.forEach((app) => {
                if (app.programmingLanguage?.id) {
                    this.expandedRowGroupKeys[app.programmingLanguage?.id] = true;
                }
            });
        });
    }

    calculateAppTotal(name: string) {
        let total = 0;

        // if (this.specialtyApps) {
        //     this.specialtyApps
        //         .map((app) => {
        //             return <number>(app.programmingLanguage?.name === name ? 1 : 0);
        //         })
        //         .reduce((sum, cur) => sum + cur, 0);
        // }

        if (this.specialtyApps) {
            for (let app of this.specialtyApps) {
                if (app.programmingLanguage?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    // // @ts-ignore
    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'danger';
    //
    //         case 'qualified':
    //             return 'success';
    //
    //         case 'new':
    //             return 'info';
    //
    //         case 'negotiation':
    //             return 'warn';
    //
    //         case 'renewal':
    //             return null;
    //
    //         // default:
    //         //     return null;
    //     }
    // }
    protected readonly AppItemIcon = AppItemIcon;
    protected readonly toString = toString;
}
