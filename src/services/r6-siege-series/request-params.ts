import {
  FilterOverR6SiegeSeries,
  Page,
  RangeOverR6SiegeSeries,
  SearchOverR6SiegeSeries,
  filterOverR6SiegeSeries,
  page,
  rangeOverR6SiegeSeries,
  searchOverR6SiegeSeries,
} from '../common';

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
