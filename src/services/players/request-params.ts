import {
  FilterOverPlayers,
  RangeOverPlayers,
  SearchOverPlayers,
  filterOverPlayers,
  rangeOverPlayers,
  searchOverPlayers,
} from './models';
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

export interface GetPlayersParams {
  filter?: FilterOverPlayers;
  range?: RangeOverPlayers;
  sort?: any[];
  search?: SearchOverPlayers;
  page?: Page;
  perPage?: number;
}

export interface GetPlayersPlayerIdOrSlugLeaguesParams {
  filter?: FilterOverLeagues;
  range?: RangeOverLeagues;
  sort?: any[];
  search?: SearchOverLeagues;
  page?: Page;
  perPage?: number;
}

export interface GetPlayersPlayerIdOrSlugMatchesParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetPlayersPlayerIdOrSlugSeriesParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetPlayersPlayerIdOrSlugTournamentsParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}
