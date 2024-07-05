import {
  FilterOverLoLSpells,
  RangeOverLoLSpells,
  SearchOverLoLSpells,
  filterOverLoLSpells,
  rangeOverLoLSpells,
  searchOverLoLSpells,
} from './models';
import { Page, page } from '../common';

export interface GetLolSpellsParams {
  filter?: FilterOverLoLSpells;
  range?: RangeOverLoLSpells;
  sort?: any[];
  search?: SearchOverLoLSpells;
  page?: Page;
  perPage?: number;
}
