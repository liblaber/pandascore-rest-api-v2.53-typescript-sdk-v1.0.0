import { FilterOverSeries, filterOverSeries } from '../common/filter-over-series';
import { RangeOverSeries, rangeOverSeries } from '../common/range-over-series';
import { SearchOverSeries, searchOverSeries } from '../common/search-over-series';
import { Page, page } from '../common/page';
import { FilterOverMatches, filterOverMatches } from '../common/filter-over-matches';
import { RangeOverMatches, rangeOverMatches } from '../common/range-over-matches';
import { SearchOverMatches, searchOverMatches } from '../common/search-over-matches';
import { FilterOverShortTournaments, filterOverShortTournaments } from '../common/filter-over-short-tournaments';
import { RangeOverShortTournaments, rangeOverShortTournaments } from '../common/range-over-short-tournaments';
import { SearchOverShortTournaments, searchOverShortTournaments } from '../common/search-over-short-tournaments';

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
