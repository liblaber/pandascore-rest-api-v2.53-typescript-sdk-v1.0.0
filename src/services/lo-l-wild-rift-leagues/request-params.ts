// This file was generated by liblab | https://liblab.com/

import { FilterOverLolWildRiftLeagues, filterOverLolWildRiftLeagues } from './models/filter-over-lol-wild-rift-leagues';
import { RangeOverLolWildRiftLeagues, rangeOverLolWildRiftLeagues } from './models/range-over-lol-wild-rift-leagues';
import { SearchOverLolWildRiftLeagues, searchOverLolWildRiftLeagues } from './models/search-over-lol-wild-rift-leagues';
import { Page, page } from '../common/page';

export interface GetLolWildRiftLeaguesParams {
  filter?: FilterOverLolWildRiftLeagues;
  range?: RangeOverLolWildRiftLeagues;
  sort?: any[];
  search?: SearchOverLolWildRiftLeagues;
  page?: Page;
  perPage?: number;
}
