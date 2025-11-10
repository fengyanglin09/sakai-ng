import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
                devEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                intEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                stgEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-s.dlmp-cad-p.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                prodEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                programmingLanguage: {
                    id: 1,
                    name: 'Java Applications',
                    image: 'assets/app/programmingLanguage/java.png'
                }
            },

            {
                id: 1,
                name: 'SMASH',
                configurationItem: 'CI131329162',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:smash',
                orgLink: undefined,
                devEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                intEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                stgEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-s.dlmp-cad-p.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                prodEnv: {
                    name: 'dev environment',
                    available: true,
                    appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                    appSwaggerUri: undefined,
                    appDbConnectionString: 'Server=smash-dev-sql.mayo.edu;Database=SMASH;User Id=smash_user;Password=********;',
                    appAzureId: 'azure-id-dev-12345'
                },
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                programmingLanguage: {
                        id: 2,
                        name: 'DotNet Applications',
                        image: 'assets/app/programmingLanguage/dotnet.png'
                }
            }

        ];
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
