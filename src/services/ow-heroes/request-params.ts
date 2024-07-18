import { FilterOverOwHeroes, filterOverOwHeroes } from './models/filter-over-ow-heroes';
import { RangeOverOwHeroes, rangeOverOwHeroes } from './models/range-over-ow-heroes';
import { SearchOverOwHeroes, searchOverOwHeroes } from './models/search-over-ow-heroes';
import { Page, page } from '../common/page';

export interface GetOwHeroesParams {
  filter?: FilterOverOwHeroes;
  range?: RangeOverOwHeroes;
  sort?: any[];
  search?: SearchOverOwHeroes;
  page?: Page;
  perPage?: number;
}