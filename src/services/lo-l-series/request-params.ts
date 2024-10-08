// This file was generated by liblab | https://liblab.com/

import { FilterOverLoLSeries, filterOverLoLSeries } from './models/filter-over-lo-l-series';
import { RangeOverLoLSeries, rangeOverLoLSeries } from './models/range-over-lo-l-series';
import { SearchOverLoLSeries, searchOverLoLSeries } from './models/search-over-lo-l-series';
import { Page, page } from '../common/page';

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
