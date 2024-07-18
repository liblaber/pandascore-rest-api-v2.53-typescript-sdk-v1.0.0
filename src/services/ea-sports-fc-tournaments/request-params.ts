import {
  FilterOverFifaShortTournaments,
  filterOverFifaShortTournaments,
} from './models/filter-over-fifa-short-tournaments';
import {
  RangeOverFifaShortTournaments,
  rangeOverFifaShortTournaments,
} from './models/range-over-fifa-short-tournaments';
import {
  SearchOverFifaShortTournaments,
  searchOverFifaShortTournaments,
} from './models/search-over-fifa-short-tournaments';
import { Page, page } from '../common/page';

export interface GetFifaTournamentsParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetFifaTournamentsPastParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetFifaTournamentsRunningParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetFifaTournamentsUpcomingParams {
  filter?: FilterOverFifaShortTournaments;
  range?: RangeOverFifaShortTournaments;
  sort?: any[];
  search?: SearchOverFifaShortTournaments;
  page?: Page;
  perPage?: number;
}
