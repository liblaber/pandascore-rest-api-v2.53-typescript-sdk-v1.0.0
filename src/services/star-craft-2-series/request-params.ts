import {
  FilterOverStarcraft2Series,
  Page,
  RangeOverStarcraft2Series,
  SearchOverStarcraft2Series,
  filterOverStarcraft2Series,
  page,
  rangeOverStarcraft2Series,
  searchOverStarcraft2Series,
} from '../common';

export interface GetStarcraft2SeriesParams {
  filter?: FilterOverStarcraft2Series;
  range?: RangeOverStarcraft2Series;
  sort?: any[];
  search?: SearchOverStarcraft2Series;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2SeriesPastParams {
  filter?: FilterOverStarcraft2Series;
  range?: RangeOverStarcraft2Series;
  sort?: any[];
  search?: SearchOverStarcraft2Series;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2SeriesRunningParams {
  filter?: FilterOverStarcraft2Series;
  range?: RangeOverStarcraft2Series;
  sort?: any[];
  search?: SearchOverStarcraft2Series;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2SeriesUpcomingParams {
  filter?: FilterOverStarcraft2Series;
  range?: RangeOverStarcraft2Series;
  sort?: any[];
  search?: SearchOverStarcraft2Series;
  page?: Page;
  perPage?: number;
}
