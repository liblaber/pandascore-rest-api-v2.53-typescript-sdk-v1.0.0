import { FilterOverStarcraft2Series, filterOverStarcraft2Series } from './models/filter-over-starcraft2-series';
import { RangeOverStarcraft2Series, rangeOverStarcraft2Series } from './models/range-over-starcraft2-series';
import { SearchOverStarcraft2Series, searchOverStarcraft2Series } from './models/search-over-starcraft2-series';
import { Page, page } from '../common/page';

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
