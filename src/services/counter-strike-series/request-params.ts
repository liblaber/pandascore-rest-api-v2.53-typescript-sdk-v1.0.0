import { FilterOverCsgoSeries, filterOverCsgoSeries } from './models/filter-over-csgo-series';
import { RangeOverCsgoSeries, rangeOverCsgoSeries } from './models/range-over-csgo-series';
import { SearchOverCsgoSeries, searchOverCsgoSeries } from './models/search-over-csgo-series';
import { Page, page } from '../common/page';

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