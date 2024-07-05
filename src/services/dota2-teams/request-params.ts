import {
  FilterOverDota2Teams,
  Page,
  RangeOverDota2Teams,
  SearchOverDota2Teams,
  filterOverDota2Teams,
  page,
  rangeOverDota2Teams,
  searchOverDota2Teams,
} from '../common';

export interface GetDota2SeriesSerieIdOrSlugTeamsParams {
  filter?: FilterOverDota2Teams;
  range?: RangeOverDota2Teams;
  sort?: any[];
  search?: SearchOverDota2Teams;
  page?: Page;
  perPage?: number;
}

export interface GetDota2TeamsParams {
  filter?: FilterOverDota2Teams;
  range?: RangeOverDota2Teams;
  sort?: any[];
  search?: SearchOverDota2Teams;
  page?: Page;
  perPage?: number;
}
