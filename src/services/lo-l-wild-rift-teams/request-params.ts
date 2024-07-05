import {
  FilterOverLolWildRiftTeams,
  RangeOverLolWildRiftTeams,
  SearchOverLolWildRiftTeams,
  filterOverLolWildRiftTeams,
  rangeOverLolWildRiftTeams,
  searchOverLolWildRiftTeams,
} from './models';
import { Page, page } from '../common';

export interface GetLolWildRiftTeamsParams {
  filter?: FilterOverLolWildRiftTeams;
  range?: RangeOverLolWildRiftTeams;
  sort?: any[];
  search?: SearchOverLolWildRiftTeams;
  page?: Page;
  perPage?: number;
}
