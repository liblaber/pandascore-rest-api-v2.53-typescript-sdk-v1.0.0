import {
  FilterOverLolWildRiftShortTournaments,
  Page,
  RangeOverLolWildRiftShortTournaments,
  SearchOverLolWildRiftShortTournaments,
  filterOverLolWildRiftShortTournaments,
  page,
  rangeOverLolWildRiftShortTournaments,
  searchOverLolWildRiftShortTournaments,
} from '../common';

export interface GetLolWildRiftTournamentsParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftTournamentsPastParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftTournamentsRunningParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftTournamentsUpcomingParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}
