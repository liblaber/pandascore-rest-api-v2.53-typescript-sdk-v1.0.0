import {
  FilterOverStarcraftBroodWarTeams,
  RangeOverStarcraftBroodWarTeams,
  SearchOverStarcraftBroodWarTeams,
  filterOverStarcraftBroodWarTeams,
  rangeOverStarcraftBroodWarTeams,
  searchOverStarcraftBroodWarTeams,
} from './models';
import { Page, page } from '../common';

export interface GetStarcraftBroodWarTeamsParams {
  filter?: FilterOverStarcraftBroodWarTeams;
  range?: RangeOverStarcraftBroodWarTeams;
  sort?: any[];
  search?: SearchOverStarcraftBroodWarTeams;
  page?: Page;
  perPage?: number;
}
