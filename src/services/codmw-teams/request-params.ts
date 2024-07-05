import {
  FilterOverCodmwTeams,
  RangeOverCodmwTeams,
  SearchOverCodmwTeams,
  filterOverCodmwTeams,
  rangeOverCodmwTeams,
  searchOverCodmwTeams,
} from './models';
import { Page, page } from '../common';

export interface GetCodmwTeamsParams {
  filter?: FilterOverCodmwTeams;
  range?: RangeOverCodmwTeams;
  sort?: any[];
  search?: SearchOverCodmwTeams;
  page?: Page;
  perPage?: number;
}
