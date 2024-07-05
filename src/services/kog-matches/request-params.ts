import {
  FilterOverKogMatches,
  Page,
  RangeOverKogMatches,
  SearchOverKogMatches,
  filterOverKogMatches,
  page,
  rangeOverKogMatches,
  searchOverKogMatches,
} from '../common';

export interface GetKogMatchesParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}

export interface GetKogMatchesPastParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}

export interface GetKogMatchesRunningParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}

export interface GetKogMatchesUpcomingParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}
