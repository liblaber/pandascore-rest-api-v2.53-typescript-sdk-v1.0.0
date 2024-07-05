import {
  FilterOverFifaSeries,
  Page,
  RangeOverFifaSeries,
  SearchOverFifaSeries,
  filterOverFifaSeries,
  page,
  rangeOverFifaSeries,
  searchOverFifaSeries,
} from '../common';

export interface GetFifaSeriesParams {
  filter?: FilterOverFifaSeries;
  range?: RangeOverFifaSeries;
  sort?: any[];
  search?: SearchOverFifaSeries;
  page?: Page;
  perPage?: number;
}

export interface GetFifaSeriesPastParams {
  filter?: FilterOverFifaSeries;
  range?: RangeOverFifaSeries;
  sort?: any[];
  search?: SearchOverFifaSeries;
  page?: Page;
  perPage?: number;
}

export interface GetFifaSeriesRunningParams {
  filter?: FilterOverFifaSeries;
  range?: RangeOverFifaSeries;
  sort?: any[];
  search?: SearchOverFifaSeries;
  page?: Page;
  perPage?: number;
}

export interface GetFifaSeriesUpcomingParams {
  filter?: FilterOverFifaSeries;
  range?: RangeOverFifaSeries;
  sort?: any[];
  search?: SearchOverFifaSeries;
  page?: Page;
  perPage?: number;
}
