import { FilterOverCsgoMaps, filterOverCsgoMaps } from './models/filter-over-csgo-maps';
import { RangeOverCsgoMaps, rangeOverCsgoMaps } from './models/range-over-csgo-maps';
import { SearchOverCsgoMaps, searchOverCsgoMaps } from './models/search-over-csgo-maps';
import { Page, page } from '../common/page';

export interface GetCsgoMapsParams {
  filter?: FilterOverCsgoMaps;
  range?: RangeOverCsgoMaps;
  sort?: any[];
  search?: SearchOverCsgoMaps;
  page?: Page;
  perPage?: number;
}
