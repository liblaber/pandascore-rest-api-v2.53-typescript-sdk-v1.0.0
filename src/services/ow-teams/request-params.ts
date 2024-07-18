import { FilterOverOwTeams, filterOverOwTeams } from './models/filter-over-ow-teams';
import { RangeOverOwTeams, rangeOverOwTeams } from './models/range-over-ow-teams';
import { SearchOverOwTeams, searchOverOwTeams } from './models/search-over-ow-teams';
import { Page, page } from '../common/page';

export interface GetOwTeamsParams {
  filter?: FilterOverOwTeams;
  range?: RangeOverOwTeams;
  sort?: any[];
  search?: SearchOverOwTeams;
  page?: Page;
  perPage?: number;
}
