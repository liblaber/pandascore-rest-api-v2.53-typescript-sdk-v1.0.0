import {
  FilterOverRlPlayers,
  RangeOverRlPlayers,
  SearchOverRlPlayers,
  filterOverRlPlayers,
  rangeOverRlPlayers,
  searchOverRlPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetRlPlayersParams {
  filter?: FilterOverRlPlayers;
  range?: RangeOverRlPlayers;
  sort?: any[];
  search?: SearchOverRlPlayers;
  page?: Page;
  perPage?: number;
}
