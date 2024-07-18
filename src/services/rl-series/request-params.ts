import { FilterOverRlSeries, filterOverRlSeries } from './models/filter-over-rl-series';
import { RangeOverRlSeries, rangeOverRlSeries } from './models/range-over-rl-series';
import { SearchOverRlSeries, searchOverRlSeries } from './models/search-over-rl-series';
import { Page, page } from '../common/page';

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
