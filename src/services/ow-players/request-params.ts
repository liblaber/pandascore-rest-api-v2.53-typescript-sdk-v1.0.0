import { FilterOverOwPlayers, filterOverOwPlayers } from './models/filter-over-ow-players';
import { RangeOverOwPlayers, rangeOverOwPlayers } from './models/range-over-ow-players';
import { SearchOverOwPlayers, searchOverOwPlayers } from './models/search-over-ow-players';
import { Page, page } from '../common/page';

export interface GetOwPlayersParams {
  filter?: FilterOverOwPlayers;
  range?: RangeOverOwPlayers;
  sort?: any[];
  search?: SearchOverOwPlayers;
  page?: Page;
  perPage?: number;
}
