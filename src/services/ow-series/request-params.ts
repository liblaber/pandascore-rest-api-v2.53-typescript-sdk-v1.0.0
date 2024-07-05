import {
  FilterOverOwSeries,
  Page,
  RangeOverOwSeries,
  SearchOverOwSeries,
  filterOverOwSeries,
  page,
  rangeOverOwSeries,
  searchOverOwSeries,
} from '../common';

export interface GetOwSeriesParams {
  filter?: FilterOverOwSeries;
  range?: RangeOverOwSeries;
  sort?: any[];
  search?: SearchOverOwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetOwSeriesPastParams {
  filter?: FilterOverOwSeries;
  range?: RangeOverOwSeries;
  sort?: any[];
  search?: SearchOverOwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetOwSeriesRunningParams {
  filter?: FilterOverOwSeries;
  range?: RangeOverOwSeries;
  sort?: any[];
  search?: SearchOverOwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetOwSeriesUpcomingParams {
  filter?: FilterOverOwSeries;
  range?: RangeOverOwSeries;
  sort?: any[];
  search?: SearchOverOwSeries;
  page?: Page;
  perPage?: number;
}
