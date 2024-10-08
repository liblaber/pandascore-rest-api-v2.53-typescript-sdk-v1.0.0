// This file was generated by liblab | https://liblab.com/

import {
  FilterOverValorantShortTournaments,
  filterOverValorantShortTournaments,
} from './models/filter-over-valorant-short-tournaments';
import {
  RangeOverValorantShortTournaments,
  rangeOverValorantShortTournaments,
} from './models/range-over-valorant-short-tournaments';
import {
  SearchOverValorantShortTournaments,
  searchOverValorantShortTournaments,
} from './models/search-over-valorant-short-tournaments';
import { Page, page } from '../common/page';

export interface GetValorantTournamentsParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetValorantTournamentsPastParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetValorantTournamentsRunningParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetValorantTournamentsUpcomingParams {
  filter?: FilterOverValorantShortTournaments;
  range?: RangeOverValorantShortTournaments;
  sort?: any[];
  search?: SearchOverValorantShortTournaments;
  page?: Page;
  perPage?: number;
}
