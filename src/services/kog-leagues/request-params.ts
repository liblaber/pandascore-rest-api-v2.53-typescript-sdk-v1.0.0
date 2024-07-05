import {
  FilterOverKogLeagues,
  RangeOverKogLeagues,
  SearchOverKogLeagues,
  filterOverKogLeagues,
  rangeOverKogLeagues,
  searchOverKogLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetKogLeaguesParams {
  filter?: FilterOverKogLeagues;
  range?: RangeOverKogLeagues;
  sort?: any[];
  search?: SearchOverKogLeagues;
  page?: Page;
  perPage?: number;
}
