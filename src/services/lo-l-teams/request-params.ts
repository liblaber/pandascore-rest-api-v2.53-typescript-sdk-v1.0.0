import { FilterOverLoLTeams, filterOverLoLTeams } from './models/filter-over-lo-l-teams';
import { RangeOverLoLTeams, rangeOverLoLTeams } from './models/range-over-lo-l-teams';
import { SearchOverLoLTeams, searchOverLoLTeams } from './models/search-over-lo-l-teams';
import { Page, page } from '../common/page';

export interface GetLolSeriesSerieIdOrSlugTeamsParams {
  filter?: FilterOverLoLTeams;
  range?: RangeOverLoLTeams;
  sort?: any[];
  search?: SearchOverLoLTeams;
  page?: Page;
  perPage?: number;
}

export interface GetLolTeamsParams {
  filter?: FilterOverLoLTeams;
  range?: RangeOverLoLTeams;
  sort?: any[];
  search?: SearchOverLoLTeams;
  page?: Page;
  perPage?: number;
}
