import {
  FilterOverLoLMatches,
  Page,
  RangeOverLoLMatches,
  SearchOverLoLMatches,
  filterOverLoLMatches,
  page,
  rangeOverLoLMatches,
  searchOverLoLMatches,
} from '../common';

export interface GetLolMatchesParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesPastParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesRunningParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesUpcomingParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}
