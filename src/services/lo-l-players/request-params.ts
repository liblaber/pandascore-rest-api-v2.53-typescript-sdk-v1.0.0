import { FilterOverLoLPlayers, filterOverLoLPlayers } from './models/filter-over-lo-l-players';
import { RangeOverLoLPlayers, rangeOverLoLPlayers } from './models/range-over-lo-l-players';
import { SearchOverLoLPlayers, searchOverLoLPlayers } from './models/search-over-lo-l-players';
import { Page, page } from '../common/page';

export interface GetLolPlayersParams {
  filter?: FilterOverLoLPlayers;
  range?: RangeOverLoLPlayers;
  sort?: any[];
  search?: SearchOverLoLPlayers;
  page?: Page;
  perPage?: number;
}
