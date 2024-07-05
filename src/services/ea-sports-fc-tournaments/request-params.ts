import {
  FilterOverFifaShortTournaments,
  Page,
  RangeOverFifaShortTournaments,
  SearchOverFifaShortTournaments,
  filterOverFifaShortTournaments,
  page,
  rangeOverFifaShortTournaments,
  searchOverFifaShortTournaments,
} from '../common';

export interface GetFifaTournamentsParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetFifaTournamentsPastParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetFifaTournamentsRunningParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetFifaTournamentsUpcomingParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}
