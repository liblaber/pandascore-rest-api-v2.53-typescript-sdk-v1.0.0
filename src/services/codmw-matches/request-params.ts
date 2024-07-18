import { FilterOverCodmwMatches, filterOverCodmwMatches } from './models/filter-over-codmw-matches';
import { RangeOverCodmwMatches, rangeOverCodmwMatches } from './models/range-over-codmw-matches';
import { SearchOverCodmwMatches, searchOverCodmwMatches } from './models/search-over-codmw-matches';
import { Page, page } from '../common/page';

export interface GetCodmwMatchesParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwMatchesPastParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwMatchesRunningParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetCodmwMatchesUpcomingParams {
  filter?: FilterOverCodmwMatches;
  range?: RangeOverCodmwMatches;
  sort?: any[];
  search?: SearchOverCodmwMatches;
  page?: Page;
  perPage?: number;
}
