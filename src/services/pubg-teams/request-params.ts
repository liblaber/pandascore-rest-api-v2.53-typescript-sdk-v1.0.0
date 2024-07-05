import {
  FilterOverPubgTeams,
  RangeOverPubgTeams,
  SearchOverPubgTeams,
  filterOverPubgTeams,
  rangeOverPubgTeams,
  searchOverPubgTeams,
} from './models';
import { Page, page } from '../common';

export interface GetPubgTeamsParams {
  filter?: FilterOverPubgTeams;
  range?: RangeOverPubgTeams;
  sort?: any[];
  search?: SearchOverPubgTeams;
  page?: Page;
  perPage?: number;
}
