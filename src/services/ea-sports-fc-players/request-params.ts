import {
  FilterOverFifaPlayers,
  RangeOverFifaPlayers,
  SearchOverFifaPlayers,
  filterOverFifaPlayers,
  rangeOverFifaPlayers,
  searchOverFifaPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetFifaPlayersParams {
  filter?: FilterOverFifaPlayers;
  range?: RangeOverFifaPlayers;
  sort?: any[];
  search?: SearchOverFifaPlayers;
  page?: Page;
  perPage?: number;
}
