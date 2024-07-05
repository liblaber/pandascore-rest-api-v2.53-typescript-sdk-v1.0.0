import {
  FilterOverOwPlayers,
  RangeOverOwPlayers,
  SearchOverOwPlayers,
  filterOverOwPlayers,
  rangeOverOwPlayers,
  searchOverOwPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetOwPlayersParams {
  filter?: FilterOverOwPlayers;
  range?: RangeOverOwPlayers;
  sort?: any[];
  search?: SearchOverOwPlayers;
  page?: Page;
  perPage?: number;
}
