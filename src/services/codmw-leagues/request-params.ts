import {
  FilterOverCodmwLeagues,
  RangeOverCodmwLeagues,
  SearchOverCodmwLeagues,
  filterOverCodmwLeagues,
  rangeOverCodmwLeagues,
  searchOverCodmwLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetCodmwLeaguesParams {
  filter?: FilterOverCodmwLeagues;
  range?: RangeOverCodmwLeagues;
  sort?: any[];
  search?: SearchOverCodmwLeagues;
  page?: Page;
  perPage?: number;
}
