import {
  FilterOverR6SiegeTeams,
  RangeOverR6SiegeTeams,
  SearchOverR6SiegeTeams,
  filterOverR6SiegeTeams,
  rangeOverR6SiegeTeams,
  searchOverR6SiegeTeams,
} from './models';
import { Page, page } from '../common';

export interface GetR6siegeTeamsParams {
  filter?: FilterOverR6SiegeTeams;
  range?: RangeOverR6SiegeTeams;
  sort?: any[];
  search?: SearchOverR6SiegeTeams;
  page?: Page;
  perPage?: number;
}
