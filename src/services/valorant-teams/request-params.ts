import { FilterOverValorantTeams, filterOverValorantTeams } from './models/filter-over-valorant-teams';
import { RangeOverValorantTeams, rangeOverValorantTeams } from './models/range-over-valorant-teams';
import { SearchOverValorantTeams, searchOverValorantTeams } from './models/search-over-valorant-teams';
import { Page, page } from '../common/page';

export interface GetValorantTeamsParams {
  filter?: FilterOverValorantTeams;
  range?: RangeOverValorantTeams;
  sort?: any[];
  search?: SearchOverValorantTeams;
  page?: Page;
  perPage?: number;
}
