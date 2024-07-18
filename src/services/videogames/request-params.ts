import { Page, page } from '../common/page';
import { FilterOverLeagues, filterOverLeagues } from '../common/filter-over-leagues';
import { RangeOverLeagues, rangeOverLeagues } from '../common/range-over-leagues';
import { SearchOverLeagues, searchOverLeagues } from '../common/search-over-leagues';
import { FilterOverSeries, filterOverSeries } from '../common/filter-over-series';
import { RangeOverSeries, rangeOverSeries } from '../common/range-over-series';
import { SearchOverSeries, searchOverSeries } from '../common/search-over-series';
import { FilterOverShortTournaments, filterOverShortTournaments } from '../common/filter-over-short-tournaments';
import { RangeOverShortTournaments, rangeOverShortTournaments } from '../common/range-over-short-tournaments';
import { SearchOverShortTournaments, searchOverShortTournaments } from '../common/search-over-short-tournaments';

export interface GetVideogamesParams {
  page?: Page;
  perPage?: number;
}

export interface GetVideogamesVideogameIdOrSlugLeaguesParams {
  filter?: FilterOverLeagues;
  range?: RangeOverLeagues;
  sort?: any[];
  search?: SearchOverLeagues;
  page?: Page;
  perPage?: number;
}

export interface GetVideogamesVideogameIdOrSlugSeriesParams {
  filter?: FilterOverSeries;
  range?: RangeOverSeries;
  sort?: any[];
  search?: SearchOverSeries;
  page?: Page;
  perPage?: number;
}

export interface GetVideogamesVideogameIdOrSlugTitlesParams {
  page?: Page;
  perPage?: number;
}

export interface GetVideogamesVideogameIdOrSlugTournamentsParams {
  filter?: FilterOverShortTournaments;
  range?: RangeOverShortTournaments;
  sort?: any[];
  search?: SearchOverShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetVideogamesVideogameIdOrSlugVersionsParams {
  page?: Page;
  perPage?: number;
}
