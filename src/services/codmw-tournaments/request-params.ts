import {
  FilterOverCodmwShortTournaments,
  filterOverCodmwShortTournaments,
} from './models/filter-over-codmw-short-tournaments';
import {
  RangeOverCodmwShortTournaments,
  rangeOverCodmwShortTournaments,
} from './models/range-over-codmw-short-tournaments';
import {
  SearchOverCodmwShortTournaments,
  searchOverCodmwShortTournaments,
} from './models/search-over-codmw-short-tournaments';
import { Page, page } from '../common/page';

export interface GetCodmwTournamentsParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwTournamentsPastParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwTournamentsRunningParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwTournamentsUpcomingParams {
  filter?: FilterOverCodmwShortTournaments;
  range?: RangeOverCodmwShortTournaments;
  sort?: any[];
  search?: SearchOverCodmwShortTournaments;
  page?: Page;
  perPage?: number;
}
