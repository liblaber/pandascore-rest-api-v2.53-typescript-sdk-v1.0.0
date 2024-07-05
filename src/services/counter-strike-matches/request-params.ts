import {
  FilterOverCsgoMatches,
  Page,
  RangeOverCsgoMatches,
  SearchOverCsgoMatches,
  filterOverCsgoMatches,
  page,
  rangeOverCsgoMatches,
  searchOverCsgoMatches,
} from '../common';

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
