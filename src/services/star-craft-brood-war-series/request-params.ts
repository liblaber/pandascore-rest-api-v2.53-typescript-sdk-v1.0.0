import {
  FilterOverStarcraftBroodWarSeries,
  Page,
  RangeOverStarcraftBroodWarSeries,
  SearchOverStarcraftBroodWarSeries,
  filterOverStarcraftBroodWarSeries,
  page,
  rangeOverStarcraftBroodWarSeries,
  searchOverStarcraftBroodWarSeries,
} from '../common';

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
