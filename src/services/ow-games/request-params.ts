import {
  FilterOverOwGames,
  RangeOverOwGames,
  SearchOverOwGames,
  filterOverOwGames,
  rangeOverOwGames,
  searchOverOwGames,
} from './models';
import { Page, page } from '../common';

export interface GetOwMatchesMatchIdOrSlugGamesParams {
  filter?: FilterOverOwGames;
  range?: RangeOverOwGames;
  sort?: any[];
  search?: SearchOverOwGames;
  page?: Page;
  perPage?: number;
}
