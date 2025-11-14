import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { DevResDataService } from './dev-res-data.service';
import { MayoDevelopResource } from './dev-res-data.model';

@Component({
    selector: 'app-development-resources',
    imports: [Button, Accordion, AccordionPanel, AccordionHeader, AccordionContent],
    templateUrl: './development-resources.component.html',
    styleUrl: './development-resources.component.scss'
})
export class DevelopmentResourcesComponent implements OnInit {
    active: number | string = 'azure';

    developmentResources!: MayoDevelopResource[];

    activeIndexChange(index: number | string) {
        this.active = index;
    }

    constructor(private dataService: DevResDataService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.developmentResources = data;

        })
    }
}
