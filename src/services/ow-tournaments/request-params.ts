import { FilterOverOwShortTournaments, filterOverOwShortTournaments } from './models/filter-over-ow-short-tournaments';
import { RangeOverOwShortTournaments, rangeOverOwShortTournaments } from './models/range-over-ow-short-tournaments';
import { SearchOverOwShortTournaments, searchOverOwShortTournaments } from './models/search-over-ow-short-tournaments';
import { Page, page } from '../common/page';

export interface GetOwTournamentsParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetOwTournamentsPastParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetOwTournamentsRunningParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetOwTournamentsUpcomingParams {
  filter?: FilterOverOwShortTournaments;
  range?: RangeOverOwShortTournaments;
  sort?: any[];
  search?: SearchOverOwShortTournaments;
  page?: Page;
  perPage?: number;
}
