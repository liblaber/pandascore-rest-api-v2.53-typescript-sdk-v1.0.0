import { FilterOverFifaPlayers, filterOverFifaPlayers } from './models/filter-over-fifa-players';
import { RangeOverFifaPlayers, rangeOverFifaPlayers } from './models/range-over-fifa-players';
import { SearchOverFifaPlayers, searchOverFifaPlayers } from './models/search-over-fifa-players';
import { Page, page } from '../common/page';

export interface GetFifaPlayersParams {
  filter?: FilterOverFifaPlayers;
  range?: RangeOverFifaPlayers;
  sort?: any[];
  search?: SearchOverFifaPlayers;
  page?: Page;
  perPage?: number;
}