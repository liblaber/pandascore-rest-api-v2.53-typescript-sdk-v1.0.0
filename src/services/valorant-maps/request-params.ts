import { FilterOverValorantMaps, filterOverValorantMaps } from './models/filter-over-valorant-maps';
import { RangeOverValorantMaps, rangeOverValorantMaps } from './models/range-over-valorant-maps';
import { SearchOverValorantMaps, searchOverValorantMaps } from './models/search-over-valorant-maps';
import { Page, page } from '../common/page';

export interface GetValorantMapsParams {
  filter?: FilterOverValorantMaps;
  range?: RangeOverValorantMaps;
  sort?: any[];
  search?: SearchOverValorantMaps;
  page?: Page;
  perPage?: number;
}

export interface GetValorantVersionsAllMapsParams {
  filter?: FilterOverValorantMaps;
  range?: RangeOverValorantMaps;
  sort?: any[];
  search?: SearchOverValorantMaps;
  page?: Page;
  perPage?: number;
}

export interface GetValorantVersionsValorantVersionNameMapsParams {
  filter?: FilterOverValorantMaps;
  range?: RangeOverValorantMaps;
  sort?: any[];
  search?: SearchOverValorantMaps;
  page?: Page;
  perPage?: number;
}