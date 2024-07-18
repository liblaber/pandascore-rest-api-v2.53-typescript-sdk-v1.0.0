import { FilterOverLoLRunes, filterOverLoLRunes } from './models/filter-over-lo-l-runes';
import { RangeOverLoLRunes, rangeOverLoLRunes } from './models/range-over-lo-l-runes';
import { SearchOverLoLRunes, searchOverLoLRunes } from './models/search-over-lo-l-runes';
import { Page, page } from '../common/page';
import { FilterOverLoLRunesReforged, filterOverLoLRunesReforged } from './models/filter-over-lo-l-runes-reforged';
import { RangeOverLoLRunesReforged, rangeOverLoLRunesReforged } from './models/range-over-lo-l-runes-reforged';
import { SearchOverLoLRunesReforged, searchOverLoLRunesReforged } from './models/search-over-lo-l-runes-reforged';
import { FilterOverLoLRunePaths, filterOverLoLRunePaths } from './models/filter-over-lo-l-rune-paths';
import { RangeOverLoLRunePaths, rangeOverLoLRunePaths } from './models/range-over-lo-l-rune-paths';
import { SearchOverLoLRunePaths, searchOverLoLRunePaths } from './models/search-over-lo-l-rune-paths';

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