import {
  FilterOverLoLRunePaths,
  FilterOverLoLRunes,
  FilterOverLoLRunesReforged,
  RangeOverLoLRunePaths,
  RangeOverLoLRunes,
  RangeOverLoLRunesReforged,
  SearchOverLoLRunePaths,
  SearchOverLoLRunes,
  SearchOverLoLRunesReforged,
  filterOverLoLRunePaths,
  filterOverLoLRunes,
  filterOverLoLRunesReforged,
  rangeOverLoLRunePaths,
  rangeOverLoLRunes,
  rangeOverLoLRunesReforged,
  searchOverLoLRunePaths,
  searchOverLoLRunes,
  searchOverLoLRunesReforged,
} from './models';
import { Page, page } from '../common';

export interface GetLolRunesParams {
  filter?: FilterOverLoLRunes;
  range?: RangeOverLoLRunes;
  sort?: any[];
  search?: SearchOverLoLRunes;
  page?: Page;
  perPage?: number;
}

export interface GetLolRunesReforgedParams {
  filter?: FilterOverLoLRunesReforged;
  range?: RangeOverLoLRunesReforged;
  sort?: any[];
  search?: SearchOverLoLRunesReforged;
  page?: Page;
  perPage?: number;
}

export interface GetLolRunesReforgedPathsParams {
  filter?: FilterOverLoLRunePaths;
  range?: RangeOverLoLRunePaths;
  sort?: any[];
  search?: SearchOverLoLRunePaths;
  page?: Page;
  perPage?: number;
}
