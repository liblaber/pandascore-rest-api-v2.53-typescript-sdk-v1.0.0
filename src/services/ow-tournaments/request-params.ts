import {
  FilterOverOwShortTournaments,
  Page,
  RangeOverOwShortTournaments,
  SearchOverOwShortTournaments,
  filterOverOwShortTournaments,
  page,
  rangeOverOwShortTournaments,
  searchOverOwShortTournaments,
} from '../common';

export interface GetOwTournamentsParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetOwTournamentsPastParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetOwTournamentsRunningParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetOwTournamentsUpcomingParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}
