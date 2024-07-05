import {
  FilterOverValorantTeams,
  RangeOverValorantTeams,
  SearchOverValorantTeams,
  filterOverValorantTeams,
  rangeOverValorantTeams,
  searchOverValorantTeams,
} from './models';
import { Page, page } from '../common';

export interface GetValorantTeamsParams {
  filter?: FilterOverValorantTeams;
  range?: RangeOverValorantTeams;
  sort?: any[];
  search?: SearchOverValorantTeams;
  page?: Page;
  perPage?: number;
}
