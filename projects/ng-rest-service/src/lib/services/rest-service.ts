import { HttpClient } from '@angular/common/http';
import { IRestService } from './irest-services';
import { Observable } from 'rxjs';
import { Filter } from '../filters/filter';
import { QueryFilter } from '../filters/queryFilter';
import { IModel } from '../models/imodel';
import { parseObservableObjects } from '../decorators/parse-observable-object';

export class RestService<T extends IModel> implements IRestService<T> {

    model: T;

    endpoint: string;

    constructor(private httpClient: HttpClient) { }

    @parseObservableObjects
    get(id: string): Observable<T> {
        const url = this.endpoint + id;
        return this.httpClient.get<T>(url);
    }

    @parseObservableObjects
    list(queryFilter: QueryFilter): Observable<T[]> {
        const url = this.endpoint + queryFilter.getQuery();
        return this.httpClient.get<T[]>(url);
    }

    create(obj: T): Observable<any> {
        return this.httpClient.post<any>(this.endpoint, obj);
    }

    update(obj: T): Observable<any> {
        const url = this.endpoint + obj.id;
        return this.httpClient.put<any>(url, obj);
    }
}
