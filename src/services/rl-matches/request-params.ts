import { FilterOverRlMatches, filterOverRlMatches } from './models/filter-over-rl-matches';
import { RangeOverRlMatches, rangeOverRlMatches } from './models/range-over-rl-matches';
import { SearchOverRlMatches, searchOverRlMatches } from './models/search-over-rl-matches';
import { Page, page } from '../common/page';

export interface GetRlMatchesParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}

export interface GetRlMatchesPastParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}

export interface GetRlMatchesRunningParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}

export interface GetRlMatchesUpcomingParams {
  filter?: FilterOverRlMatches;
  range?: RangeOverRlMatches;
  sort?: any[];
  search?: SearchOverRlMatches;
  page?: Page;
  perPage?: number;
}
