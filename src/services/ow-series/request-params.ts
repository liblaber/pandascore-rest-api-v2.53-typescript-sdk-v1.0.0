import { FilterOverOwSeries, filterOverOwSeries } from './models/filter-over-ow-series';
import { RangeOverOwSeries, rangeOverOwSeries } from './models/range-over-ow-series';
import { SearchOverOwSeries, searchOverOwSeries } from './models/search-over-ow-series';
import { Page, page } from '../common/page';

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
