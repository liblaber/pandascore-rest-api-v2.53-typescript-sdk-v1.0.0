import { FilterOverRlLeagues, filterOverRlLeagues } from './models/filter-over-rl-leagues';
import { RangeOverRlLeagues, rangeOverRlLeagues } from './models/range-over-rl-leagues';
import { SearchOverRlLeagues, searchOverRlLeagues } from './models/search-over-rl-leagues';
import { Page, page } from '../common/page';

export interface GetRlLeaguesParams {
  filter?: FilterOverRlLeagues;
  range?: RangeOverRlLeagues;
  sort?: any[];
  search?: SearchOverRlLeagues;
  page?: Page;
  perPage?: number;
}