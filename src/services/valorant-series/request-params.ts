import {
  FilterOverValorantSeries,
  Page,
  RangeOverValorantSeries,
  SearchOverValorantSeries,
  filterOverValorantSeries,
  page,
  rangeOverValorantSeries,
  searchOverValorantSeries,
} from '../common';

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
