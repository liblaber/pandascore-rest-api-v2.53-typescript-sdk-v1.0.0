import {
  FilterOverLoLPlayers,
  RangeOverLoLPlayers,
  SearchOverLoLPlayers,
  filterOverLoLPlayers,
  rangeOverLoLPlayers,
  searchOverLoLPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetLolPlayersParams {
  filter?: FilterOverLoLPlayers;
  range?: RangeOverLoLPlayers;
  sort?: any[];
  search?: SearchOverLoLPlayers;
  page?: Page;
  perPage?: number;
}
