import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialtyApp } from './spap-data.model';

@Injectable()
// { providedIn: 'root' }
export class SpapDataService {
    getData() {
        return [
            {
                id: 11,
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
                        apigeeUri: 'this is for testing',
                        appDbConnectionString: 'this is for testing2',
                        appAzureId: 'this is for testing3'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: 'this is for testing4'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-s.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                     {
                         id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                ],
                repos:[
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined,
                    },
                    {
                        id: 1,
                        repoName: 'IAC',
                        repoUri: undefined,
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                appCategory: {
                    id: 1,
                    name: 'Java Apps',
                }
            },

            {
                id: 12,
                name: 'GFR',
                configurationItem: 'CI155931678',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:gfr',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=gfr',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://gfr.tcdev.mayo.edu/gfr/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://gfr.tcint.mayo.edu/gfr/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://gfr.tcprod.mayo.edu/gfr/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                ],
                repos:[
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined,
                    },
                    {
                        id: 1,
                        repoName: 'IAC',
                        repoUri: undefined,
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                appCategory: {
                    id: 1,
                    name: 'Java Apps',
                }
            },

            {
                id: 13,
                name: 'NERDS',
                configurationItem: 'CI02041840',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:nerds',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=nerds',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://nerds-dev.mayo.edu/nerds/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://nerds-int.mayo.edu/nerds/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://nerds.mayo.edu/nerds/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                ],
                repos:[
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined,
                    },
                    {
                        id: 1,
                        repoName: 'IAC',
                        repoUri: undefined,
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                appCategory: {
                    id: 1,
                    name: 'Java Apps',
                }
            },

            {
                id: 14,
                name: 'Pub Services',
                configurationItem: 'CI01611088',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:ngs:genomics_commons:publicationservices',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=genomics_commons_pubservices',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-d.dlmp-cad-n.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-t.dlmp-cad-n.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-s.dlmp-cad-p.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-p.dlmp-cad-p.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                ],
                repos:[
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined,
                    },
                    {
                        id: 1,
                        repoName: 'IAC',
                        repoUri: undefined,
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                appCategory: {
                    id: 1,
                    name: 'Java Apps',
                }
            },

            {
                id: 21,
                name: 'CLI API',
                configurationItem: undefined,
                wikiLink: undefined,
                orgLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.dev.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.int.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.stg.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.prod.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                ],
                repos:[
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined,
                    },
                    {
                        id: 1,
                        repoName: 'IAC',
                        repoUri: undefined,
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                appCategory: {
                    id: 2,
                    name: 'DotNet Apps',

                }
            },

            {
                id: 31,
                name: 'CLI API',
                configurationItem: undefined,
                wikiLink: undefined,
                orgLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.dev.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined,
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.int.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.stg.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.prod.mayo.edu/swagger/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                ],
                repos:[
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined,
                    },
                    {
                        id: 1,
                        repoName: 'IAC',
                        repoUri: undefined,
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: undefined,
                appCategory: {
                        id: 3,
                        name: 'Dependency Apps',

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
