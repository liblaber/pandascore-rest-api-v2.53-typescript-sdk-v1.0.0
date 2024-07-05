import {
  FilterOverDota2Heroes,
  RangeOverDota2Heroes,
  SearchOverDota2Heroes,
  filterOverDota2Heroes,
  rangeOverDota2Heroes,
  searchOverDota2Heroes,
} from './models';
import { Page, page } from '../common';

export interface GetDota2HeroesParams {
  filter?: FilterOverDota2Heroes;
  range?: RangeOverDota2Heroes;
  sort?: any[];
  search?: SearchOverDota2Heroes;
  page?: Page;
  perPage?: number;
}
