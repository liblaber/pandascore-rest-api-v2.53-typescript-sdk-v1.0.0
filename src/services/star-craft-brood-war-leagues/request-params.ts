import {
  FilterOverStarcraftBroodWarLeagues,
  filterOverStarcraftBroodWarLeagues,
} from './models/filter-over-starcraft-brood-war-leagues';
import {
  RangeOverStarcraftBroodWarLeagues,
  rangeOverStarcraftBroodWarLeagues,
} from './models/range-over-starcraft-brood-war-leagues';
import {
  SearchOverStarcraftBroodWarLeagues,
  searchOverStarcraftBroodWarLeagues,
} from './models/search-over-starcraft-brood-war-leagues';
import { Page, page } from '../common/page';

export interface GetStarcraftBroodWarLeaguesParams {
  filter?: FilterOverStarcraftBroodWarLeagues;
  range?: RangeOverStarcraftBroodWarLeagues;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarLeagues;
  page?: Page;
  perPage?: number;
}
