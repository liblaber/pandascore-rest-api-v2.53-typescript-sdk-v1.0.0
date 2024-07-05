import {
  FilterOverCsgoWeapons,
  RangeOverCsgoWeapons,
  SearchOverCsgoWeapons,
  filterOverCsgoWeapons,
  rangeOverCsgoWeapons,
  searchOverCsgoWeapons,
} from './models';
import { Page, page } from '../common';

export interface GetCsgoWeaponsParams {
  filter?: FilterOverCsgoWeapons;
  range?: RangeOverCsgoWeapons;
  sort?: any[];
  search?: SearchOverCsgoWeapons;
  page?: Page;
  perPage?: number;
}
