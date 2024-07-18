import { FilterOverLoLChampions, filterOverLoLChampions } from './models/filter-over-lo-l-champions';
import { RangeOverLoLChampions, rangeOverLoLChampions } from './models/range-over-lo-l-champions';
import { SearchOverLoLChampions, searchOverLoLChampions } from './models/search-over-lo-l-champions';
import { Page, page } from '../common/page';

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
