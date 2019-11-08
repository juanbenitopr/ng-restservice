import { Filter } from './filter';

/**
 * Build the query to be used with the endpoint to retrieve a list of objects
 *
 * @param filters - List of filters to be used with the endpoint to filter the results
 * @returns The final filter like a query param
 *
 */
export class QueryFilter {

    private filters: {[key: string]: string[]} = {};

    constructor(...filters: Filter[]) {
        filters.forEach(filter => this.addFilter(filter));
    }

    addFilter(filter: Filter) {
        if (filter.key in this.filters) {
            this.filters[filter.key].push(...filter.values);
        } else {
            this.filters[filter.key] = filter.values;
        }
    }

    getFilter(key: string): Filter {
        return new Filter(key, ...this.filters[key]);
    }

    getAllFilters(): Filter[] {
        return Object.entries(this.filters).map( ([filterKey, filterValues]) => new Filter(filterKey, ...filterValues));
    }

    getFilterValue(key: string): string[] | null {
        return this.filters[key];
    }

    clearFilters() {
        this.filters = {};
    }

    getQuery(): string {
        return `?${Object.entries(this.filters).map(([filterKey, filterValues]) => `${filterKey}=${filterValues.join(',')}`).join('&')}`;
    }
}
