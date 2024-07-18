import { FilterOverPubgTeams, filterOverPubgTeams } from './models/filter-over-pubg-teams';
import { RangeOverPubgTeams, rangeOverPubgTeams } from './models/range-over-pubg-teams';
import { SearchOverPubgTeams, searchOverPubgTeams } from './models/search-over-pubg-teams';
import { Page, page } from '../common/page';

export interface GetPubgTeamsParams {
  filter?: FilterOverPubgTeams;
  range?: RangeOverPubgTeams;
  sort?: any[];
  search?: SearchOverPubgTeams;
  page?: Page;
  perPage?: number;
}