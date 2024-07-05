import {
  FilterOverPubgSeries,
  Page,
  RangeOverPubgSeries,
  SearchOverPubgSeries,
  filterOverPubgSeries,
  page,
  rangeOverPubgSeries,
  searchOverPubgSeries,
} from '../common';

export interface GetPubgSeriesParams {
  filter?: FilterOverPubgSeries;
  range?: RangeOverPubgSeries;
  sort?: any[];
  search?: SearchOverPubgSeries;
  page?: Page;
  perPage?: number;
}

export interface GetPubgSeriesPastParams {
  filter?: FilterOverPubgSeries;
  range?: RangeOverPubgSeries;
  sort?: any[];
  search?: SearchOverPubgSeries;
  page?: Page;
  perPage?: number;
}

export interface GetPubgSeriesRunningParams {
  filter?: FilterOverPubgSeries;
  range?: RangeOverPubgSeries;
  sort?: any[];
  search?: SearchOverPubgSeries;
  page?: Page;
  perPage?: number;
}

export interface GetPubgSeriesUpcomingParams {
  filter?: FilterOverPubgSeries;
  range?: RangeOverPubgSeries;
  sort?: any[];
  search?: SearchOverPubgSeries;
  page?: Page;
  perPage?: number;
}
