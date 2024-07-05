import {
  FilterOverOwTeams,
  RangeOverOwTeams,
  SearchOverOwTeams,
  filterOverOwTeams,
  rangeOverOwTeams,
  searchOverOwTeams,
} from './models';
import { Page, page } from '../common';

export interface GetOwTeamsParams {
  filter?: FilterOverOwTeams;
  range?: RangeOverOwTeams;
  sort?: any[];
  search?: SearchOverOwTeams;
  page?: Page;
  perPage?: number;
}
