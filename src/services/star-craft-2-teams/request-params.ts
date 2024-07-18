import { FilterOverStarcraft2Teams, filterOverStarcraft2Teams } from './models/filter-over-starcraft2-teams';
import { RangeOverStarcraft2Teams, rangeOverStarcraft2Teams } from './models/range-over-starcraft2-teams';
import { SearchOverStarcraft2Teams, searchOverStarcraft2Teams } from './models/search-over-starcraft2-teams';
import { Page, page } from '../common/page';

export interface GetStarcraft2TeamsParams {
  filter?: FilterOverStarcraft2Teams;
  range?: RangeOverStarcraft2Teams;
  sort?: any[];
  search?: SearchOverStarcraft2Teams;
  page?: Page;
  perPage?: number;
}