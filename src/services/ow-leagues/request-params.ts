import {
  FilterOverOwLeagues,
  RangeOverOwLeagues,
  SearchOverOwLeagues,
  filterOverOwLeagues,
  rangeOverOwLeagues,
  searchOverOwLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetOwLeaguesParams {
  filter?: FilterOverOwLeagues;
  range?: RangeOverOwLeagues;
  sort?: any[];
  search?: SearchOverOwLeagues;
  page?: Page;
  perPage?: number;
}
