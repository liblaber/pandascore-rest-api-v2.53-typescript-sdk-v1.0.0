import { FilterOverDota2Matches, filterOverDota2Matches } from './models/filter-over-dota2-matches';
import { RangeOverDota2Matches, rangeOverDota2Matches } from './models/range-over-dota2-matches';
import { SearchOverDota2Matches, searchOverDota2Matches } from './models/search-over-dota2-matches';
import { Page, page } from '../common/page';

export interface GetDota2MatchesParams {
  filter?: FilterOverDota2Matches;
  range?: RangeOverDota2Matches;
  sort?: any[];
  search?: SearchOverDota2Matches;
  page?: Page;
  perPage?: number;
}

export interface GetDota2MatchesPastParams {
  filter?: FilterOverDota2Matches;
  range?: RangeOverDota2Matches;
  sort?: any[];
  search?: SearchOverDota2Matches;
  page?: Page;
  perPage?: number;
}

export interface GetDota2MatchesRunningParams {
  filter?: FilterOverDota2Matches;
  range?: RangeOverDota2Matches;
  sort?: any[];
  search?: SearchOverDota2Matches;
  page?: Page;
  perPage?: number;
}

export interface GetDota2MatchesUpcomingParams {
  filter?: FilterOverDota2Matches;
  range?: RangeOverDota2Matches;
  sort?: any[];
  search?: SearchOverDota2Matches;
  page?: Page;
  perPage?: number;
}
