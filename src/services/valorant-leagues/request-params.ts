import { FilterOverValorantLeagues, filterOverValorantLeagues } from './models/filter-over-valorant-leagues';
import { RangeOverValorantLeagues, rangeOverValorantLeagues } from './models/range-over-valorant-leagues';
import { SearchOverValorantLeagues, searchOverValorantLeagues } from './models/search-over-valorant-leagues';
import { Page, page } from '../common/page';

export interface GetValorantLeaguesParams {
  filter?: FilterOverValorantLeagues;
  range?: RangeOverValorantLeagues;
  sort?: any[];
  search?: SearchOverValorantLeagues;
  page?: Page;
  perPage?: number;
}
