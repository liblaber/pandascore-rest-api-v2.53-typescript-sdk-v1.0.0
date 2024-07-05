import {
  FilterOverCsgoTeams,
  RangeOverCsgoTeams,
  SearchOverCsgoTeams,
  filterOverCsgoTeams,
  rangeOverCsgoTeams,
  searchOverCsgoTeams,
} from './models';
import { Page, page } from '../common';

export interface GetCsgoTeamsParams {
  filter?: FilterOverCsgoTeams;
  range?: RangeOverCsgoTeams;
  sort?: any[];
  search?: SearchOverCsgoTeams;
  page?: Page;
  perPage?: number;
}
