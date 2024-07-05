import {
  FilterOverValorantWeapons,
  RangeOverValorantWeapons,
  SearchOverValorantWeapons,
  filterOverValorantWeapons,
  rangeOverValorantWeapons,
  searchOverValorantWeapons,
} from './models';
import { Page, page } from '../common';

export interface GetValorantWeaponsParams {
  filter?: FilterOverValorantWeapons;
  range?: RangeOverValorantWeapons;
  sort?: any[];
  search?: SearchOverValorantWeapons;
  page?: Page;
  perPage?: number;
}
