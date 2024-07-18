import {
  FilterOverR6SiegeShortTournaments,
  filterOverR6SiegeShortTournaments,
} from './models/filter-over-r6-siege-short-tournaments';
import {
  RangeOverR6SiegeShortTournaments,
  rangeOverR6SiegeShortTournaments,
} from './models/range-over-r6-siege-short-tournaments';
import {
  SearchOverR6SiegeShortTournaments,
  searchOverR6SiegeShortTournaments,
} from './models/search-over-r6-siege-short-tournaments';
import { Page, page } from '../common/page';

export interface GetR6siegeTournamentsParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeTournamentsPastParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeTournamentsRunningParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetR6siegeTournamentsUpcomingParams {
  filter?: FilterOverR6SiegeShortTournaments;
  range?: RangeOverR6SiegeShortTournaments;
  sort?: any[];
  search?: SearchOverR6SiegeShortTournaments;
  page?: Page;
  perPage?: number;
}
