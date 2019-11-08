import { QueryFilter } from './queryFilter';
import { Filter } from './filter';

describe('test query filter class', () => {
    let filters = [];
    beforeEach(() => {
       filters = [
            new Filter('id', '1'),
            new Filter('name', 'Juan'),
            new Filter('firstName', 'Jonh', 'Arthur')
       ];
    });

    it('build query filter', () => {
        const queryFilter = new QueryFilter(...filters);

        expect(queryFilter).toBeTruthy();
        expect(queryFilter.getAllFilters().length).toBe(3);
    });

    it('build filter string', () => {
        const queryFilter = new QueryFilter(...filters);

        expect(queryFilter.getQuery()).toBe('?id=1&name=Juan&firstName=Jonh,Arthur');
    });

    it('operations with QueryFilter object', () => {
        const queryFilter = new QueryFilter();

        queryFilter.addFilter(new Filter('lastName', 'Jonh'));
        queryFilter.addFilter(new Filter('lastName', 'Peter'));

        expect(queryFilter.getFilterValue('lastName')).toEqual(['Jonh', 'Peter']);
        expect(queryFilter.getFilter('lastName')).toEqual(new Filter('lastName', 'Jonh', 'Peter'));

        queryFilter.clearFilters();

        expect(queryFilter.getAllFilters().length).toBe(0);
    });

});
