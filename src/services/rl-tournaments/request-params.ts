import { FilterOverRlShortTournaments, filterOverRlShortTournaments } from './models/filter-over-rl-short-tournaments';
import { RangeOverRlShortTournaments, rangeOverRlShortTournaments } from './models/range-over-rl-short-tournaments';
import { SearchOverRlShortTournaments, searchOverRlShortTournaments } from './models/search-over-rl-short-tournaments';
import { Page, page } from '../common/page';

export interface GetRlTournamentsParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetRlTournamentsPastParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetRlTournamentsRunningParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetRlTournamentsUpcomingParams {
  filter?: FilterOverRlShortTournaments;
  range?: RangeOverRlShortTournaments;
  sort?: any[];
  search?: SearchOverRlShortTournaments;
  page?: Page;
  perPage?: number;
}
