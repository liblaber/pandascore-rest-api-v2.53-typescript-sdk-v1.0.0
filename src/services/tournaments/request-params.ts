import {
  FilterOverMatches,
  FilterOverShortTournaments,
  FilterOverTeams,
  Page,
  RangeOverMatches,
  RangeOverShortTournaments,
  RangeOverTeams,
  SearchOverMatches,
  SearchOverShortTournaments,
  SearchOverTeams,
  filterOverMatches,
  filterOverShortTournaments,
  filterOverTeams,
  page,
  rangeOverMatches,
  rangeOverShortTournaments,
  rangeOverTeams,
  searchOverMatches,
  searchOverShortTournaments,
  searchOverTeams,
} from '../common';
import {
  FilterOverBrackets,
  RangeOverBrackets,
  SearchOverBrackets,
  filterOverBrackets,
  rangeOverBrackets,
  searchOverBrackets,
} from './models';

export interface GetTournamentsParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsPastParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsRunningParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsUpcomingParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsTournamentIdOrSlugBracketsParams {
  filter?: FilterOverBrackets;
  range?: RangeOverBrackets;
  sort?: any[];
  search?: SearchOverBrackets;
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsTournamentIdOrSlugMatchesParams {
  filter?: FilterOverMatches;
  range?: RangeOverMatches;
  sort?: any[];
  search?: SearchOverMatches;
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsTournamentIdOrSlugStandingsParams {
  page?: Page;
  perPage?: number;
}

export interface GetTournamentsTournamentIdOrSlugTeamsParams {
  filter?: FilterOverTeams;
  range?: RangeOverTeams;
  sort?: any[];
  search?: SearchOverTeams;
  page?: Page;
  perPage?: number;
}
