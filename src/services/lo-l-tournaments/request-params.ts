import {
  FilterOverLoLShortTournaments,
  Page,
  RangeOverLoLShortTournaments,
  SearchOverLoLShortTournaments,
  filterOverLoLShortTournaments,
  page,
  rangeOverLoLShortTournaments,
  searchOverLoLShortTournaments,
} from '../common';

export interface GetLolTournamentsParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolTournamentsPastParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolTournamentsRunningParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolTournamentsUpcomingParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}
