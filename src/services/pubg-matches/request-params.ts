import { FilterOverPubgMatches, filterOverPubgMatches } from './models/filter-over-pubg-matches';
import { RangeOverPubgMatches, rangeOverPubgMatches } from './models/range-over-pubg-matches';
import { SearchOverPubgMatches, searchOverPubgMatches } from './models/search-over-pubg-matches';
import { Page, page } from '../common/page';

export interface GetPubgMatchesParams {
  filter?: FilterOverPubgMatches;
  range?: RangeOverPubgMatches;
  sort?: any[];
  search?: SearchOverPubgMatches;
  page?: Page;
  perPage?: number;
}

export interface GetPubgMatchesPastParams {
  filter?: FilterOverPubgMatches;
  range?: RangeOverPubgMatches;
  sort?: any[];
  search?: SearchOverPubgMatches;
  page?: Page;
  perPage?: number;
}

export interface GetPubgMatchesRunningParams {
  filter?: FilterOverPubgMatches;
  range?: RangeOverPubgMatches;
  sort?: any[];
  search?: SearchOverPubgMatches;
  page?: Page;
  perPage?: number;
}

export interface GetPubgMatchesUpcomingParams {
  filter?: FilterOverPubgMatches;
  range?: RangeOverPubgMatches;
  sort?: any[];
  search?: SearchOverPubgMatches;
  page?: Page;
  perPage?: number;
}
