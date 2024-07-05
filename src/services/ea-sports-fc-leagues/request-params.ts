import {
  FilterOverFifaLeagues,
  RangeOverFifaLeagues,
  SearchOverFifaLeagues,
  filterOverFifaLeagues,
  rangeOverFifaLeagues,
  searchOverFifaLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetFifaLeaguesParams {
  filter?: FilterOverFifaLeagues;
  range?: RangeOverFifaLeagues;
  sort?: any[];
  search?: SearchOverFifaLeagues;
  page?: Page;
  perPage?: number;
}
