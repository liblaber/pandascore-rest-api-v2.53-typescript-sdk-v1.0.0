import { FilterOverValorantSeries, filterOverValorantSeries } from './models/filter-over-valorant-series';
import { RangeOverValorantSeries, rangeOverValorantSeries } from './models/range-over-valorant-series';
import { SearchOverValorantSeries, searchOverValorantSeries } from './models/search-over-valorant-series';
import { Page, page } from '../common/page';

export interface GetValorantSeriesParams {
  filter?: FilterOverValorantSeries;
  range?: RangeOverValorantSeries;
  sort?: any[];
  search?: SearchOverValorantSeries;
  page?: Page;
  perPage?: number;
}

export interface GetValorantSeriesPastParams {
  filter?: FilterOverValorantSeries;
  range?: RangeOverValorantSeries;
  sort?: any[];
  search?: SearchOverValorantSeries;
  page?: Page;
  perPage?: number;
}

export interface GetValorantSeriesRunningParams {
  filter?: FilterOverValorantSeries;
  range?: RangeOverValorantSeries;
  sort?: any[];
  search?: SearchOverValorantSeries;
  page?: Page;
  perPage?: number;
}

export interface GetValorantSeriesUpcomingParams {
  filter?: FilterOverValorantSeries;
  range?: RangeOverValorantSeries;
  sort?: any[];
  search?: SearchOverValorantSeries;
  page?: Page;
  perPage?: number;
}