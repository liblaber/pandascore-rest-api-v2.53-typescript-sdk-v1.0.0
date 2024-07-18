import { FilterOverValorantAbilities, filterOverValorantAbilities } from './models/filter-over-valorant-abilities';
import { RangeOverValorantAbilities, rangeOverValorantAbilities } from './models/range-over-valorant-abilities';
import { SearchOverValorantAbilities, searchOverValorantAbilities } from './models/search-over-valorant-abilities';
import { Page, page } from '../common/page';

export interface GetValorantAbilitiesParams {
  filter?: FilterOverValorantAbilities;
  range?: RangeOverValorantAbilities;
  sort?: any[];
  search?: SearchOverValorantAbilities;
  page?: Page;
  perPage?: number;
}