import { FilterOverFifaLeagues, filterOverFifaLeagues } from './models/filter-over-fifa-leagues';
import { RangeOverFifaLeagues, rangeOverFifaLeagues } from './models/range-over-fifa-leagues';
import { SearchOverFifaLeagues, searchOverFifaLeagues } from './models/search-over-fifa-leagues';
import { Page, page } from '../common/page';

export interface GetFifaLeaguesParams {
  filter?: FilterOverFifaLeagues;
  range?: RangeOverFifaLeagues;
  sort?: any[];
  search?: SearchOverFifaLeagues;
  page?: Page;
  perPage?: number;
}
