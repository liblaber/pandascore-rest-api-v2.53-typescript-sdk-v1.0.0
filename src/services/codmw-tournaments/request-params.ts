import {
  FilterOverCodmwShortTournaments,
  Page,
  RangeOverCodmwShortTournaments,
  SearchOverCodmwShortTournaments,
  filterOverCodmwShortTournaments,
  page,
  rangeOverCodmwShortTournaments,
  searchOverCodmwShortTournaments,
} from '../common';

export interface GetCodmwTournamentsParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwTournamentsPastParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwTournamentsRunningParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwTournamentsUpcomingParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}
