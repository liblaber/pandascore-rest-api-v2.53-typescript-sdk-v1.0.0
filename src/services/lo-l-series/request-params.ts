import {
  FilterOverLoLSeries,
  Page,
  RangeOverLoLSeries,
  SearchOverLoLSeries,
  filterOverLoLSeries,
  page,
  rangeOverLoLSeries,
  searchOverLoLSeries,
} from '../common';

export interface GetLolSeriesParams {
  filter?: FilterOverLoLSeries;
  range?: RangeOverLoLSeries;
  sort?: any[];
  search?: SearchOverLoLSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolSeriesPastParams {
  filter?: FilterOverLoLSeries;
  range?: RangeOverLoLSeries;
  sort?: any[];
  search?: SearchOverLoLSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolSeriesRunningParams {
  filter?: FilterOverLoLSeries;
  range?: RangeOverLoLSeries;
  sort?: any[];
  search?: SearchOverLoLSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolSeriesUpcomingParams {
  filter?: FilterOverLoLSeries;
  range?: RangeOverLoLSeries;
  sort?: any[];
  search?: SearchOverLoLSeries;
  page?: Page;
  perPage?: number;
}
