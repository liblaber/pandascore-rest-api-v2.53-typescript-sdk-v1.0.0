import {
  FilterOverLolWildRiftMatches,
  Page,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
  filterOverLolWildRiftMatches,
  page,
  rangeOverLolWildRiftMatches,
  searchOverLolWildRiftMatches,
} from '../common';

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
