import {
  FilterOverRlLeagues,
  RangeOverRlLeagues,
  SearchOverRlLeagues,
  filterOverRlLeagues,
  rangeOverRlLeagues,
  searchOverRlLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetRlLeaguesParams {
  filter?: FilterOverRlLeagues;
  range?: RangeOverRlLeagues;
  sort?: any[];
  search?: SearchOverRlLeagues;
  page?: Page;
  perPage?: number;
}
