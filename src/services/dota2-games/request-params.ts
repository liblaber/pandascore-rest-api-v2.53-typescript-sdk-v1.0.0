import { Page, page } from '../common';
import {
  FilterOverDota2Games,
  RangeOverDota2Games,
  SearchOverDota2Games,
  filterOverDota2Games,
  rangeOverDota2Games,
  searchOverDota2Games,
} from './models';

export interface GetDota2GamesDota2GameIdFramesParams {
  page?: Page;
  perPage?: number;
}

export interface GetDota2MatchesMatchIdOrSlugGamesParams {
  filter?: FilterOverDota2Games;
  range?: RangeOverDota2Games;
  sort?: any[];
  search?: SearchOverDota2Games;
  page?: Page;
  perPage?: number;
}

export interface GetDota2TeamsTeamIdOrSlugGamesParams {
  page?: Page;
  perPage?: number;
}
