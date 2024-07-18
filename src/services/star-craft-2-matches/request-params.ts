import { FilterOverStarcraft2Matches, filterOverStarcraft2Matches } from './models/filter-over-starcraft2-matches';
import { RangeOverStarcraft2Matches, rangeOverStarcraft2Matches } from './models/range-over-starcraft2-matches';
import { SearchOverStarcraft2Matches, searchOverStarcraft2Matches } from './models/search-over-starcraft2-matches';
import { Page, page } from '../common/page';

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
