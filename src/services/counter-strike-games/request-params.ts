import { Page, page } from '../common';
import {
  FilterOverCsgoGames,
  RangeOverCsgoGames,
  SearchOverCsgoGames,
  filterOverCsgoGames,
  rangeOverCsgoGames,
  searchOverCsgoGames,
} from './models';

export interface GetCsgoGamesCsgoGameIdEventsParams {
  page?: Page;
  perPage?: number;
}

export interface GetCsgoGamesCsgoGameIdRoundsParams {
  page?: Page;
  perPage?: number;
}

export interface GetCsgoMatchesMatchIdOrSlugGamesParams {
  filter?: FilterOverCsgoGames;
  range?: RangeOverCsgoGames;
  sort?: any[];
  search?: SearchOverCsgoGames;
  page?: Page;
  perPage?: number;
}
