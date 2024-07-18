import { FilterOverShortTournaments, filterOverShortTournaments } from '../common/filter-over-short-tournaments';
import { RangeOverShortTournaments, rangeOverShortTournaments } from '../common/range-over-short-tournaments';
import { SearchOverShortTournaments, searchOverShortTournaments } from '../common/search-over-short-tournaments';
import { Page, page } from '../common/page';
import { FilterOverBrackets, filterOverBrackets } from './models/filter-over-brackets';
import { RangeOverBrackets, rangeOverBrackets } from './models/range-over-brackets';
import { SearchOverBrackets, searchOverBrackets } from './models/search-over-brackets';
import { FilterOverMatches, filterOverMatches } from '../common/filter-over-matches';
import { RangeOverMatches, rangeOverMatches } from '../common/range-over-matches';
import { SearchOverMatches, searchOverMatches } from '../common/search-over-matches';
import { FilterOverTeams, filterOverTeams } from '../common/filter-over-teams';
import { RangeOverTeams, rangeOverTeams } from '../common/range-over-teams';
import { SearchOverTeams, searchOverTeams } from '../common/search-over-teams';

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
