import { FilterOverLoLItems, filterOverLoLItems } from './models/filter-over-lo-l-items';
import { RangeOverLoLItems, rangeOverLoLItems } from './models/range-over-lo-l-items';
import { SearchOverLoLItems, searchOverLoLItems } from './models/search-over-lo-l-items';
import { Page, page } from '../common/page';

export interface GetLolItemsParams {
  filter?: FilterOverLoLItems;
  range?: RangeOverLoLItems;
  sort?: any[];
  search?: SearchOverLoLItems;
  page?: Page;
  perPage?: number;
}

export interface GetLolVersionsAllItemsParams {
  filter?: FilterOverLoLItems;
  range?: RangeOverLoLItems;
  sort?: any[];
  search?: SearchOverLoLItems;
  page?: Page;
  perPage?: number;
}

export interface GetLolVersionsLolVersionNameItemsParams {
  filter?: FilterOverLoLItems;
  range?: RangeOverLoLItems;
  sort?: any[];
  search?: SearchOverLoLItems;
  page?: Page;
  perPage?: number;
}
