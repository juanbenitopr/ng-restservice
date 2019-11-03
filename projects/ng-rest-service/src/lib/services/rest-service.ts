import { HttpClient } from '@angular/common/http';
import { IRestService } from './irest-services';
import { Observable } from 'rxjs';
import { Filter } from '../filters/filter';
import { QueryFilter } from '../filters/queryFilter';
import { IModel } from '../models/imodel';

export class RestService<T extends IModel> implements IRestService<T> {

    endpoint: string;

    constructor(private httpClient: HttpClient) { }

    get(id: number): Observable<T> {
        const url = this.endpoint + String(id);
        return this.httpClient.get<T>(url);
    }

    list(...filters: Filter[]): Observable<T[]> {
        const url = this.endpoint + QueryFilter.buildQuery(...filters);
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
