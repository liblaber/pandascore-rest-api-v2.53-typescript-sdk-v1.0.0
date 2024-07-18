import { FilterOverCodmwSeries, filterOverCodmwSeries } from './models/filter-over-codmw-series';
import { RangeOverCodmwSeries, rangeOverCodmwSeries } from './models/range-over-codmw-series';
import { SearchOverCodmwSeries, searchOverCodmwSeries } from './models/search-over-codmw-series';
import { Page, page } from '../common/page';

export interface GetCodmwSeriesParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwSeriesPastParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwSeriesRunningParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwSeriesUpcomingParams {
  filter?: FilterOverCodmwSeries;
  range?: RangeOverCodmwSeries;
  sort?: any[];
  search?: SearchOverCodmwSeries;
  page?: Page;
  perPage?: number;
}
