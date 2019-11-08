import { parseObservableObjects } from './parse-observable-object';
import { IModel } from '../models/imodel';
import { Observable, of } from 'rxjs';
import { cold, getTestScheduler } from 'jasmine-marbles';

class FakeModel implements IModel {
    id = 0;
}

class FakeService<T> {
    hola = 'hey';
    model = FakeModel;


    @parseObservableObjects
    fakeOneObjectParse(obj: T): Observable<T> {
        return cold('-a-|', {a: obj});
    }

    @parseObservableObjects
    fakeMultipleObjectParse(obj): Observable<T> {
        return cold('-a-b-|', { a: obj.a, b: obj.b });
    }
}


describe('Parse Observable Object Decorator', () => {
    const fakeService = new FakeService<FakeModel>();

    it('Parse one model correctly', () => {
        const requestModel = {id: 0};

        expect(fakeService.fakeOneObjectParse(requestModel)).toBeObservable(cold('-a-|', {a: new FakeModel()}));
        getTestScheduler().flush();
    });

    it('Parse multiple models correctly', () => {
        const requestModels = {
            a: {id: 0},
            b: {id: 0}
        };

        const expectedResponse = {
            a: new FakeModel(),
            b: new FakeModel()
        };

        expect(fakeService.fakeMultipleObjectParse(requestModels)).toBeObservable(cold('-a-b-|', expectedResponse));
        getTestScheduler().flush();
    });

});
