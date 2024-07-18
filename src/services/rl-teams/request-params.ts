import { FilterOverRlTeams, filterOverRlTeams } from './models/filter-over-rl-teams';
import { RangeOverRlTeams, rangeOverRlTeams } from './models/range-over-rl-teams';
import { SearchOverRlTeams, searchOverRlTeams } from './models/search-over-rl-teams';
import { Page, page } from '../common/page';

export interface GetRlTeamsParams {
  filter?: FilterOverRlTeams;
  range?: RangeOverRlTeams;
  sort?: any[];
  search?: SearchOverRlTeams;
  page?: Page;
  perPage?: number;
}