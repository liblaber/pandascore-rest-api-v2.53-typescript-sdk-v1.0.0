import { FilterOverRlPlayers, filterOverRlPlayers } from './models/filter-over-rl-players';
import { RangeOverRlPlayers, rangeOverRlPlayers } from './models/range-over-rl-players';
import { SearchOverRlPlayers, searchOverRlPlayers } from './models/search-over-rl-players';
import { Page, page } from '../common/page';

export interface GetRlPlayersParams {
  filter?: FilterOverRlPlayers;
  range?: RangeOverRlPlayers;
  sort?: any[];
  search?: SearchOverRlPlayers;
  page?: Page;
  perPage?: number;
}
