import { FilterOverCsgoWeapons, filterOverCsgoWeapons } from './models/filter-over-csgo-weapons';
import { RangeOverCsgoWeapons, rangeOverCsgoWeapons } from './models/range-over-csgo-weapons';
import { SearchOverCsgoWeapons, searchOverCsgoWeapons } from './models/search-over-csgo-weapons';
import { Page, page } from '../common/page';

export interface GetCsgoWeaponsParams {
  filter?: FilterOverCsgoWeapons;
  range?: RangeOverCsgoWeapons;
  sort?: any[];
  search?: SearchOverCsgoWeapons;
  page?: Page;
  perPage?: number;
}
