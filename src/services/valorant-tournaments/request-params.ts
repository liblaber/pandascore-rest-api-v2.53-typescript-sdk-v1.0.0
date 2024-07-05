import {
  FilterOverValorantShortTournaments,
  Page,
  RangeOverValorantShortTournaments,
  SearchOverValorantShortTournaments,
  filterOverValorantShortTournaments,
  page,
  rangeOverValorantShortTournaments,
  searchOverValorantShortTournaments,
} from '../common';

export interface GetValorantTournamentsParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetValorantTournamentsPastParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetValorantTournamentsRunningParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetValorantTournamentsUpcomingParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}
