import {
  FilterOverRlTeams,
  RangeOverRlTeams,
  SearchOverRlTeams,
  filterOverRlTeams,
  rangeOverRlTeams,
  searchOverRlTeams,
} from './models';
import { Page, page } from '../common';

export interface GetRlTeamsParams {
  filter?: FilterOverRlTeams;
  range?: RangeOverRlTeams;
  sort?: any[];
  search?: SearchOverRlTeams;
  page?: Page;
  perPage?: number;
}
