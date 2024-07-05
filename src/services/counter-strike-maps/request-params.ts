import {
  FilterOverCsgoMaps,
  RangeOverCsgoMaps,
  SearchOverCsgoMaps,
  filterOverCsgoMaps,
  rangeOverCsgoMaps,
  searchOverCsgoMaps,
} from './models';
import { Page, page } from '../common';

export interface GetCsgoMapsParams {
  filter?: FilterOverCsgoMaps;
  range?: RangeOverCsgoMaps;
  sort?: any[];
  search?: SearchOverCsgoMaps;
  page?: Page;
  perPage?: number;
}
