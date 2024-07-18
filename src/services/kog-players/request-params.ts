import { FilterOverKogPlayers, filterOverKogPlayers } from './models/filter-over-kog-players';
import { RangeOverKogPlayers, rangeOverKogPlayers } from './models/range-over-kog-players';
import { SearchOverKogPlayers, searchOverKogPlayers } from './models/search-over-kog-players';
import { Page, page } from '../common/page';

export interface GetKogPlayersParams {
  filter?: FilterOverKogPlayers;
  range?: RangeOverKogPlayers;
  sort?: any[];
  search?: SearchOverKogPlayers;
  page?: Page;
  perPage?: number;
}