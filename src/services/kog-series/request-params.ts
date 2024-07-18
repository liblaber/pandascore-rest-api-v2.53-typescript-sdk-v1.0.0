import { FilterOverKogSeries, filterOverKogSeries } from './models/filter-over-kog-series';
import { RangeOverKogSeries, rangeOverKogSeries } from './models/range-over-kog-series';
import { SearchOverKogSeries, searchOverKogSeries } from './models/search-over-kog-series';
import { Page, page } from '../common/page';

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
