
export const AppItemIcon = {
    "wikiLink": "fa fa-book",
    "orgLink": "fa fa-sitemap",
    "appUri": "fa fa-laptop-code",
    "swaggerUri": "fa fa-file-code",
    "dbConnectionString": "fa fa-database",
    "azureId": "fa fa-key",
    "apigeeUri": "fa fa-exchange-alt",
    "appSpecificationLink": "fa fa-file-alt",
    'appBackLogLink': 'fa fa-tasks'
}

export type AppHeaderInfoType = 'name' | 'image' | 'backlogUrl';


export const AppHeaderInfo: AppHeader[] = [
    {
        id: 1,
        name: 'Java Apps',
        image: 'assets/app/appClass/java.png',
        backlogUrl:
            [
                { name: 'SMASH', url: 'https://dev.azure.com/mclm/GBS%20CAD/_backlogs/backlog/SMASH/Stories', label: 'SMASH Backlog'  },
                { name: 'Empiricals', url: 'https://dev.azure.com/mclm/GBS%20CAD/_backlogs/backlog/Empiricals/Stories', label: 'Empiricals Backlog'  }
            ]
    },

    {
        id: 2,
        name: 'DotNet Apps',
        image: 'assets/app/appClass/dotnet.png',
        backlogUrl: undefined
    },

    {
        id: 3,
        name: 'Dependency Apps',
        image: 'assets/app/appClass/dependencyApp.png',
        backlogUrl: undefined
    }
]

export interface AppHeader {
    id?: number;
    name?: string;
    image?: string;
    backlogUrl?: {name?: string, url?: string, label?: string}[];

}

export interface AppEnvironment {
    id?: number;
    available?: boolean;
    name?: string;
    appWebUri?: string;
    appSwaggerUri?: string;
    apigeeUri?: string;
    appDbConnectionString?: string;
    appAzureId?: string;
}

export interface AppNote {
    id?: number;
    noteTitle?: string;
    noteText?: string;
    createdOn?: string | Date;
}

export interface AppCategory {
    id?: number;
    name?: string;
    image?: string;
}

export interface SpecialtyApp {
    id?: number;
    name?: string;
    configurationItem?: string;
    wikiLink?: string;
    orgLink?: string;
    environments?: AppEnvironment[];
    updatedOn?: string | Date;
    appSpecs?: AppNote[];
    appCategory?: AppCategory;
}
