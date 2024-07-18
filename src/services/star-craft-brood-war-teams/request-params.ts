import {
  FilterOverStarcraftBroodWarTeams,
  filterOverStarcraftBroodWarTeams,
} from './models/filter-over-starcraft-brood-war-teams';
import {
  RangeOverStarcraftBroodWarTeams,
  rangeOverStarcraftBroodWarTeams,
} from './models/range-over-starcraft-brood-war-teams';
import {
  SearchOverStarcraftBroodWarTeams,
  searchOverStarcraftBroodWarTeams,
} from './models/search-over-starcraft-brood-war-teams';
import { Page, page } from '../common/page';

export interface GetStarcraftBroodWarTeamsParams {
  filter?: FilterOverStarcraftBroodWarTeams;
  range?: RangeOverStarcraftBroodWarTeams;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarTeams;
  page?: Page;
  perPage?: number;
}
