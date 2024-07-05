import {
  FilterOverOwMaps,
  RangeOverOwMaps,
  SearchOverOwMaps,
  filterOverOwMaps,
  rangeOverOwMaps,
  searchOverOwMaps,
} from './models';
import { Page, page } from '../common';

export interface GetOwMapsParams {
  filter?: FilterOverOwMaps;
  range?: RangeOverOwMaps;
  sort?: any[];
  search?: SearchOverOwMaps;
  page?: Page;
  perPage?: number;
}
