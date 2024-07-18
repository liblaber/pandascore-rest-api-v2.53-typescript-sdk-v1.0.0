import { FilterOverStarcraft2Leagues, filterOverStarcraft2Leagues } from './models/filter-over-starcraft2-leagues';
import { RangeOverStarcraft2Leagues, rangeOverStarcraft2Leagues } from './models/range-over-starcraft2-leagues';
import { SearchOverStarcraft2Leagues, searchOverStarcraft2Leagues } from './models/search-over-starcraft2-leagues';
import { Page, page } from '../common/page';

export interface GetStarcraft2LeaguesParams {
  filter?: FilterOverStarcraft2Leagues;
  range?: RangeOverStarcraft2Leagues;
  sort?: any[];
  search?: SearchOverStarcraft2Leagues;
  page?: Page;
  perPage?: number;
}
