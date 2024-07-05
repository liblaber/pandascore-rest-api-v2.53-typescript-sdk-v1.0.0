import {
  FilterOverDota2Series,
  Page,
  RangeOverDota2Series,
  SearchOverDota2Series,
  filterOverDota2Series,
  page,
  rangeOverDota2Series,
  searchOverDota2Series,
} from '../common';

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
