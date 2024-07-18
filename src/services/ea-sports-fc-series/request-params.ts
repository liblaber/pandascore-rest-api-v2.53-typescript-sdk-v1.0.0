import { FilterOverFifaSeries, filterOverFifaSeries } from './models/filter-over-fifa-series';
import { RangeOverFifaSeries, rangeOverFifaSeries } from './models/range-over-fifa-series';
import { SearchOverFifaSeries, searchOverFifaSeries } from './models/search-over-fifa-series';
import { Page, page } from '../common/page';

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
