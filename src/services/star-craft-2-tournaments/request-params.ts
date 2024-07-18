import {
  FilterOverStarcraft2ShortTournaments,
  filterOverStarcraft2ShortTournaments,
} from './models/filter-over-starcraft2-short-tournaments';
import {
  RangeOverStarcraft2ShortTournaments,
  rangeOverStarcraft2ShortTournaments,
} from './models/range-over-starcraft2-short-tournaments';
import {
  SearchOverStarcraft2ShortTournaments,
  searchOverStarcraft2ShortTournaments,
} from './models/search-over-starcraft2-short-tournaments';
import { Page, page } from '../common/page';

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
