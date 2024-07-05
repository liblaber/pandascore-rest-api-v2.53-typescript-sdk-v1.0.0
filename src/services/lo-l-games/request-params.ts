import { Page, page } from '../common';
import {
  FilterOverLoLGames,
  FilterOverLoLTeamLastGames,
  RangeOverLoLGames,
  RangeOverLoLTeamLastGames,
  SearchOverLoLGames,
  SearchOverLoLTeamLastGames,
  filterOverLoLGames,
  filterOverLoLTeamLastGames,
  rangeOverLoLGames,
  rangeOverLoLTeamLastGames,
  searchOverLoLGames,
  searchOverLoLTeamLastGames,
} from './models';

export interface GetLolGamesLolGameIdEventsParams {
  page?: Page;
  perPage?: number;
}

export interface GetLolGamesLolGameIdFramesParams {
  page?: Page;
  perPage?: number;
}

export interface GetLolMatchesMatchIdOrSlugGamesParams {
  filter?: FilterOverLoLGames;
  range?: RangeOverLoLGames;
  sort?: any[];
  search?: SearchOverLoLGames;
  page?: Page;
  perPage?: number;
}

export interface GetLolTeamsTeamIdOrSlugGamesParams {
  filter?: FilterOverLoLTeamLastGames;
  range?: RangeOverLoLTeamLastGames;
  sort?: any[];
  search?: SearchOverLoLTeamLastGames;
  page?: Page;
  perPage?: number;
}
