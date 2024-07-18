import { FilterOverDota2Items, filterOverDota2Items } from './models/filter-over-dota2-items';
import { RangeOverDota2Items, rangeOverDota2Items } from './models/range-over-dota2-items';
import { SearchOverDota2Items, searchOverDota2Items } from './models/search-over-dota2-items';
import { Page, page } from '../common/page';

export interface GetDota2ItemsParams {
  filter?: FilterOverDota2Items;
  range?: RangeOverDota2Items;
  sort?: any[];
  search?: SearchOverDota2Items;
  page?: Page;
  perPage?: number;
}
