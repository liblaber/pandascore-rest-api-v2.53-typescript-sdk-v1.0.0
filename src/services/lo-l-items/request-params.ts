import {
  FilterOverLoLItems,
  Page,
  RangeOverLoLItems,
  SearchOverLoLItems,
  filterOverLoLItems,
  page,
  rangeOverLoLItems,
  searchOverLoLItems,
} from '../common';

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
