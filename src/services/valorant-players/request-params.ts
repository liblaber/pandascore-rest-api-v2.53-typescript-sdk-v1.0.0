import {
  FilterOverValorantPlayers,
  RangeOverValorantPlayers,
  SearchOverValorantPlayers,
  filterOverValorantPlayers,
  rangeOverValorantPlayers,
  searchOverValorantPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetValorantPlayersParams {
  filter?: FilterOverValorantPlayers;
  range?: RangeOverValorantPlayers;
  sort?: any[];
  search?: SearchOverValorantPlayers;
  page?: Page;
  perPage?: number;
}
