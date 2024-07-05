import {
  FilterOverDota2Matches,
  Page,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
  filterOverDota2Matches,
  page,
  rangeOverDota2Matches,
  searchOverDota2Matches,
} from '../common';

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
