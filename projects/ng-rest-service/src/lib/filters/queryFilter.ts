import { Filter } from './filter';

/**
 * Build the query to be used with the endpoint to retrieve a list of objects
 *
 * @param filters - List of filters to be used with the endpoint to filter the results
 * @returns The final filter like a query param
 *
 */
export class QueryFilter {

    static buildQuery(...filters: Filter[]): string {
        return `?${filters.map(filter => `${filter.key}=${filter.values.join(',')}`).join('&')}`;
    }
}
