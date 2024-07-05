import {
  FilterOverKogShortTournaments,
  Page,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  filterOverKogShortTournaments,
  page,
  rangeOverKogShortTournaments,
  searchOverKogShortTournaments,
} from '../common';

export interface GetKogTournamentsParams {
  filter?: FilterOverKogShortTournaments;
  range?: RangeOverKogShortTournaments;
  sort?: any[];
  search?: SearchOverKogShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetKogTournamentsPastParams {
  filter?: FilterOverKogShortTournaments;
  range?: RangeOverKogShortTournaments;
  sort?: any[];
  search?: SearchOverKogShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetKogTournamentsRunningParams {
  filter?: FilterOverKogShortTournaments;
  range?: RangeOverKogShortTournaments;
  sort?: any[];
  search?: SearchOverKogShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetKogTournamentsUpcomingParams {
  filter?: FilterOverKogShortTournaments;
  range?: RangeOverKogShortTournaments;
  sort?: any[];
  search?: SearchOverKogShortTournaments;
  page?: Page;
  perPage?: number;
}
