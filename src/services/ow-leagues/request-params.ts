import { FilterOverOwLeagues, filterOverOwLeagues } from './models/filter-over-ow-leagues';
import { RangeOverOwLeagues, rangeOverOwLeagues } from './models/range-over-ow-leagues';
import { SearchOverOwLeagues, searchOverOwLeagues } from './models/search-over-ow-leagues';
import { Page, page } from '../common/page';

export interface GetOwLeaguesParams {
  filter?: FilterOverOwLeagues;
  range?: RangeOverOwLeagues;
  sort?: any[];
  search?: SearchOverOwLeagues;
  page?: Page;
  perPage?: number;
}