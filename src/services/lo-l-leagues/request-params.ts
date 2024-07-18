import { FilterOverLoLLeagues, filterOverLoLLeagues } from './models/filter-over-lo-l-leagues';
import { RangeOverLoLLeagues, rangeOverLoLLeagues } from './models/range-over-lo-l-leagues';
import { SearchOverLoLLeagues, searchOverLoLLeagues } from './models/search-over-lo-l-leagues';
import { Page, page } from '../common/page';

export interface GetLolLeaguesParams {
  filter?: FilterOverLoLLeagues;
  range?: RangeOverLoLLeagues;
  sort?: any[];
  search?: SearchOverLoLLeagues;
  page?: Page;
  perPage?: number;
}
