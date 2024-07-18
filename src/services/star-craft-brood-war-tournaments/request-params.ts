import {
  FilterOverStarcraftBroodWarShortTournaments,
  filterOverStarcraftBroodWarShortTournaments,
} from './models/filter-over-starcraft-brood-war-short-tournaments';
import {
  RangeOverStarcraftBroodWarShortTournaments,
  rangeOverStarcraftBroodWarShortTournaments,
} from './models/range-over-starcraft-brood-war-short-tournaments';
import {
  SearchOverStarcraftBroodWarShortTournaments,
  searchOverStarcraftBroodWarShortTournaments,
} from './models/search-over-starcraft-brood-war-short-tournaments';
import { Page, page } from '../common/page';

export interface GetStarcraftBroodWarTournamentsParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarTournamentsPastParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarTournamentsRunningParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarTournamentsUpcomingParams {
  filter?: FilterOverStarcraftBroodWarShortTournaments;
  range?: RangeOverStarcraftBroodWarShortTournaments;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarShortTournaments;
  page?: Page;
  perPage?: number;
}
