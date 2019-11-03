import { Observable } from 'rxjs';
import { Filter } from '../filters/filter';

export interface IRestService<T> {
    get(id: number): Observable<T>;
    list(...filters: Filter[]): Observable<T []>;
    create(obj: T): Observable<any>;
    update(obj: T): Observable<any>;
}
