import {
  FilterOverValorantAbilities,
  RangeOverValorantAbilities,
  SearchOverValorantAbilities,
  filterOverValorantAbilities,
  rangeOverValorantAbilities,
  searchOverValorantAbilities,
} from './models';
import { Page, page } from '../common';

export interface GetValorantAbilitiesParams {
  filter?: FilterOverValorantAbilities;
  range?: RangeOverValorantAbilities;
  sort?: any[];
  search?: SearchOverValorantAbilities;
  page?: Page;
  perPage?: number;
}
