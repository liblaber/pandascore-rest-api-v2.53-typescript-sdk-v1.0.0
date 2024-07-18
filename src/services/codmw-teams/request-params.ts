import { FilterOverCodmwTeams, filterOverCodmwTeams } from './models/filter-over-codmw-teams';
import { RangeOverCodmwTeams, rangeOverCodmwTeams } from './models/range-over-codmw-teams';
import { SearchOverCodmwTeams, searchOverCodmwTeams } from './models/search-over-codmw-teams';
import { Page, page } from '../common/page';

export interface GetCodmwTeamsParams {
  filter?: FilterOverCodmwTeams;
  range?: RangeOverCodmwTeams;
  sort?: any[];
  search?: SearchOverCodmwTeams;
  page?: Page;
  perPage?: number;
}
