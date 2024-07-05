import {
  FilterOverPubgShortTournaments,
  Page,
  RangeOverPubgShortTournaments,
  SearchOverPubgShortTournaments,
  filterOverPubgShortTournaments,
  page,
  rangeOverPubgShortTournaments,
  searchOverPubgShortTournaments,
} from '../common';

export interface GetPubgTournamentsParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetPubgTournamentsPastParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetPubgTournamentsRunningParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetPubgTournamentsUpcomingParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}
