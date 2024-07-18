import { FilterOverR6SiegeSeries, filterOverR6SiegeSeries } from './models/filter-over-r6-siege-series';
import { RangeOverR6SiegeSeries, rangeOverR6SiegeSeries } from './models/range-over-r6-siege-series';
import { SearchOverR6SiegeSeries, searchOverR6SiegeSeries } from './models/search-over-r6-siege-series';
import { Page, page } from '../common/page';

export interface GetR6siegeSeriesParams {
  filter?: FilterOverR6SiegeSeries;
  range?: RangeOverR6SiegeSeries;
  sort?: any[];
  search?: SearchOverR6SiegeSeries;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeSeriesPastParams {
  filter?: FilterOverR6SiegeSeries;
  range?: RangeOverR6SiegeSeries;
  sort?: any[];
  search?: SearchOverR6SiegeSeries;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeSeriesRunningParams {
  filter?: FilterOverR6SiegeSeries;
  range?: RangeOverR6SiegeSeries;
  sort?: any[];
  search?: SearchOverR6SiegeSeries;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeSeriesUpcomingParams {
  filter?: FilterOverR6SiegeSeries;
  range?: RangeOverR6SiegeSeries;
  sort?: any[];
  search?: SearchOverR6SiegeSeries;
  page?: Page;
  perPage?: number;
}
