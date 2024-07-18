import {
  FilterOverPubgShortTournaments,
  filterOverPubgShortTournaments,
} from './models/filter-over-pubg-short-tournaments';
import {
  RangeOverPubgShortTournaments,
  rangeOverPubgShortTournaments,
} from './models/range-over-pubg-short-tournaments';
import {
  SearchOverPubgShortTournaments,
  searchOverPubgShortTournaments,
} from './models/search-over-pubg-short-tournaments';
import { Page, page } from '../common/page';

export interface GetPubgTournamentsParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetPubgTournamentsPastParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetPubgTournamentsRunningParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}

export interface GetPubgTournamentsUpcomingParams {
  filter?: FilterOverPubgShortTournaments;
  range?: RangeOverPubgShortTournaments;
  sort?: any[];
  search?: SearchOverPubgShortTournaments;
  page?: Page;
  perPage?: number;
}
