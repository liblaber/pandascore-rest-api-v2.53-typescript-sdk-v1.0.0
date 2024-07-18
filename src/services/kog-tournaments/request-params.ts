import {
  FilterOverKogShortTournaments,
  filterOverKogShortTournaments,
} from './models/filter-over-kog-short-tournaments';
import { RangeOverKogShortTournaments, rangeOverKogShortTournaments } from './models/range-over-kog-short-tournaments';
import {
  SearchOverKogShortTournaments,
  searchOverKogShortTournaments,
} from './models/search-over-kog-short-tournaments';
import { Page, page } from '../common/page';

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