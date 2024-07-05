import {
  FilterOverStarcraftBroodWarMatches,
  Page,
  RangeOverStarcraftBroodWarMatches,
  SearchOverStarcraftBroodWarMatches,
  filterOverStarcraftBroodWarMatches,
  page,
  rangeOverStarcraftBroodWarMatches,
  searchOverStarcraftBroodWarMatches,
} from '../common';

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
