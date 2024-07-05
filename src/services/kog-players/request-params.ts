import {
  FilterOverKogPlayers,
  RangeOverKogPlayers,
  SearchOverKogPlayers,
  filterOverKogPlayers,
  rangeOverKogPlayers,
  searchOverKogPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetKogPlayersParams {
  filter?: FilterOverKogPlayers;
  range?: RangeOverKogPlayers;
  sort?: any[];
  search?: SearchOverKogPlayers;
  page?: Page;
  perPage?: number;
}
