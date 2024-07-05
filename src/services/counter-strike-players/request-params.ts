import {
  FilterOverCsgoPlayers,
  RangeOverCsgoPlayers,
  SearchOverCsgoPlayers,
  filterOverCsgoPlayers,
  rangeOverCsgoPlayers,
  searchOverCsgoPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetCsgoPlayersParams {
  filter?: FilterOverCsgoPlayers;
  range?: RangeOverCsgoPlayers;
  sort?: any[];
  search?: SearchOverCsgoPlayers;
  page?: Page;
  perPage?: number;
}
