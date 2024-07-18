import { Page, page } from '../common/page';
import { FilterOverCsgoGames, filterOverCsgoGames } from './models/filter-over-csgo-games';
import { RangeOverCsgoGames, rangeOverCsgoGames } from './models/range-over-csgo-games';
import { SearchOverCsgoGames, searchOverCsgoGames } from './models/search-over-csgo-games';

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
