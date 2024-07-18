import {
  FilterOverStarcraftBroodWarSeries,
  filterOverStarcraftBroodWarSeries,
} from './models/filter-over-starcraft-brood-war-series';
import {
  RangeOverStarcraftBroodWarSeries,
  rangeOverStarcraftBroodWarSeries,
} from './models/range-over-starcraft-brood-war-series';
import {
  SearchOverStarcraftBroodWarSeries,
  searchOverStarcraftBroodWarSeries,
} from './models/search-over-starcraft-brood-war-series';
import { Page, page } from '../common/page';

export interface GetStarcraftBroodWarSeriesParams {
  filter?: FilterOverStarcraftBroodWarSeries;
  range?: RangeOverStarcraftBroodWarSeries;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarSeries;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarSeriesPastParams {
  filter?: FilterOverStarcraftBroodWarSeries;
  range?: RangeOverStarcraftBroodWarSeries;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarSeries;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarSeriesRunningParams {
  filter?: FilterOverStarcraftBroodWarSeries;
  range?: RangeOverStarcraftBroodWarSeries;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarSeries;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarSeriesUpcomingParams {
  filter?: FilterOverStarcraftBroodWarSeries;
  range?: RangeOverStarcraftBroodWarSeries;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarSeries;
  page?: Page;
  perPage?: number;
}