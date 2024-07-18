import { FilterOverR6SiegePlayers, filterOverR6SiegePlayers } from './models/filter-over-r6-siege-players';
import { RangeOverR6SiegePlayers, rangeOverR6SiegePlayers } from './models/range-over-r6-siege-players';
import { SearchOverR6SiegePlayers, searchOverR6SiegePlayers } from './models/search-over-r6-siege-players';
import { Page, page } from '../common/page';

export interface GetR6siegePlayersParams {
  filter?: FilterOverR6SiegePlayers;
  range?: RangeOverR6SiegePlayers;
  sort?: any[];
  search?: SearchOverR6SiegePlayers;
  page?: Page;
  perPage?: number;
}
