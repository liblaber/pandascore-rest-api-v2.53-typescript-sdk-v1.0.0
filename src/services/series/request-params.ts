import {
  FilterOverMatches,
  FilterOverSeries,
  FilterOverShortTournaments,
  Page,
  RangeOverMatches,
  RangeOverSeries,
  RangeOverShortTournaments,
  SearchOverMatches,
  SearchOverSeries,
  SearchOverShortTournaments,
  filterOverMatches,
  filterOverSeries,
  filterOverShortTournaments,
  page,
  rangeOverMatches,
  rangeOverSeries,
  rangeOverShortTournaments,
  searchOverMatches,
  searchOverSeries,
  searchOverShortTournaments,
} from '../common';

export interface GetSeriesParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesPastParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesRunningParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesUpcomingParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesSerieIdOrSlugMatchesParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesSerieIdOrSlugMatchesPastParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesSerieIdOrSlugMatchesRunningParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesSerieIdOrSlugMatchesUpcomingParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetSeriesSerieIdOrSlugTournamentsParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}
