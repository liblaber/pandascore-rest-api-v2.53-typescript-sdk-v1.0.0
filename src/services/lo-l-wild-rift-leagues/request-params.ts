import {
  FilterOverLolWildRiftLeagues,
  RangeOverLolWildRiftLeagues,
  SearchOverLolWildRiftLeagues,
  filterOverLolWildRiftLeagues,
  rangeOverLolWildRiftLeagues,
  searchOverLolWildRiftLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetLolWildRiftLeaguesParams {
  filter?: FilterOverLolWildRiftLeagues;
  range?: RangeOverLolWildRiftLeagues;
  sort?: any[];
  search?: SearchOverLolWildRiftLeagues;
  page?: Page;
  perPage?: number;
}
