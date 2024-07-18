import { FilterOverR6SiegeLeagues, filterOverR6SiegeLeagues } from './models/filter-over-r6-siege-leagues';
import { RangeOverR6SiegeLeagues, rangeOverR6SiegeLeagues } from './models/range-over-r6-siege-leagues';
import { SearchOverR6SiegeLeagues, searchOverR6SiegeLeagues } from './models/search-over-r6-siege-leagues';
import { Page, page } from '../common/page';

export interface GetR6siegeLeaguesParams {
  filter?: FilterOverR6SiegeLeagues;
  range?: RangeOverR6SiegeLeagues;
  sort?: any[];
  search?: SearchOverR6SiegeLeagues;
  page?: Page;
  perPage?: number;
}