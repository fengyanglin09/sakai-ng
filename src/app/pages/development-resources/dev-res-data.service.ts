import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MayoDevelopResource } from './dev-res-data.model';

@Injectable({
  providedIn: 'root'
})
export class DevResDataService {

    getData() {
        return [
            { id: 1, label: 'Cloud', activeItemId: 'cloud', name: 'cloud', description: 'cloud development resources' ,
                rowCounts: 5,
            resources: [
                {
                    label: 'Azure Cloud',
                    items: [
                        { label: 'DevOps', action: () => window.open('https://dev.azure.com/mclm/') },
                        { label: 'Server Status', action: () => window.open('https://status.dev.azure.com/') },
                        { label: 'Azure Portal', action: () => window.open('https://portal.azure.com/') },
                        { label: 'Enterprise Skills Init', action: () => window.open('https://esi.microsoft.com/') },
                    ]
                },

                {
                    label: 'Google Cloud',
                    items: [
                        { label: 'Mayo Clinic Cloud (MCC)', action: () => window.open('https://mcc.mayo.edu/') },
                        { label: 'GCP Console', action: () => window.open('https://console.cloud.google.com') },
                        { label: 'Server Status', action: () => window.open('https://status.cloud.google.com/') },
                        { label: 'Server Status (USA)', action: () => window.open('https://status.cloud.google.com/regional/americas') },
                        { label: 'Cloud App Factory (CAF)', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/Cloud-App-Factory.aspx') },
                        { label: 'CAF Documents', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/Shared%20Documents/Forms/AllItems.aspx') },
                        { label: 'Mayo GCP Learning', action: () => window.open('https://mcc.mayo.edu/resources/google-learning') },
                    ]
                },

                {
                    label: 'Apigee',
                    items: [
                        { label: 'Mayo Clinic Cloud (MCC)', action: () => window.open('https://mcc.mayo.edu/') },
                        { label: 'GCP Console', action: () => window.open('https://console.cloud.google.com') },
                        { label: 'Server Status', action: () => window.open('https://status.cloud.google.com/') },
                        { label: 'Server Status (USA)', action: () => window.open('https://status.cloud.google.com/regional/americas') },
                        { label: 'Cloud App Factory (CAF)', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/Cloud-App-Factory.aspx') },
                        { label: 'CAF Documents', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/Shared%20Documents/Forms/AllItems.aspx') },
                        { label: 'Mayo GCP Learning', action: () => window.open('https://mcc.mayo.edu/resources/google-learning') },
                    ]
                },

                {
                    label: 'Dev Tools',
                    items: [
                        { label: 'GitHub', action: () => window.open('https://github.com') },
                        { label: 'VS Code', action: () => window.open('https://code.visualstudio.com') },
                        { label: 'Postman', action: () => window.open('https://postman.com') },
                        { label: 'StackOverflow', action: () => window.open('https://stackoverflow.com') },
                        { label: 'Docker', action: () => window.open('https://docker.com') },
                        { label: 'VS Code', action: () => window.open('https://code.visualstudio.com') },
                        { label: 'Postman', action: () => window.open('https://postman.com') },

                    ]
                },

            ]
            } ,
            { id: 2, label: 'gcp', activeItemId: 'gcp', name: 'gcp', description: 'Description for Resource 2' } ,
            { id: 3, label: 'apigee', activeItemId: 'apigee', name: 'apigee', description: 'Description for Resource 3' } ,
            ] as MayoDevelopResource[];
    }




    constructor(private http: HttpClient) { }

    getDataMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getDataSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getDataMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getDataLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
