import { FilterOverValorantAgents, filterOverValorantAgents } from './models/filter-over-valorant-agents';
import { RangeOverValorantAgents, rangeOverValorantAgents } from './models/range-over-valorant-agents';
import { SearchOverValorantAgents, searchOverValorantAgents } from './models/search-over-valorant-agents';
import { Page, page } from '../common/page';

export interface GetValorantAgentsParams {
  filter?: FilterOverValorantAgents;
  range?: RangeOverValorantAgents;
  sort?: any[];
  search?: SearchOverValorantAgents;
  page?: Page;
  perPage?: number;
}

export interface GetValorantVersionsAllAgentsParams {
  filter?: FilterOverValorantAgents;
  range?: RangeOverValorantAgents;
  sort?: any[];
  search?: SearchOverValorantAgents;
  page?: Page;
  perPage?: number;
}

export interface GetValorantVersionsValorantVersionNameAgentsParams {
  filter?: FilterOverValorantAgents;
  range?: RangeOverValorantAgents;
  sort?: any[];
  search?: SearchOverValorantAgents;
  page?: Page;
  perPage?: number;
}
