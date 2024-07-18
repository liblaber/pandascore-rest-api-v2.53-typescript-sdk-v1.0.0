import {
  FilterOverCsgoShortTournaments,
  filterOverCsgoShortTournaments,
} from './models/filter-over-csgo-short-tournaments';
import {
  RangeOverCsgoShortTournaments,
  rangeOverCsgoShortTournaments,
} from './models/range-over-csgo-short-tournaments';
import {
  SearchOverCsgoShortTournaments,
  searchOverCsgoShortTournaments,
} from './models/search-over-csgo-short-tournaments';
import { Page, page } from '../common/page';

export interface GetCsgoTournamentsParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoTournamentsPastParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoTournamentsRunningParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetCsgoTournamentsUpcomingParams {
  filter?: FilterOverCsgoShortTournaments;
  range?: RangeOverCsgoShortTournaments;
  sort?: any[];
  search?: SearchOverCsgoShortTournaments;
  page?: Page;
  perPage?: number;
}
