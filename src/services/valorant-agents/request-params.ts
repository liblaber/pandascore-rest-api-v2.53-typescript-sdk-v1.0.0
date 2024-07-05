import {
  FilterOverValorantAgents,
  Page,
  RangeOverValorantAgents,
  SearchOverValorantAgents,
  filterOverValorantAgents,
  page,
  rangeOverValorantAgents,
  searchOverValorantAgents,
} from '../common';

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
