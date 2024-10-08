// This file was generated by liblab | https://liblab.com/

import { FilterOverValorantWeapons, filterOverValorantWeapons } from './models/filter-over-valorant-weapons';
import { RangeOverValorantWeapons, rangeOverValorantWeapons } from './models/range-over-valorant-weapons';
import { SearchOverValorantWeapons, searchOverValorantWeapons } from './models/search-over-valorant-weapons';
import { Page, page } from '../common/page';

export interface GetValorantWeaponsParams {
  filter?: FilterOverValorantWeapons;
  range?: RangeOverValorantWeapons;
  sort?: any[];
  search?: SearchOverValorantWeapons;
  page?: Page;
  perPage?: number;
}
