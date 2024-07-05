import {
  FilterOverStarcraft2Teams,
  RangeOverStarcraft2Teams,
  SearchOverStarcraft2Teams,
  filterOverStarcraft2Teams,
  rangeOverStarcraft2Teams,
  searchOverStarcraft2Teams,
} from './models';
import { Page, page } from '../common';

export interface GetStarcraft2TeamsParams {
  filter?: FilterOverStarcraft2Teams;
  range?: RangeOverStarcraft2Teams;
  sort?: any[];
  search?: SearchOverStarcraft2Teams;
  page?: Page;
  perPage?: number;
}
