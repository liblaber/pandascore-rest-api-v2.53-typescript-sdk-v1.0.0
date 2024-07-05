import {
  FilterOverLolWildRiftPlayers,
  RangeOverLolWildRiftPlayers,
  SearchOverLolWildRiftPlayers,
  filterOverLolWildRiftPlayers,
  rangeOverLolWildRiftPlayers,
  searchOverLolWildRiftPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetLolWildRiftPlayersParams {
  filter?: FilterOverLolWildRiftPlayers;
  range?: RangeOverLolWildRiftPlayers;
  sort?: any[];
  search?: SearchOverLolWildRiftPlayers;
  page?: Page;
  perPage?: number;
}
