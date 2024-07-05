import {
  FilterOverPubgLeagues,
  RangeOverPubgLeagues,
  SearchOverPubgLeagues,
  filterOverPubgLeagues,
  rangeOverPubgLeagues,
  searchOverPubgLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetPubgLeaguesParams {
  filter?: FilterOverPubgLeagues;
  range?: RangeOverPubgLeagues;
  sort?: any[];
  search?: SearchOverPubgLeagues;
  page?: Page;
  perPage?: number;
}
