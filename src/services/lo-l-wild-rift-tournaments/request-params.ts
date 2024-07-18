import {
  FilterOverLolWildRiftShortTournaments,
  filterOverLolWildRiftShortTournaments,
} from './models/filter-over-lol-wild-rift-short-tournaments';
import {
  RangeOverLolWildRiftShortTournaments,
  rangeOverLolWildRiftShortTournaments,
} from './models/range-over-lol-wild-rift-short-tournaments';
import {
  SearchOverLolWildRiftShortTournaments,
  searchOverLolWildRiftShortTournaments,
} from './models/search-over-lol-wild-rift-short-tournaments';
import { Page, page } from '../common/page';

export interface GetLolWildRiftTournamentsParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftTournamentsPastParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftTournamentsRunningParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolWildRiftTournamentsUpcomingParams {
  filter?: FilterOverLolWildRiftShortTournaments;
  range?: RangeOverLolWildRiftShortTournaments;
  sort?: any[];
  search?: SearchOverLolWildRiftShortTournaments;
  page?: Page;
  perPage?: number;
}
