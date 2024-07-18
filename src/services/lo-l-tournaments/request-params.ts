import {
  FilterOverLoLShortTournaments,
  filterOverLoLShortTournaments,
} from './models/filter-over-lo-l-short-tournaments';
import { RangeOverLoLShortTournaments, rangeOverLoLShortTournaments } from './models/range-over-lo-l-short-tournaments';
import {
  SearchOverLoLShortTournaments,
  searchOverLoLShortTournaments,
} from './models/search-over-lo-l-short-tournaments';
import { Page, page } from '../common/page';

export interface GetLolTournamentsParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolTournamentsPastParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolTournamentsRunningParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetLolTournamentsUpcomingParams {
  filter?: FilterOverLoLShortTournaments;
  range?: RangeOverLoLShortTournaments;
  sort?: any[];
  search?: SearchOverLoLShortTournaments;
  page?: Page;
  perPage?: number;
}
