import { FilterOverLolWildRiftPlayers, filterOverLolWildRiftPlayers } from './models/filter-over-lol-wild-rift-players';
import { RangeOverLolWildRiftPlayers, rangeOverLolWildRiftPlayers } from './models/range-over-lol-wild-rift-players';
import { SearchOverLolWildRiftPlayers, searchOverLolWildRiftPlayers } from './models/search-over-lol-wild-rift-players';
import { Page, page } from '../common/page';

export interface GetLolWildRiftPlayersParams {
  filter?: FilterOverLolWildRiftPlayers;
  range?: RangeOverLolWildRiftPlayers;
  sort?: any[];
  search?: SearchOverLolWildRiftPlayers;
  page?: Page;
  perPage?: number;
}
