import {
  FilterOverDota2Abilities,
  RangeOverDota2Abilities,
  SearchOverDota2Abilities,
  filterOverDota2Abilities,
  rangeOverDota2Abilities,
  searchOverDota2Abilities,
} from './models';
import { Page, page } from '../common';

export interface GetDota2AbilitiesParams {
  filter?: FilterOverDota2Abilities;
  range?: RangeOverDota2Abilities;
  sort?: any[];
  search?: SearchOverDota2Abilities;
  page?: Page;
  perPage?: number;
}
