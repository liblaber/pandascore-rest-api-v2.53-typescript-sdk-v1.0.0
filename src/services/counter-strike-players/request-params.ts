import { FilterOverCsgoPlayers, filterOverCsgoPlayers } from './models/filter-over-csgo-players';
import { RangeOverCsgoPlayers, rangeOverCsgoPlayers } from './models/range-over-csgo-players';
import { SearchOverCsgoPlayers, searchOverCsgoPlayers } from './models/search-over-csgo-players';
import { Page, page } from '../common/page';

export interface GetCsgoPlayersParams {
  filter?: FilterOverCsgoPlayers;
  range?: RangeOverCsgoPlayers;
  sort?: any[];
  search?: SearchOverCsgoPlayers;
  page?: Page;
  perPage?: number;
}
