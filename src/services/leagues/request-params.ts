import {
  FilterOverLeagues,
  FilterOverMatches,
  FilterOverSeries,
  FilterOverShortTournaments,
  Page,
  RangeOverLeagues,
  RangeOverMatches,
  RangeOverSeries,
  RangeOverShortTournaments,
  SearchOverLeagues,
  SearchOverMatches,
  SearchOverSeries,
  SearchOverShortTournaments,
  filterOverLeagues,
  filterOverMatches,
  filterOverSeries,
  filterOverShortTournaments,
  page,
  rangeOverLeagues,
  rangeOverMatches,
  rangeOverSeries,
  rangeOverShortTournaments,
  searchOverLeagues,
  searchOverMatches,
  searchOverSeries,
  searchOverShortTournaments,
} from '../common';

export interface GetLeaguesParams {
  filter?: FilterOverLeagues;
  range?: RangeOverLeagues;
  sort?: any[];
  search?: SearchOverLeagues;
  page?: Page;
  perPage?: number;
}

export interface GetLeaguesLeagueIdOrSlugMatchesParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLeaguesLeagueIdOrSlugMatchesPastParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLeaguesLeagueIdOrSlugMatchesRunningParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLeaguesLeagueIdOrSlugMatchesUpcomingParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetLeaguesLeagueIdOrSlugSeriesParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetLeaguesLeagueIdOrSlugTournamentsParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}
