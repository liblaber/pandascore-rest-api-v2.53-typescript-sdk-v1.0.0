import {
  FilterOverValorantMatches,
  Page,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
  filterOverValorantMatches,
  page,
  rangeOverValorantMatches,
  searchOverValorantMatches,
} from '../common';

export interface GetValorantMatchesParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesPastParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesRunningParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesUpcomingParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}
