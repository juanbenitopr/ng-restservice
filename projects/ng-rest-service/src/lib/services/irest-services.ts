import { Observable } from 'rxjs';
import { QueryFilter } from '../filters/queryFilter';
import { IModel } from '../models/imodel';

export interface IRestService<T> {
    endpoint: string;
    model: IModel;

    get(id: string): Observable<T>;
    list(queryFilter: QueryFilter): Observable<T []>;
    create(obj: T): Observable<any>;
    update(obj: T): Observable<any>;
}
