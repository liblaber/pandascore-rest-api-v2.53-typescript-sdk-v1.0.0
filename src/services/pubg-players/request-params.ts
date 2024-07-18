import { FilterOverPubgPlayers, filterOverPubgPlayers } from './models/filter-over-pubg-players';
import { RangeOverPubgPlayers, rangeOverPubgPlayers } from './models/range-over-pubg-players';
import { SearchOverPubgPlayers, searchOverPubgPlayers } from './models/search-over-pubg-players';
import { Page, page } from '../common/page';

export interface GetPubgPlayersParams {
  filter?: FilterOverPubgPlayers;
  range?: RangeOverPubgPlayers;
  sort?: any[];
  search?: SearchOverPubgPlayers;
  page?: Page;
  perPage?: number;
}
