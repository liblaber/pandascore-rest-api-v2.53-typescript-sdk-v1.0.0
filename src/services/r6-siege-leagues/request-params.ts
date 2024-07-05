import {
  FilterOverR6SiegeLeagues,
  RangeOverR6SiegeLeagues,
  SearchOverR6SiegeLeagues,
  filterOverR6SiegeLeagues,
  rangeOverR6SiegeLeagues,
  searchOverR6SiegeLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetR6siegeLeaguesParams {
  filter?: FilterOverR6SiegeLeagues;
  range?: RangeOverR6SiegeLeagues;
  sort?: any[];
  search?: SearchOverR6SiegeLeagues;
  page?: Page;
  perPage?: number;
}
