import { FilterOverKogMatches, filterOverKogMatches } from './models/filter-over-kog-matches';
import { RangeOverKogMatches, rangeOverKogMatches } from './models/range-over-kog-matches';
import { SearchOverKogMatches, searchOverKogMatches } from './models/search-over-kog-matches';
import { Page, page } from '../common/page';

export interface GetKogMatchesParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}

export interface GetKogMatchesPastParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}

export interface GetKogMatchesRunningParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}

export interface GetKogMatchesUpcomingParams {
  filter?: FilterOverKogMatches;
  range?: RangeOverKogMatches;
  sort?: any[];
  search?: SearchOverKogMatches;
  page?: Page;
  perPage?: number;
}