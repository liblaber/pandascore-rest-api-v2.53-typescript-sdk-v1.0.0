import { FilterOverValorantPlayers, filterOverValorantPlayers } from './models/filter-over-valorant-players';
import { RangeOverValorantPlayers, rangeOverValorantPlayers } from './models/range-over-valorant-players';
import { SearchOverValorantPlayers, searchOverValorantPlayers } from './models/search-over-valorant-players';
import { Page, page } from '../common/page';

export interface GetValorantPlayersParams {
  filter?: FilterOverValorantPlayers;
  range?: RangeOverValorantPlayers;
  sort?: any[];
  search?: SearchOverValorantPlayers;
  page?: Page;
  perPage?: number;
}
