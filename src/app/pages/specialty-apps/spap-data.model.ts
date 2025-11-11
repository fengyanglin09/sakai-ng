
export const AppItemIcon = {
    "wikiLink": "fa fa-book",
    "orgLink": "fa fa-sitemap",
    "appUri": "fa fa-laptop-code",
    "swaggerUri": "fa fa-file-code",
    "dbConnectionString": "fa fa-database",
    "azureId": "fa fa-key",
    "apigeeUri": "fa fa-exchange-alt",
    "appSpecificationLink": "fa fa-file-alt"
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

export interface ProgrammingLanguage {
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
    programmingLanguage?: ProgrammingLanguage;
}
