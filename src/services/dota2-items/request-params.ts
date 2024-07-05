import {
  FilterOverDota2Items,
  RangeOverDota2Items,
  SearchOverDota2Items,
  filterOverDota2Items,
  rangeOverDota2Items,
  searchOverDota2Items,
} from './models';
import { Page, page } from '../common';

export interface GetDota2ItemsParams {
  filter?: FilterOverDota2Items;
  range?: RangeOverDota2Items;
  sort?: any[];
  search?: SearchOverDota2Items;
  page?: Page;
  perPage?: number;
}
