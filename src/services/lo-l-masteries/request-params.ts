import { FilterOverLoLMasteries, filterOverLoLMasteries } from './models/filter-over-lo-l-masteries';
import { RangeOverLoLMasteries, rangeOverLoLMasteries } from './models/range-over-lo-l-masteries';
import { SearchOverLoLMasteries, searchOverLoLMasteries } from './models/search-over-lo-l-masteries';
import { Page, page } from '../common/page';

export interface GetLolMasteriesParams {
  filter?: FilterOverLoLMasteries;
  range?: RangeOverLoLMasteries;
  sort?: any[];
  search?: SearchOverLoLMasteries;
  page?: Page;
  perPage?: number;
}