import {
  FilterOverLoLTeams,
  Page,
  RangeOverLoLTeams,
  SearchOverLoLTeams,
  filterOverLoLTeams,
  page,
  rangeOverLoLTeams,
  searchOverLoLTeams,
} from '../common';

export interface GetLolSeriesSerieIdOrSlugTeamsParams {
  filter?: FilterOverLoLTeams;
  range?: RangeOverLoLTeams;
  sort?: any[];
  search?: SearchOverLoLTeams;
  page?: Page;
  perPage?: number;
}

export interface GetLolTeamsParams {
  filter?: FilterOverLoLTeams;
  range?: RangeOverLoLTeams;
  sort?: any[];
  search?: SearchOverLoLTeams;
  page?: Page;
  perPage?: number;
}
