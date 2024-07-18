import { FilterOverDota2Heroes, filterOverDota2Heroes } from './models/filter-over-dota2-heroes';
import { RangeOverDota2Heroes, rangeOverDota2Heroes } from './models/range-over-dota2-heroes';
import { SearchOverDota2Heroes, searchOverDota2Heroes } from './models/search-over-dota2-heroes';
import { Page, page } from '../common/page';

export interface GetDota2HeroesParams {
  filter?: FilterOverDota2Heroes;
  range?: RangeOverDota2Heroes;
  sort?: any[];
  search?: SearchOverDota2Heroes;
  page?: Page;
  perPage?: number;
}