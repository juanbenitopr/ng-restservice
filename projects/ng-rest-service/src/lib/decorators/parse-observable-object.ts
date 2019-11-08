import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export function parseObservableObjects<T>({model}): MethodDecorator {
    return (target: object, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor => {
            const originalMethod = propertyDesciptor.value;

            propertyDesciptor.value = function(...objs: any[]) {
                const response = originalMethod.apply(this, objs) as Observable<T>;

                return response.pipe(map(element => Object.assign(new model(), element)));
            };

            return propertyDesciptor;
    };

}
