import { FilterOverCodmwLeagues, filterOverCodmwLeagues } from './models/filter-over-codmw-leagues';
import { RangeOverCodmwLeagues, rangeOverCodmwLeagues } from './models/range-over-codmw-leagues';
import { SearchOverCodmwLeagues, searchOverCodmwLeagues } from './models/search-over-codmw-leagues';
import { Page, page } from '../common/page';

export interface GetCodmwLeaguesParams {
  filter?: FilterOverCodmwLeagues;
  range?: RangeOverCodmwLeagues;
  sort?: any[];
  search?: SearchOverCodmwLeagues;
  page?: Page;
  perPage?: number;
}
