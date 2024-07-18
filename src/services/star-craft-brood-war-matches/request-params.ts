import {
  FilterOverStarcraftBroodWarMatches,
  filterOverStarcraftBroodWarMatches,
} from './models/filter-over-starcraft-brood-war-matches';
import {
  RangeOverStarcraftBroodWarMatches,
  rangeOverStarcraftBroodWarMatches,
} from './models/range-over-starcraft-brood-war-matches';
import {
  SearchOverStarcraftBroodWarMatches,
  searchOverStarcraftBroodWarMatches,
} from './models/search-over-starcraft-brood-war-matches';
import { Page, page } from '../common/page';

export interface GetStarcraftBroodWarMatchesParams {
  filter?: FilterOverStarcraftBroodWarMatches;
  range?: RangeOverStarcraftBroodWarMatches;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarMatches;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarMatchesPastParams {
  filter?: FilterOverStarcraftBroodWarMatches;
  range?: RangeOverStarcraftBroodWarMatches;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarMatches;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarMatchesRunningParams {
  filter?: FilterOverStarcraftBroodWarMatches;
  range?: RangeOverStarcraftBroodWarMatches;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarMatches;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraftBroodWarMatchesUpcomingParams {
  filter?: FilterOverStarcraftBroodWarMatches;
  range?: RangeOverStarcraftBroodWarMatches;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarMatches;
  page?: Page;
  perPage?: number;
}