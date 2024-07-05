import {
  FilterOverLoLMasteries,
  RangeOverLoLMasteries,
  SearchOverLoLMasteries,
  filterOverLoLMasteries,
  rangeOverLoLMasteries,
  searchOverLoLMasteries,
} from './models';
import { Page, page } from '../common';

export interface GetLolMasteriesParams {
  filter?: FilterOverLoLMasteries;
  range?: RangeOverLoLMasteries;
  sort?: any[];
  search?: SearchOverLoLMasteries;
  page?: Page;
  perPage?: number;
}
