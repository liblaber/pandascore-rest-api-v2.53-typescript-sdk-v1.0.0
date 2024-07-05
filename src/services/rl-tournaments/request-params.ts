import {
  FilterOverRlShortTournaments,
  Page,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  filterOverRlShortTournaments,
  page,
  rangeOverRlShortTournaments,
  searchOverRlShortTournaments,
} from '../common';

export interface GetRlTournamentsParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetRlTournamentsPastParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetRlTournamentsRunningParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetRlTournamentsUpcomingParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}
