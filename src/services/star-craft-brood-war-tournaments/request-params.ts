import {
  FilterOverStarcraftBroodWarShortTournaments,
  Page,
  RangeOverStarcraftBroodWarShortTournaments,
  SearchOverStarcraftBroodWarShortTournaments,
  filterOverStarcraftBroodWarShortTournaments,
  page,
  rangeOverStarcraftBroodWarShortTournaments,
  searchOverStarcraftBroodWarShortTournaments,
} from '../common';

export interface GetStarcraftBroodWarTournamentsParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarTournamentsPastParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarTournamentsRunningParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarTournamentsUpcomingParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}
