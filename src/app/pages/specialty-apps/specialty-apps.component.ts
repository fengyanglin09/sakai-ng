import { Component, OnInit } from '@angular/core';
import { SpapDataService } from './spap-data.service';
import { AppItemIcon, SpecialtyApp } from './spap-data.model';
import { TableModule } from 'primeng/table';
import { Button, ButtonDirective } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Ripple } from 'primeng/ripple';
import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';
import { Popover } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-specialty-apps',
    imports: [TableModule, ButtonDirective, Tag, Ripple, NgStyle, DatePipe, NgForOf, Tooltip, Popover, InputGroup, InputGroupAddon, NgIf, InputText],
    templateUrl: './specialty-apps.component.html',
    styleUrl: './specialty-apps.component.scss',
    providers: [SpapDataService]
})
export class SpecialtyAppsComponent implements OnInit {
    // @ViewChild("table") table!: Table;

    specialtyApps!: SpecialtyApp[];

    popoverText: { title?: string; content?: string } | undefined = undefined;

    expandedRowGroupKeys: { [s: number]: boolean } = {};

    constructor(private dataService: SpapDataService) {}

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

        if (this.specialtyApps) {
            for (let app of this.specialtyApps) {
                if (app.programmingLanguage?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }


    protected readonly AppItemIcon = AppItemIcon;
    protected readonly toString = toString;

    protected displayPopover(title: string, content: string, op: Popover, $event: MouseEvent) {

        this.popoverText = {};
        this.popoverText.title = title;
        this.popoverText.content = content;
        op.show($event);

        if (op.container) {
            op.align();
        }
    }


    copyToClipboard(text: string | undefined) {
        if (text){
        navigator.clipboard.writeText(text);
        }
    }

}
