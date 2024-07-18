import { FilterOverCsgoMatches, filterOverCsgoMatches } from './models/filter-over-csgo-matches';
import { RangeOverCsgoMatches, rangeOverCsgoMatches } from './models/range-over-csgo-matches';
import { SearchOverCsgoMatches, searchOverCsgoMatches } from './models/search-over-csgo-matches';
import { Page, page } from '../common/page';

export interface GetCsgoMatchesParams {
  filter?: FilterOverCsgoMatches;
  range?: RangeOverCsgoMatches;
  sort?: any[];
  search?: SearchOverCsgoMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoMatchesPastParams {
  filter?: FilterOverCsgoMatches;
  range?: RangeOverCsgoMatches;
  sort?: any[];
  search?: SearchOverCsgoMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoMatchesRunningParams {
  filter?: FilterOverCsgoMatches;
  range?: RangeOverCsgoMatches;
  sort?: any[];
  search?: SearchOverCsgoMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoMatchesUpcomingParams {
  filter?: FilterOverCsgoMatches;
  range?: RangeOverCsgoMatches;
  sort?: any[];
  search?: SearchOverCsgoMatches;
  page?: Page;
  perPage?: number;
}
