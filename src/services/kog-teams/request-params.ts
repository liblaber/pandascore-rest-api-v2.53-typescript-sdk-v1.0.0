import { FilterOverKogTeams, filterOverKogTeams } from './models/filter-over-kog-teams';
import { RangeOverKogTeams, rangeOverKogTeams } from './models/range-over-kog-teams';
import { SearchOverKogTeams, searchOverKogTeams } from './models/search-over-kog-teams';
import { Page, page } from '../common/page';

export interface GetKogTeamsParams {
  filter?: FilterOverKogTeams;
  range?: RangeOverKogTeams;
  sort?: any[];
  search?: SearchOverKogTeams;
  page?: Page;
  perPage?: number;
}
