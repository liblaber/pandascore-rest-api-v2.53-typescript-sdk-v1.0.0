import { Page, page } from '../common/page';
import { FilterOverLoLGames, filterOverLoLGames } from './models/filter-over-lo-l-games';
import { RangeOverLoLGames, rangeOverLoLGames } from './models/range-over-lo-l-games';
import { SearchOverLoLGames, searchOverLoLGames } from './models/search-over-lo-l-games';
import { FilterOverLoLTeamLastGames, filterOverLoLTeamLastGames } from './models/filter-over-lo-l-team-last-games';
import { RangeOverLoLTeamLastGames, rangeOverLoLTeamLastGames } from './models/range-over-lo-l-team-last-games';
import { SearchOverLoLTeamLastGames, searchOverLoLTeamLastGames } from './models/search-over-lo-l-team-last-games';

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
