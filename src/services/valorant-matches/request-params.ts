import { FilterOverValorantMatches, filterOverValorantMatches } from './models/filter-over-valorant-matches';
import { RangeOverValorantMatches, rangeOverValorantMatches } from './models/range-over-valorant-matches';
import { SearchOverValorantMatches, searchOverValorantMatches } from './models/search-over-valorant-matches';
import { Page, page } from '../common/page';

export interface GetValorantMatchesParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesPastParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesRunningParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesUpcomingParams {
  filter?: FilterOverValorantMatches;
  range?: RangeOverValorantMatches;
  sort?: any[];
  search?: SearchOverValorantMatches;
  page?: Page;
  perPage?: number;
}
