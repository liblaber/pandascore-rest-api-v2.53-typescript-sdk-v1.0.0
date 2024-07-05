import {
  FilterOverLeagues,
  FilterOverMatches,
  FilterOverSeries,
  FilterOverShortTournaments,
  FilterOverTeams,
  Page,
  RangeOverLeagues,
  RangeOverMatches,
  RangeOverSeries,
  RangeOverShortTournaments,
  RangeOverTeams,
  SearchOverLeagues,
  SearchOverMatches,
  SearchOverSeries,
  SearchOverShortTournaments,
  SearchOverTeams,
  filterOverLeagues,
  filterOverMatches,
  filterOverSeries,
  filterOverShortTournaments,
  filterOverTeams,
  page,
  rangeOverLeagues,
  rangeOverMatches,
  rangeOverSeries,
  rangeOverShortTournaments,
  rangeOverTeams,
  searchOverLeagues,
  searchOverMatches,
  searchOverSeries,
  searchOverShortTournaments,
  searchOverTeams,
} from '../common';

export interface GetTeamsParams {
  filter?: FilterOverTeams;
  range?: RangeOverTeams;
  sort?: any[];
  search?: SearchOverTeams;
  page?: Page;
  perPage?: number;
}

export interface GetTeamsTeamIdOrSlugLeaguesParams {
  filter?: FilterOverLeagues;
  range?: RangeOverLeagues;
  sort?: any[];
  search?: SearchOverLeagues;
  page?: Page;
  perPage?: number;
}

export interface GetTeamsTeamIdOrSlugMatchesParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetTeamsTeamIdOrSlugSeriesParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetTeamsTeamIdOrSlugTournamentsParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}
