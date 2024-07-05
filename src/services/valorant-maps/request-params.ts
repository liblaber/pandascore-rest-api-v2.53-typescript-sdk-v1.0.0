import {
  FilterOverValorantMaps,
  Page,
  RangeOverValorantMaps,
  SearchOverValorantMaps,
  filterOverValorantMaps,
  page,
  rangeOverValorantMaps,
  searchOverValorantMaps,
} from '../common';

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
