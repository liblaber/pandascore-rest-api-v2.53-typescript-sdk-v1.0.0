import {
  FilterOverDota2ShortTournaments,
  Page,
  RangeOverDota2ShortTournaments,
  SearchOverDota2ShortTournaments,
  filterOverDota2ShortTournaments,
  page,
  rangeOverDota2ShortTournaments,
  searchOverDota2ShortTournaments,
} from '../common';

export interface GetDota2TournamentsParams {
  filter?: FilterOverDota2ShortTournaments;
  range?: RangeOverDota2ShortTournaments;
  sort?: any[];
  search?: SearchOverDota2ShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetDota2TournamentsPastParams {
  filter?: FilterOverDota2ShortTournaments;
  range?: RangeOverDota2ShortTournaments;
  sort?: any[];
  search?: SearchOverDota2ShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetDota2TournamentsRunningParams {
  filter?: FilterOverDota2ShortTournaments;
  range?: RangeOverDota2ShortTournaments;
  sort?: any[];
  search?: SearchOverDota2ShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetDota2TournamentsUpcomingParams {
  filter?: FilterOverDota2ShortTournaments;
  range?: RangeOverDota2ShortTournaments;
  sort?: any[];
  search?: SearchOverDota2ShortTournaments;
  page?: Page;
  perPage?: number;
}
