import {
  FilterOverValorantLeagues,
  RangeOverValorantLeagues,
  SearchOverValorantLeagues,
  filterOverValorantLeagues,
  rangeOverValorantLeagues,
  searchOverValorantLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetValorantLeaguesParams {
  filter?: FilterOverValorantLeagues;
  range?: RangeOverValorantLeagues;
  sort?: any[];
  search?: SearchOverValorantLeagues;
  page?: Page;
  perPage?: number;
}
