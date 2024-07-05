import {
  FilterOverStarcraftBroodWarLeagues,
  RangeOverStarcraftBroodWarLeagues,
  SearchOverStarcraftBroodWarLeagues,
  filterOverStarcraftBroodWarLeagues,
  rangeOverStarcraftBroodWarLeagues,
  searchOverStarcraftBroodWarLeagues,
} from './models';
import { Page, page } from '../common';

export interface GetStarcraftBroodWarLeaguesParams {
  filter?: FilterOverStarcraftBroodWarLeagues;
  range?: RangeOverStarcraftBroodWarLeagues;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarLeagues;
  page?: Page;
  perPage?: number;
}
