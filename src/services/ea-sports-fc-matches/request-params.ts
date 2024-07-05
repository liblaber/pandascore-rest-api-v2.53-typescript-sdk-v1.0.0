import {
  FilterOverFifaMatches,
  Page,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
  filterOverFifaMatches,
  page,
  rangeOverFifaMatches,
  searchOverFifaMatches,
} from '../common';

export interface GetFifaMatchesParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}

export interface GetFifaMatchesPastParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}

export interface GetFifaMatchesRunningParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}

export interface GetFifaMatchesUpcomingParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}
