import {
  FilterOverStarcraft2Leagues,
  RangeOverStarcraft2Leagues,
  SearchOverStarcraft2Leagues,
  filterOverStarcraft2Leagues,
  rangeOverStarcraft2Leagues,
  searchOverStarcraft2Leagues,
} from './models';
import { Page, page } from '../common';

export interface GetStarcraft2LeaguesParams {
  filter?: FilterOverStarcraft2Leagues;
  range?: RangeOverStarcraft2Leagues;
  sort?: any[];
  search?: SearchOverStarcraft2Leagues;
  page?: Page;
  perPage?: number;
}
