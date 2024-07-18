import { FilterOverKogLeagues, filterOverKogLeagues } from './models/filter-over-kog-leagues';
import { RangeOverKogLeagues, rangeOverKogLeagues } from './models/range-over-kog-leagues';
import { SearchOverKogLeagues, searchOverKogLeagues } from './models/search-over-kog-leagues';
import { Page, page } from '../common/page';

export interface GetKogLeaguesParams {
  filter?: FilterOverKogLeagues;
  range?: RangeOverKogLeagues;
  sort?: any[];
  search?: SearchOverKogLeagues;
  page?: Page;
  perPage?: number;
}
