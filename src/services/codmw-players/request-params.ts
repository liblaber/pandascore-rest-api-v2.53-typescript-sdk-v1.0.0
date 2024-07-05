import {
  FilterOverCodmwPlayers,
  RangeOverCodmwPlayers,
  SearchOverCodmwPlayers,
  filterOverCodmwPlayers,
  rangeOverCodmwPlayers,
  searchOverCodmwPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetCodmwPlayersParams {
  filter?: FilterOverCodmwPlayers;
  range?: RangeOverCodmwPlayers;
  sort?: any[];
  search?: SearchOverCodmwPlayers;
  page?: Page;
  perPage?: number;
}
