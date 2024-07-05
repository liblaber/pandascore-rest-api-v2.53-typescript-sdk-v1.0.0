import {
  FilterOverLoLLeagues,
  RangeOverLoLLeagues,
  SearchOverLoLLeagues,
  filterOverLoLLeagues,
  rangeOverLoLLeagues,
  searchOverLoLLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetLolLeaguesParams {
  filter?: FilterOverLoLLeagues;
  range?: RangeOverLoLLeagues;
  sort?: any[];
  search?: SearchOverLoLLeagues;
  page?: Page;
  perPage?: number;
}
