import { FilterOverLolWildRiftTeams, filterOverLolWildRiftTeams } from './models/filter-over-lol-wild-rift-teams';
import { RangeOverLolWildRiftTeams, rangeOverLolWildRiftTeams } from './models/range-over-lol-wild-rift-teams';
import { SearchOverLolWildRiftTeams, searchOverLolWildRiftTeams } from './models/search-over-lol-wild-rift-teams';
import { Page, page } from '../common/page';

export interface GetLolWildRiftTeamsParams {
  filter?: FilterOverLolWildRiftTeams;
  range?: RangeOverLolWildRiftTeams;
  sort?: any[];
  search?: SearchOverLolWildRiftTeams;
  page?: Page;
  perPage?: number;
}
