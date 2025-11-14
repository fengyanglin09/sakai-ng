import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MayoDevelopResource } from './dev-res-data.model';

@Injectable({
  providedIn: 'root'
})
export class DevResDataService {

    getData() {
        return [
            { id: 1, label: 'azure', activeItemId: 'azure', name: 'azure', description: 'Description for Resource 1' } ,
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
