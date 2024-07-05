import {
  FilterOverCsgoSeries,
  Page,
  RangeOverCsgoSeries,
  SearchOverCsgoSeries,
  filterOverCsgoSeries,
  page,
  rangeOverCsgoSeries,
  searchOverCsgoSeries,
} from '../common';

export interface GetCsgoSeriesParams {
  filter?: FilterOverCsgoSeries;
  range?: RangeOverCsgoSeries;
  sort?: any[];
  search?: SearchOverCsgoSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoSeriesPastParams {
  filter?: FilterOverCsgoSeries;
  range?: RangeOverCsgoSeries;
  sort?: any[];
  search?: SearchOverCsgoSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoSeriesRunningParams {
  filter?: FilterOverCsgoSeries;
  range?: RangeOverCsgoSeries;
  sort?: any[];
  search?: SearchOverCsgoSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoSeriesUpcomingParams {
  filter?: FilterOverCsgoSeries;
  range?: RangeOverCsgoSeries;
  sort?: any[];
  search?: SearchOverCsgoSeries;
  page?: Page;
  perPage?: number;
}
