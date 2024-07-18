import { FilterOverStarcraft2Players, filterOverStarcraft2Players } from './models/filter-over-starcraft2-players';
import { RangeOverStarcraft2Players, rangeOverStarcraft2Players } from './models/range-over-starcraft2-players';
import { SearchOverStarcraft2Players, searchOverStarcraft2Players } from './models/search-over-starcraft2-players';
import { Page, page } from '../common/page';

export interface GetStarcraft2PlayersParams {
  filter?: FilterOverStarcraft2Players;
  range?: RangeOverStarcraft2Players;
  sort?: any[];
  search?: SearchOverStarcraft2Players;
  page?: Page;
  perPage?: number;
}
