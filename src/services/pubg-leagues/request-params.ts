import { FilterOverPubgLeagues, filterOverPubgLeagues } from './models/filter-over-pubg-leagues';
import { RangeOverPubgLeagues, rangeOverPubgLeagues } from './models/range-over-pubg-leagues';
import { SearchOverPubgLeagues, searchOverPubgLeagues } from './models/search-over-pubg-leagues';
import { Page, page } from '../common/page';

export interface GetPubgLeaguesParams {
  filter?: FilterOverPubgLeagues;
  range?: RangeOverPubgLeagues;
  sort?: any[];
  search?: SearchOverPubgLeagues;
  page?: Page;
  perPage?: number;
}
