import { FilterOverDota2Abilities, filterOverDota2Abilities } from './models/filter-over-dota2-abilities';
import { RangeOverDota2Abilities, rangeOverDota2Abilities } from './models/range-over-dota2-abilities';
import { SearchOverDota2Abilities, searchOverDota2Abilities } from './models/search-over-dota2-abilities';
import { Page, page } from '../common/page';

export interface GetDota2AbilitiesParams {
  filter?: FilterOverDota2Abilities;
  range?: RangeOverDota2Abilities;
  sort?: any[];
  search?: SearchOverDota2Abilities;
  page?: Page;
  perPage?: number;
}