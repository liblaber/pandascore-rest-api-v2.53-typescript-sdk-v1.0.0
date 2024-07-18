import { FilterOverDota2Leagues, filterOverDota2Leagues } from './models/filter-over-dota2-leagues';
import { RangeOverDota2Leagues, rangeOverDota2Leagues } from './models/range-over-dota2-leagues';
import { SearchOverDota2Leagues, searchOverDota2Leagues } from './models/search-over-dota2-leagues';
import { Page, page } from '../common/page';

export interface GetDota2LeaguesParams {
  filter?: FilterOverDota2Leagues;
  range?: RangeOverDota2Leagues;
  sort?: any[];
  search?: SearchOverDota2Leagues;
  page?: Page;
  perPage?: number;
}