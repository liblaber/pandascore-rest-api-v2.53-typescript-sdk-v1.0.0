import {
  FilterOverStarcraft2Players,
  RangeOverStarcraft2Players,
  SearchOverStarcraft2Players,
  filterOverStarcraft2Players,
  rangeOverStarcraft2Players,
  searchOverStarcraft2Players,
} from './models';
import { Page, page } from '../common';

export interface GetStarcraft2PlayersParams {
  filter?: FilterOverStarcraft2Players;
  range?: RangeOverStarcraft2Players;
  sort?: any[];
  search?: SearchOverStarcraft2Players;
  page?: Page;
  perPage?: number;
}
