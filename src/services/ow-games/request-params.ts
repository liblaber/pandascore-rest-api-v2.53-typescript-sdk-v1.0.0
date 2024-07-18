import { FilterOverOwGames, filterOverOwGames } from './models/filter-over-ow-games';
import { RangeOverOwGames, rangeOverOwGames } from './models/range-over-ow-games';
import { SearchOverOwGames, searchOverOwGames } from './models/search-over-ow-games';
import { Page, page } from '../common/page';

export interface GetOwMatchesMatchIdOrSlugGamesParams {
  filter?: FilterOverOwGames;
  range?: RangeOverOwGames;
  sort?: any[];
  search?: SearchOverOwGames;
  page?: Page;
  perPage?: number;
}
