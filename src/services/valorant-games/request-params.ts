import { Page, page } from '../common';
import {
  FilterOverValorantGames,
  RangeOverValorantGames,
  SearchOverValorantGames,
  filterOverValorantGames,
  rangeOverValorantGames,
  searchOverValorantGames,
} from './models';

export interface GetValorantGamesValorantGameIdEventsParams {
  page?: Page;
  perPage?: number;
}

export interface GetValorantGamesValorantGameIdRoundsParams {
  page?: Page;
  perPage?: number;
}

export interface GetValorantMatchesMatchIdOrSlugGamesParams {
  filter?: FilterOverValorantGames;
  range?: RangeOverValorantGames;
  sort?: any[];
  search?: SearchOverValorantGames;
  page?: Page;
  perPage?: number;
}
