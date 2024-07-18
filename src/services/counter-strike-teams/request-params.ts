import { FilterOverCsgoTeams, filterOverCsgoTeams } from './models/filter-over-csgo-teams';
import { RangeOverCsgoTeams, rangeOverCsgoTeams } from './models/range-over-csgo-teams';
import { SearchOverCsgoTeams, searchOverCsgoTeams } from './models/search-over-csgo-teams';
import { Page, page } from '../common/page';

export interface GetCsgoTeamsParams {
  filter?: FilterOverCsgoTeams;
  range?: RangeOverCsgoTeams;
  sort?: any[];
  search?: SearchOverCsgoTeams;
  page?: Page;
  perPage?: number;
}
