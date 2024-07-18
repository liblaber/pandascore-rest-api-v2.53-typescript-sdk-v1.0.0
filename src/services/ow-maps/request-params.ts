import { FilterOverOwMaps, filterOverOwMaps } from './models/filter-over-ow-maps';
import { RangeOverOwMaps, rangeOverOwMaps } from './models/range-over-ow-maps';
import { SearchOverOwMaps, searchOverOwMaps } from './models/search-over-ow-maps';
import { Page, page } from '../common/page';

export interface GetOwMapsParams {
  filter?: FilterOverOwMaps;
  range?: RangeOverOwMaps;
  sort?: any[];
  search?: SearchOverOwMaps;
  page?: Page;
  perPage?: number;
}