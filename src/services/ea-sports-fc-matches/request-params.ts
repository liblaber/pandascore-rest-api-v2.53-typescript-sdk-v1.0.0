// This file was generated by liblab | https://liblab.com/

import { FilterOverFifaMatches, filterOverFifaMatches } from './models/filter-over-fifa-matches';
import { RangeOverFifaMatches, rangeOverFifaMatches } from './models/range-over-fifa-matches';
import { SearchOverFifaMatches, searchOverFifaMatches } from './models/search-over-fifa-matches';
import { Page, page } from '../common/page';

export interface GetFifaMatchesParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}

export interface GetFifaMatchesPastParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}

export interface GetFifaMatchesRunningParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}

export interface GetFifaMatchesUpcomingParams {
  filter?: FilterOverFifaMatches;
  range?: RangeOverFifaMatches;
  sort?: any[];
  search?: SearchOverFifaMatches;
  page?: Page;
  perPage?: number;
}
