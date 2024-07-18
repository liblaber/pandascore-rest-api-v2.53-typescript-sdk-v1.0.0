import { FilterOverMatches, filterOverMatches } from '../common/filter-over-matches';
import { RangeOverMatches, rangeOverMatches } from '../common/range-over-matches';
import { SearchOverMatches, searchOverMatches } from '../common/search-over-matches';
import { Page, page } from '../common/page';

export interface GetMatchesParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetMatchesPastParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetMatchesRunningParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetMatchesUpcomingParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}
