import {
  FilterOverOwMatches,
  Page,
  RangeOverOwMatches,
  SearchOverOwMatches,
  filterOverOwMatches,
  page,
  rangeOverOwMatches,
  searchOverOwMatches,
} from '../common';

export interface GetOwMatchesParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetOwMatchesPastParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetOwMatchesRunningParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetOwMatchesUpcomingParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}
