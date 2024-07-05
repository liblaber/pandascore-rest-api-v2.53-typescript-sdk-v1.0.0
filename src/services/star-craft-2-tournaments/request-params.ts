import {
  FilterOverStarcraft2ShortTournaments,
  Page,
  RangeOverStarcraft2ShortTournaments,
  SearchOverStarcraft2ShortTournaments,
  filterOverStarcraft2ShortTournaments,
  page,
  rangeOverStarcraft2ShortTournaments,
  searchOverStarcraft2ShortTournaments,
} from '../common';

export interface GetStarcraft2TournamentsParams {
  filter?: FilterOverStarcraft2ShortTournaments;
  range?: RangeOverStarcraft2ShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraft2ShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2TournamentsPastParams {
  filter?: FilterOverStarcraft2ShortTournaments;
  range?: RangeOverStarcraft2ShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraft2ShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2TournamentsRunningParams {
  filter?: FilterOverStarcraft2ShortTournaments;
  range?: RangeOverStarcraft2ShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraft2ShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2TournamentsUpcomingParams {
  filter?: FilterOverStarcraft2ShortTournaments;
  range?: RangeOverStarcraft2ShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraft2ShortTournaments;
  page?: Page;
  perPage?: number;
}
