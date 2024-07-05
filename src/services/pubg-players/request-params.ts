import {
  FilterOverPubgPlayers,
  RangeOverPubgPlayers,
  SearchOverPubgPlayers,
  filterOverPubgPlayers,
  rangeOverPubgPlayers,
  searchOverPubgPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetPubgPlayersParams {
  filter?: FilterOverPubgPlayers;
  range?: RangeOverPubgPlayers;
  sort?: any[];
  search?: SearchOverPubgPlayers;
  page?: Page;
  perPage?: number;
}
