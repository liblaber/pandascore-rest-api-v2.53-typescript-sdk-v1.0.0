import {
  FilterOverCodmwSeries,
  Page,
  RangeOverCodmwSeries,
  SearchOverCodmwSeries,
  filterOverCodmwSeries,
  page,
  rangeOverCodmwSeries,
  searchOverCodmwSeries,
} from '../common';

export interface GetCodmwSeriesParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwSeriesPastParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwSeriesRunningParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwSeriesUpcomingParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}
