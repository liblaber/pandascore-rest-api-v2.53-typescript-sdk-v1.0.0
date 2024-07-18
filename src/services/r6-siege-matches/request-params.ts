import { FilterOverR6SiegeMatches, filterOverR6SiegeMatches } from './models/filter-over-r6-siege-matches';
import { RangeOverR6SiegeMatches, rangeOverR6SiegeMatches } from './models/range-over-r6-siege-matches';
import { SearchOverR6SiegeMatches, searchOverR6SiegeMatches } from './models/search-over-r6-siege-matches';
import { Page, page } from '../common/page';

export interface GetR6siegeMatchesParams {
  filter?: FilterOverR6SiegeMatches;
  range?: RangeOverR6SiegeMatches;
  sort?: any[];
  search?: SearchOverR6SiegeMatches;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeMatchesPastParams {
  filter?: FilterOverR6SiegeMatches;
  range?: RangeOverR6SiegeMatches;
  sort?: any[];
  search?: SearchOverR6SiegeMatches;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeMatchesRunningParams {
  filter?: FilterOverR6SiegeMatches;
  range?: RangeOverR6SiegeMatches;
  sort?: any[];
  search?: SearchOverR6SiegeMatches;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeMatchesUpcomingParams {
  filter?: FilterOverR6SiegeMatches;
  range?: RangeOverR6SiegeMatches;
  sort?: any[];
  search?: SearchOverR6SiegeMatches;
  page?: Page;
  perPage?: number;
}
