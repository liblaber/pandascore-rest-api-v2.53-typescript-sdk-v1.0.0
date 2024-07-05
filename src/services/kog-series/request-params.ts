import {
  FilterOverKogSeries,
  Page,
  RangeOverKogSeries,
  SearchOverKogSeries,
  filterOverKogSeries,
  page,
  rangeOverKogSeries,
  searchOverKogSeries,
} from '../common';

export interface GetKogSeriesParams {
  filter?: FilterOverKogSeries;
  range?: RangeOverKogSeries;
  sort?: any[];
  search?: SearchOverKogSeries;
  page?: Page;
  perPage?: number;
}

export interface GetKogSeriesPastParams {
  filter?: FilterOverKogSeries;
  range?: RangeOverKogSeries;
  sort?: any[];
  search?: SearchOverKogSeries;
  page?: Page;
  perPage?: number;
}

export interface GetKogSeriesRunningParams {
  filter?: FilterOverKogSeries;
  range?: RangeOverKogSeries;
  sort?: any[];
  search?: SearchOverKogSeries;
  page?: Page;
  perPage?: number;
}

export interface GetKogSeriesUpcomingParams {
  filter?: FilterOverKogSeries;
  range?: RangeOverKogSeries;
  sort?: any[];
  search?: SearchOverKogSeries;
  page?: Page;
  perPage?: number;
}
