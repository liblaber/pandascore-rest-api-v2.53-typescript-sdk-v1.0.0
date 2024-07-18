import {
  FilterOverStarcraftBroodWarPlayers,
  filterOverStarcraftBroodWarPlayers,
} from './models/filter-over-starcraft-brood-war-players';
import {
  RangeOverStarcraftBroodWarPlayers,
  rangeOverStarcraftBroodWarPlayers,
} from './models/range-over-starcraft-brood-war-players';
import {
  SearchOverStarcraftBroodWarPlayers,
  searchOverStarcraftBroodWarPlayers,
} from './models/search-over-starcraft-brood-war-players';
import { Page, page } from '../common/page';

export interface GetStarcraftBroodWarPlayersParams {
  filter?: FilterOverStarcraftBroodWarPlayers;
  range?: RangeOverStarcraftBroodWarPlayers;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarPlayers;
  page?: Page;
  perPage?: number;
}