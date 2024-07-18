import { FilterOverDota2Players, filterOverDota2Players } from './models/filter-over-dota2-players';
import { RangeOverDota2Players, rangeOverDota2Players } from './models/range-over-dota2-players';
import { SearchOverDota2Players, searchOverDota2Players } from './models/search-over-dota2-players';
import { Page, page } from '../common/page';

export interface GetDota2PlayersParams {
  filter?: FilterOverDota2Players;
  range?: RangeOverDota2Players;
  sort?: any[];
  search?: SearchOverDota2Players;
  page?: Page;
  perPage?: number;
}
