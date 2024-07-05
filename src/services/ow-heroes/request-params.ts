import {
  FilterOverOwHeroes,
  RangeOverOwHeroes,
  SearchOverOwHeroes,
  filterOverOwHeroes,
  rangeOverOwHeroes,
  searchOverOwHeroes,
} from './models';
import { Page, page } from '../common';

export interface GetOwHeroesParams {
  filter?: FilterOverOwHeroes;
  range?: RangeOverOwHeroes;
  sort?: any[];
  search?: SearchOverOwHeroes;
  page?: Page;
  perPage?: number;
}
