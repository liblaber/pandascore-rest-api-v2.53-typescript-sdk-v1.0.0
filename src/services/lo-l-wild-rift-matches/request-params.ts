import { FilterOverLolWildRiftMatches, filterOverLolWildRiftMatches } from './models/filter-over-lol-wild-rift-matches';
import { RangeOverLolWildRiftMatches, rangeOverLolWildRiftMatches } from './models/range-over-lol-wild-rift-matches';
import { SearchOverLolWildRiftMatches, searchOverLolWildRiftMatches } from './models/search-over-lol-wild-rift-matches';
import { Page, page } from '../common/page';

export interface GetLolWildRiftMatchesParams {
  filter?: FilterOverLolWildRiftMatches;
  range?: RangeOverLolWildRiftMatches;
  sort?: any[];
  search?: SearchOverLolWildRiftMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftMatchesPastParams {
  filter?: FilterOverLolWildRiftMatches;
  range?: RangeOverLolWildRiftMatches;
  sort?: any[];
  search?: SearchOverLolWildRiftMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftMatchesRunningParams {
  filter?: FilterOverLolWildRiftMatches;
  range?: RangeOverLolWildRiftMatches;
  sort?: any[];
  search?: SearchOverLolWildRiftMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftMatchesUpcomingParams {
  filter?: FilterOverLolWildRiftMatches;
  range?: RangeOverLolWildRiftMatches;
  sort?: any[];
  search?: SearchOverLolWildRiftMatches;
  page?: Page;
  perPage?: number;
}