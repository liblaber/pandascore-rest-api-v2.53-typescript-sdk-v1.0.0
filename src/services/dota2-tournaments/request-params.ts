import {
  FilterOverDota2ShortTournaments,
  filterOverDota2ShortTournaments,
} from './models/filter-over-dota2-short-tournaments';
import {
  RangeOverDota2ShortTournaments,
  rangeOverDota2ShortTournaments,
} from './models/range-over-dota2-short-tournaments';
import {
  SearchOverDota2ShortTournaments,
  searchOverDota2ShortTournaments,
} from './models/search-over-dota2-short-tournaments';
import { Page, page } from '../common/page';

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
