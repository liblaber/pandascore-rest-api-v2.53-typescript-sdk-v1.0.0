import { Page, page } from '../common/page';
import { FilterOverDota2Games, filterOverDota2Games } from './models/filter-over-dota2-games';
import { RangeOverDota2Games, rangeOverDota2Games } from './models/range-over-dota2-games';
import { SearchOverDota2Games, searchOverDota2Games } from './models/search-over-dota2-games';

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
