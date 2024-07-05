import {
  FilterOverRlSeries,
  Page,
  RangeOverRlSeries,
  SearchOverRlSeries,
  filterOverRlSeries,
  page,
  rangeOverRlSeries,
  searchOverRlSeries,
} from '../common';

export interface GetRlSeriesParams {
  filter?: FilterOverRlSeries;
  range?: RangeOverRlSeries;
  sort?: any[];
  search?: SearchOverRlSeries;
  page?: Page;
  perPage?: number;
}

export interface GetRlSeriesPastParams {
  filter?: FilterOverRlSeries;
  range?: RangeOverRlSeries;
  sort?: any[];
  search?: SearchOverRlSeries;
  page?: Page;
  perPage?: number;
}

export interface GetRlSeriesRunningParams {
  filter?: FilterOverRlSeries;
  range?: RangeOverRlSeries;
  sort?: any[];
  search?: SearchOverRlSeries;
  page?: Page;
  perPage?: number;
}

export interface GetRlSeriesUpcomingParams {
  filter?: FilterOverRlSeries;
  range?: RangeOverRlSeries;
  sort?: any[];
  search?: SearchOverRlSeries;
  page?: Page;
  perPage?: number;
}
