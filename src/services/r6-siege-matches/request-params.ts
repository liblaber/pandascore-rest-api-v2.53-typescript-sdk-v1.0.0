import {
  FilterOverR6SiegeMatches,
  Page,
  RangeOverR6SiegeMatches,
  SearchOverR6SiegeMatches,
  filterOverR6SiegeMatches,
  page,
  rangeOverR6SiegeMatches,
  searchOverR6SiegeMatches,
} from '../common';

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
