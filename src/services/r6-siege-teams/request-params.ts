import { FilterOverR6SiegeTeams, filterOverR6SiegeTeams } from './models/filter-over-r6-siege-teams';
import { RangeOverR6SiegeTeams, rangeOverR6SiegeTeams } from './models/range-over-r6-siege-teams';
import { SearchOverR6SiegeTeams, searchOverR6SiegeTeams } from './models/search-over-r6-siege-teams';
import { Page, page } from '../common/page';

export interface GetR6siegeTeamsParams {
  filter?: FilterOverR6SiegeTeams;
  range?: RangeOverR6SiegeTeams;
  sort?: any[];
  search?: SearchOverR6SiegeTeams;
  page?: Page;
  perPage?: number;
}
