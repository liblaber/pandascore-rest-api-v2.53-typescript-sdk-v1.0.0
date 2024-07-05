import {
  FilterOverLeagues,
  FilterOverSeries,
  FilterOverShortTournaments,
  Page,
  RangeOverLeagues,
  RangeOverSeries,
  RangeOverShortTournaments,
  SearchOverLeagues,
  SearchOverSeries,
  SearchOverShortTournaments,
  filterOverLeagues,
  filterOverSeries,
  filterOverShortTournaments,
  page,
  rangeOverLeagues,
  rangeOverSeries,
  rangeOverShortTournaments,
  searchOverLeagues,
  searchOverSeries,
  searchOverShortTournaments,
} from '../common';

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
