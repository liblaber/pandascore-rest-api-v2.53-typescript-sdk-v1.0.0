import {
  FilterOverRlMatches,
  Page,
  RangeOverRlMatches,
  SearchOverRlMatches,
  filterOverRlMatches,
  page,
  rangeOverRlMatches,
  searchOverRlMatches,
} from '../common';

export interface GetRlMatchesParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}

export interface GetRlMatchesPastParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}

export interface GetRlMatchesRunningParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}

export interface GetRlMatchesUpcomingParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}
