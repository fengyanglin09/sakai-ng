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
                        { label: 'Nonprod Consumer Portal', action: () => window.open('https://nonprod.apiportal.mcc.apix.mayo.edu/') },
                        { label: 'Prod Consumer Portal', action: () => window.open('https://apiportal.mcc.apix.mayo.edu/') },
                        { label: 'Mayo ApigeeX Overview', action: () => window.open('https://docs.mcc.mayo.edu/docs/mcc/apigee-x/overviewx/') },
                        { label: 'Apigee Secret Update', action: () => window.open('https://docs.mcc.mayo.edu/docs/mcc/apigee-x/appsandteamsx/#api-keys') },
                        { label: 'CAF Producer/Consumer Pattern', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/ApigeeX-Connectivity-from-CAF-Projects.aspx') },
                        { label: 'ApigeeX Developer Utilities', action: () => window.open('https://mcc.apix.utilities.mayo.edu/') },
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
            { id: 2, label: 'Dev Tools', activeItemId: 'dev tools', name: 'dev tools', description: 'Description for Resource 2',
                rowCounts: 5,
                resources: [

                    {
                        label: 'Programming Languages',
                        items: [
                            { label: 'Java', action: () => window.open('https://adoptium.net/') },
                            { label: 'Dotnet', action: () => window.open('https://dotnet.microsoft.com/en-us/download') },
                            { label: 'Python', action: () => window.open('https://www.python.org/') },
                            { label: 'C#', action: () => window.open('https://learn.microsoft.com/en-us/dotnet/csharp/') },
                            { label: 'Dokuwiki', action: () => window.open('https://www.dokuwiki.org/dokuwiki') },
                        ]
                    },                    {
                        label: 'Database Systems',
                        items: [
                            { label: 'MSSQL', action: () => window.open('https://learn.microsoft.com/en-us/sql/') },
                            { label: 'Postgresql', action: () => window.open('https://www.postgresql.org/docs/') },
                            { label: 'MongoDB', action: () => window.open('https://www.mongodb.com/docs/manual/core/databases-and-collections/') },
                            { label: 'H2', action: () => window.open('https://www.h2database.com/html/main.html') },
                            { label: 'SQLite', action: () => window.open('https://sqlite.org/') },
                        ]
                    },
                    {
                        label: 'Dev Tools',
                        items: [
                            { label: 'GitHub', action: () => window.open('https://github.com') },
                            { label: 'Bitbucket', action: () => window.open('https://bitbucket.org/product/') },
                            { label: 'Sourcetree', action: () => window.open('https://www.sourcetreeapp.com/') },
                            { label: 'StackOverflow', action: () => window.open('https://stackoverflow.com') },
                            { label: 'Maven', action: () => window.open('https://maven.apache.org/') },
                            { label: 'Git Learning', action: () => window.open('https://learngitbranching.js.org/?locale=en_US') },
                            { label: 'Git Cheat Sheet', action: () => window.open('https://git-scm.com/cheat-sheet') },
                            { label: 'Git Cheat Sheet (GitHub)', action: () => window.open('https://education.github.com/git-cheat-sheet-education.pdf') },
                        ]
                    },
                    {
                        label: 'IDE Tools',
                        items: [
                            { label: 'Intellij IDEA', action: () => window.open('https://www.jetbrains.com/idea/') },
                            { label: 'VS Code', action: () => window.open('https://code.visualstudio.com') },
                            { label: 'SQL Developer (Oracle)', action: () => window.open('https://www.oracle.com/database/sqldeveloper/') },
                            { label: 'DBeaver Community', action: () => window.open('https://dbeaver.io/download/') },
                        ]
                    },
                    {
                        label: 'Api Tools',
                        items: [
                            { label: 'Insomnia', action: () => window.open('https://insomnia.rest/') },
                            { label: 'Postman', action: () => window.open('https://postman.com') },
                            { label: 'Keyrunner', action: () => window.open('https://keyrunner.app/') },
                        ]
                    },
                    {
                        label: 'Project Management Tools',
                        items: [
                            { label: 'Azure DevOps', action: () => window.open('https://dev.azure.com/mclm') },
                            { label: 'trello', action: () => window.open('https://stackoverflow.com') },
                        ]
                    },


                    {
                        label: 'Container Tools',
                        items: [
                            { label: 'Docker', action: () => window.open('https://docker.com') },
                            { label: 'Podman', action: () => window.open('https://podman.io/') },
                        ]
                    },

                ]

            } ,
            { id: 3, label: 'app dev references', activeItemId: 'app dev resources', name: 'app dev resources', description: 'Description for Resource 3' } ,
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
