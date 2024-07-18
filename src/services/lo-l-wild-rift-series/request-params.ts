import { FilterOverLolWildRiftSeries, filterOverLolWildRiftSeries } from './models/filter-over-lol-wild-rift-series';
import { RangeOverLolWildRiftSeries, rangeOverLolWildRiftSeries } from './models/range-over-lol-wild-rift-series';
import { SearchOverLolWildRiftSeries, searchOverLolWildRiftSeries } from './models/search-over-lol-wild-rift-series';
import { Page, page } from '../common/page';

export interface GetLolWildRiftSeriesParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftSeriesPastParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftSeriesRunningParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftSeriesUpcomingParams {
  filter?: FilterOverLolWildRiftSeries;
  range?: RangeOverLolWildRiftSeries;
  sort?: any[];
  search?: SearchOverLolWildRiftSeries;
  page?: Page;
  perPage?: number;
}
