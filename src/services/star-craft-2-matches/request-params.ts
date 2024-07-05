import {
  FilterOverStarcraft2Matches,
  Page,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
  filterOverStarcraft2Matches,
  page,
  rangeOverStarcraft2Matches,
  searchOverStarcraft2Matches,
} from '../common';

export interface GetStarcraft2MatchesParams {
  filter?: FilterOverStarcraft2Matches;
  range?: RangeOverStarcraft2Matches;
  sort?: any[];
  search?: SearchOverStarcraft2Matches;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2MatchesPastParams {
  filter?: FilterOverStarcraft2Matches;
  range?: RangeOverStarcraft2Matches;
  sort?: any[];
  search?: SearchOverStarcraft2Matches;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2MatchesRunningParams {
  filter?: FilterOverStarcraft2Matches;
  range?: RangeOverStarcraft2Matches;
  sort?: any[];
  search?: SearchOverStarcraft2Matches;
  page?: Page;
  perPage?: number;
}

export interface GetStarcraft2MatchesUpcomingParams {
  filter?: FilterOverStarcraft2Matches;
  range?: RangeOverStarcraft2Matches;
  sort?: any[];
  search?: SearchOverStarcraft2Matches;
  page?: Page;
  perPage?: number;
}
