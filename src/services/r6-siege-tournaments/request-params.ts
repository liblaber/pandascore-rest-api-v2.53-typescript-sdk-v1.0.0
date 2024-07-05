import {
  FilterOverR6SiegeShortTournaments,
  Page,
  RangeOverR6SiegeShortTournaments,
  SearchOverR6SiegeShortTournaments,
  filterOverR6SiegeShortTournaments,
  page,
  rangeOverR6SiegeShortTournaments,
  searchOverR6SiegeShortTournaments,
} from '../common';

export interface GetR6siegeTournamentsParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeTournamentsPastParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeTournamentsRunningParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeTournamentsUpcomingParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}
