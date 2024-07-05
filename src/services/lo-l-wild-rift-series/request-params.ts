import {
  FilterOverLolWildRiftSeries,
  Page,
  RangeOverLolWildRiftSeries,
  SearchOverLolWildRiftSeries,
  filterOverLolWildRiftSeries,
  page,
  rangeOverLolWildRiftSeries,
  searchOverLolWildRiftSeries,
} from '../common';

export interface GetLolWildRiftSeriesParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftSeriesPastParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftSeriesRunningParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftSeriesUpcomingParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}
