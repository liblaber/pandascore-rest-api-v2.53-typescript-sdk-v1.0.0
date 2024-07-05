import {
  FilterOverLoLChampions,
  Page,
  RangeOverLoLChampions,
  SearchOverLoLChampions,
  filterOverLoLChampions,
  page,
  rangeOverLoLChampions,
  searchOverLoLChampions,
} from '../common';

export interface GetLolChampionsParams {
  filter?: FilterOverLoLChampions;
  range?: RangeOverLoLChampions;
  sort?: any[];
  search?: SearchOverLoLChampions;
  page?: Page;
  perPage?: number;
}

export interface GetLolVersionsAllChampionsParams {
  filter?: FilterOverLoLChampions;
  range?: RangeOverLoLChampions;
  sort?: any[];
  search?: SearchOverLoLChampions;
  page?: Page;
  perPage?: number;
}

export interface GetLolVersionsLolVersionNameChampionsParams {
  filter?: FilterOverLoLChampions;
  range?: RangeOverLoLChampions;
  sort?: any[];
  search?: SearchOverLoLChampions;
  page?: Page;
  perPage?: number;
}
