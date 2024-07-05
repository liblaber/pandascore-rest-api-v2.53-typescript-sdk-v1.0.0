import {
  FilterOverCsgoShortTournaments,
  Page,
  RangeOverCsgoShortTournaments,
  SearchOverCsgoShortTournaments,
  filterOverCsgoShortTournaments,
  page,
  rangeOverCsgoShortTournaments,
  searchOverCsgoShortTournaments,
} from '../common';

export interface GetCsgoTournamentsParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoTournamentsPastParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoTournamentsRunningParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoTournamentsUpcomingParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}
