import { FilterOverCodmwPlayers, filterOverCodmwPlayers } from './models/filter-over-codmw-players';
import { RangeOverCodmwPlayers, rangeOverCodmwPlayers } from './models/range-over-codmw-players';
import { SearchOverCodmwPlayers, searchOverCodmwPlayers } from './models/search-over-codmw-players';
import { Page, page } from '../common/page';

export interface GetCodmwPlayersParams {
  filter?: FilterOverCodmwPlayers;
  range?: RangeOverCodmwPlayers;
  sort?: any[];
  search?: SearchOverCodmwPlayers;
  page?: Page;
  perPage?: number;
}
