import { FilterOverDota2Series, filterOverDota2Series } from './models/filter-over-dota2-series';
import { RangeOverDota2Series, rangeOverDota2Series } from './models/range-over-dota2-series';
import { SearchOverDota2Series, searchOverDota2Series } from './models/search-over-dota2-series';
import { Page, page } from '../common/page';

export interface GetDota2SeriesParams {
  filter?: FilterOverDota2Series;
  range?: RangeOverDota2Series;
  sort?: any[];
  search?: SearchOverDota2Series;
  page?: Page;
  perPage?: number;
}

export interface GetDota2SeriesPastParams {
  filter?: FilterOverDota2Series;
  range?: RangeOverDota2Series;
  sort?: any[];
  search?: SearchOverDota2Series;
  page?: Page;
  perPage?: number;
}

export interface GetDota2SeriesRunningParams {
  filter?: FilterOverDota2Series;
  range?: RangeOverDota2Series;
  sort?: any[];
  search?: SearchOverDota2Series;
  page?: Page;
  perPage?: number;
}

export interface GetDota2SeriesUpcomingParams {
  filter?: FilterOverDota2Series;
  range?: RangeOverDota2Series;
  sort?: any[];
  search?: SearchOverDota2Series;
  page?: Page;
  perPage?: number;
}
