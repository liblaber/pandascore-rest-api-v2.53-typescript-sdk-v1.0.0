import { FilterOverPubgSeries, filterOverPubgSeries } from './models/filter-over-pubg-series';
import { RangeOverPubgSeries, rangeOverPubgSeries } from './models/range-over-pubg-series';
import { SearchOverPubgSeries, searchOverPubgSeries } from './models/search-over-pubg-series';
import { Page, page } from '../common/page';

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
