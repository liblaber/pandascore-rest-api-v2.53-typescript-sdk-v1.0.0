import {
  FilterOverDota2Players,
  RangeOverDota2Players,
  SearchOverDota2Players,
  filterOverDota2Players,
  rangeOverDota2Players,
  searchOverDota2Players,
} from './models';
import { Page, page } from '../common';

export interface GetDota2PlayersParams {
  filter?: FilterOverDota2Players;
  range?: RangeOverDota2Players;
  sort?: any[];
  search?: SearchOverDota2Players;
  page?: Page;
  perPage?: number;
}
