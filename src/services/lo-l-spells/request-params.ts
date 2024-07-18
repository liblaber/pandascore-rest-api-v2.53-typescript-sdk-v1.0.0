import { FilterOverLoLSpells, filterOverLoLSpells } from './models/filter-over-lo-l-spells';
import { RangeOverLoLSpells, rangeOverLoLSpells } from './models/range-over-lo-l-spells';
import { SearchOverLoLSpells, searchOverLoLSpells } from './models/search-over-lo-l-spells';
import { Page, page } from '../common/page';

export interface GetLolSpellsParams {
  filter?: FilterOverLoLSpells;
  range?: RangeOverLoLSpells;
  sort?: any[];
  search?: SearchOverLoLSpells;
  page?: Page;
  perPage?: number;
}
