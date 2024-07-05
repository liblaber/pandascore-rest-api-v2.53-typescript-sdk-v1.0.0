import {
  FilterOverDota2Leagues,
  RangeOverDota2Leagues,
  SearchOverDota2Leagues,
  filterOverDota2Leagues,
  rangeOverDota2Leagues,
  searchOverDota2Leagues,
} from './models';
import { Page, page } from '../common';

export interface GetDota2LeaguesParams {
  filter?: FilterOverDota2Leagues;
  range?: RangeOverDota2Leagues;
  sort?: any[];
  search?: SearchOverDota2Leagues;
  page?: Page;
  perPage?: number;
}
