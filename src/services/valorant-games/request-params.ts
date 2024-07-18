import { Page, page } from '../common/page';
import { FilterOverValorantGames, filterOverValorantGames } from './models/filter-over-valorant-games';
import { RangeOverValorantGames, rangeOverValorantGames } from './models/range-over-valorant-games';
import { SearchOverValorantGames, searchOverValorantGames } from './models/search-over-valorant-games';

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
