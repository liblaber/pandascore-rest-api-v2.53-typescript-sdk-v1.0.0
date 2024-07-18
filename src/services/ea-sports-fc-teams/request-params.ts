import { FilterOverFifaTeams, filterOverFifaTeams } from './models/filter-over-fifa-teams';
import { RangeOverFifaTeams, rangeOverFifaTeams } from './models/range-over-fifa-teams';
import { SearchOverFifaTeams, searchOverFifaTeams } from './models/search-over-fifa-teams';
import { Page, page } from '../common/page';

export interface GetFifaTeamsParams {
  filter?: FilterOverFifaTeams;
  range?: RangeOverFifaTeams;
  sort?: any[];
  search?: SearchOverFifaTeams;
  page?: Page;
  perPage?: number;
}
