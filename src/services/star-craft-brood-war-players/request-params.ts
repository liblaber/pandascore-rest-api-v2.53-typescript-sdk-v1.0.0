import {
  FilterOverStarcraftBroodWarPlayers,
  RangeOverStarcraftBroodWarPlayers,
  SearchOverStarcraftBroodWarPlayers,
  filterOverStarcraftBroodWarPlayers,
  rangeOverStarcraftBroodWarPlayers,
  searchOverStarcraftBroodWarPlayers,
} from './models';
import { Page, page } from '../common';

export interface GetStarcraftBroodWarPlayersParams {
  filter?: FilterOverStarcraftBroodWarPlayers;
  range?: RangeOverStarcraftBroodWarPlayers;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarPlayers;
  page?: Page;
  perPage?: number;
}
