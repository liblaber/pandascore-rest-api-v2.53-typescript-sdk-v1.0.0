import {
  FilterOverR6SiegePlayers,
  RangeOverR6SiegePlayers,
  SearchOverR6SiegePlayers,
  filterOverR6SiegePlayers,
  rangeOverR6SiegePlayers,
  searchOverR6SiegePlayers,
} from './models';
import { Page, page } from '../common';

export interface GetR6siegePlayersParams {
  filter?: FilterOverR6SiegePlayers;
  range?: RangeOverR6SiegePlayers;
  sort?: any[];
  search?: SearchOverR6SiegePlayers;
  page?: Page;
  perPage?: number;
}
