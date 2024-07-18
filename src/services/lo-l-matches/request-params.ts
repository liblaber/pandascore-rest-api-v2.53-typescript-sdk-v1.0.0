import { FilterOverLoLMatches, filterOverLoLMatches } from './models/filter-over-lo-l-matches';
import { RangeOverLoLMatches, rangeOverLoLMatches } from './models/range-over-lo-l-matches';
import { SearchOverLoLMatches, searchOverLoLMatches } from './models/search-over-lo-l-matches';
import { Page, page } from '../common/page';

export interface GetLolMatchesParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesPastParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesRunningParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesUpcomingParams {
  filter?: FilterOverLoLMatches;
  range?: RangeOverLoLMatches;
  sort?: any[];
  search?: SearchOverLoLMatches;
  page?: Page;
  perPage?: number;
}
