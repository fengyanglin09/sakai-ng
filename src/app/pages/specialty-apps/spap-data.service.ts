import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialtyApp } from './spap-data.model';

@Injectable()
// { providedIn: 'root' }
export class SpapDataService {
    getData() {
        return [
            {
                id: 1,
                name: 'SMASH',
                configurationItem: 'CI131329162',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:smash',
                orgLink: undefined,

                environments: [
                {
                    id: 1,
                    name: 'Dev Environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                {
                    id: 2,
                    name: 'Int/Test Environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                {
                    id: 3,
                    name: 'Stg Environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-s.dlmp-cad-p.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                 {
                     id: 4,
                    name: 'Prod Environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                programmingLanguage: {
                    id: 1,
                    name: 'Java Applications',
                    image: 'assets/app/programmingLanguage/java.png'
                }
            },

            {
                id: 2,
                name: 'GFR',
                configurationItem: 'CI155931678',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:gfr',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=gfr',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                programmingLanguage: {
                    id: 1,
                    name: 'Java Applications',
                    image: 'assets/app/programmingLanguage/java.png'
                }
            },

            {
                id: 3,
                name: 'NERDS',
                configurationItem: 'CI02041840',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:nerds',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=nerds',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                programmingLanguage: {
                    id: 1,
                    name: 'Java Applications',
                    image: 'assets/app/programmingLanguage/java.png'
                }
            },


            {
                id: 4,
                name: 'SMASH',
                configurationItem: 'CI131329162',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:smash',
                orgLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-s.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                        appAzureId: 'azure-id-dev-12345'
                    },
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                programmingLanguage: {
                        id: 2,
                        name: 'DotNet Applications',
                        image: 'assets/app/programmingLanguage/dotnet.png'
                }
            },


        ] as SpecialtyApp[];
    }

    constructor(private http: HttpClient) {}

    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }
}
