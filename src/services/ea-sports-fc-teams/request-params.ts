import {
  FilterOverFifaTeams,
  RangeOverFifaTeams,
  SearchOverFifaTeams,
  filterOverFifaTeams,
  rangeOverFifaTeams,
  searchOverFifaTeams,
} from './models';
import { Page, page } from '../common';

export interface GetFifaTeamsParams {
  filter?: FilterOverFifaTeams;
  range?: RangeOverFifaTeams;
  sort?: any[];
  search?: SearchOverFifaTeams;
  page?: Page;
  perPage?: number;
}
