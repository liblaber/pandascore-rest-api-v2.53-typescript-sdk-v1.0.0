import {
  FilterOverKogTeams,
  RangeOverKogTeams,
  SearchOverKogTeams,
  filterOverKogTeams,
  rangeOverKogTeams,
  searchOverKogTeams,
} from './models';
import { Page, page } from '../common';

export interface GetKogTeamsParams {
  filter?: FilterOverKogTeams;
  range?: RangeOverKogTeams;
  sort?: any[];
  search?: SearchOverKogTeams;
  page?: Page;
  perPage?: number;
}
