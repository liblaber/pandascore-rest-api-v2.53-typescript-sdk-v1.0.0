import {
  FilterOverCodmwMatches,
  Page,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
  filterOverCodmwMatches,
  page,
  rangeOverCodmwMatches,
  searchOverCodmwMatches,
} from '../common';

export interface GetCodmwMatchesParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwMatchesPastParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwMatchesRunningParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwMatchesUpcomingParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}
