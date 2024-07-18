import { FilterOverOwMatches, filterOverOwMatches } from './models/filter-over-ow-matches';
import { RangeOverOwMatches, rangeOverOwMatches } from './models/range-over-ow-matches';
import { SearchOverOwMatches, searchOverOwMatches } from './models/search-over-ow-matches';
import { Page, page } from '../common/page';

export interface GetOwMatchesParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetOwMatchesPastParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetOwMatchesRunningParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}

export interface GetOwMatchesUpcomingParams {
  filter?: FilterOverOwMatches;
  range?: RangeOverOwMatches;
  sort?: any[];
  search?: SearchOverOwMatches;
  page?: Page;
  perPage?: number;
}
