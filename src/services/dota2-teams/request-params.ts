import { FilterOverDota2Teams, filterOverDota2Teams } from './models/filter-over-dota2-teams';
import { RangeOverDota2Teams, rangeOverDota2Teams } from './models/range-over-dota2-teams';
import { SearchOverDota2Teams, searchOverDota2Teams } from './models/search-over-dota2-teams';
import { Page, page } from '../common/page';

export interface GetDota2SeriesSerieIdOrSlugTeamsParams {
  filter?: FilterOverDota2Teams;
  range?: RangeOverDota2Teams;
  sort?: any[];
  search?: SearchOverDota2Teams;
  page?: Page;
  perPage?: number;
}

export interface GetDota2TeamsParams {
  filter?: FilterOverDota2Teams;
  range?: RangeOverDota2Teams;
  sort?: any[];
  search?: SearchOverDota2Teams;
  page?: Page;
  perPage?: number;
}