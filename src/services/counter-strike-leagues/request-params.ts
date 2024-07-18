import { FilterOverCsgoLeagues, filterOverCsgoLeagues } from './models/filter-over-csgo-leagues';
import { RangeOverCsgoLeagues, rangeOverCsgoLeagues } from './models/range-over-csgo-leagues';
import { SearchOverCsgoLeagues, searchOverCsgoLeagues } from './models/search-over-csgo-leagues';
import { Page, page } from '../common/page';

export interface GetCsgoLeaguesParams {
  filter?: FilterOverCsgoLeagues;
  range?: RangeOverCsgoLeagues;
  sort?: any[];
  search?: SearchOverCsgoLeagues;
  page?: Page;
  perPage?: number;
}