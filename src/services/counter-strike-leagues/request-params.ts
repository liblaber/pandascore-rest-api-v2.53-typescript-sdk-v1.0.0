import {
  FilterOverCsgoLeagues,
  RangeOverCsgoLeagues,
  SearchOverCsgoLeagues,
  filterOverCsgoLeagues,
  rangeOverCsgoLeagues,
  searchOverCsgoLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetCsgoLeaguesParams {
  filter?: FilterOverCsgoLeagues;
  range?: RangeOverCsgoLeagues;
  sort?: any[];
  search?: SearchOverCsgoLeagues;
  page?: Page;
  perPage?: number;
}
