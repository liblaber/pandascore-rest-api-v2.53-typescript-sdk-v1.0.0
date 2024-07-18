import { FilterOverPlayers, filterOverPlayers } from './models/filter-over-players';
import { RangeOverPlayers, rangeOverPlayers } from './models/range-over-players';
import { SearchOverPlayers, searchOverPlayers } from './models/search-over-players';
import { Page, page } from '../common/page';
import { FilterOverLeagues, filterOverLeagues } from '../common/filter-over-leagues';
import { RangeOverLeagues, rangeOverLeagues } from '../common/range-over-leagues';
import { SearchOverLeagues, searchOverLeagues } from '../common/search-over-leagues';
import { FilterOverMatches, filterOverMatches } from '../common/filter-over-matches';
import { RangeOverMatches, rangeOverMatches } from '../common/range-over-matches';
import { SearchOverMatches, searchOverMatches } from '../common/search-over-matches';
import { FilterOverSeries, filterOverSeries } from '../common/filter-over-series';
import { RangeOverSeries, rangeOverSeries } from '../common/range-over-series';
import { SearchOverSeries, searchOverSeries } from '../common/search-over-series';
import { FilterOverShortTournaments, filterOverShortTournaments } from '../common/filter-over-short-tournaments';
import { RangeOverShortTournaments, rangeOverShortTournaments } from '../common/range-over-short-tournaments';
import { SearchOverShortTournaments, searchOverShortTournaments } from '../common/search-over-short-tournaments';

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