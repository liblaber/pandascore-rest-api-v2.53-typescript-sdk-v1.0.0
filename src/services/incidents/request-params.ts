import {
  FilterOverAdditionIncidents,
  FilterOverChangeIncidents,
  FilterOverDeletionIncidents,
  FilterOverIncidents,
  RangeOverAdditionIncidents,
  RangeOverChangeIncidents,
  RangeOverDeletionIncidents,
  RangeOverIncidents,
  filterOverAdditionIncidents,
  filterOverChangeIncidents,
  filterOverDeletionIncidents,
  filterOverIncidents,
  rangeOverAdditionIncidents,
  rangeOverChangeIncidents,
  rangeOverDeletionIncidents,
  rangeOverIncidents,
} from './models';
import { Page, VideogameIdOrSlug, page, videogameIdOrSlug } from '../common';

export interface GetAdditionsParams {
  filter?: FilterOverAdditionIncidents;
  range?: RangeOverAdditionIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type_?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}

export interface GetChangesParams {
  filter?: FilterOverChangeIncidents;
  range?: RangeOverChangeIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type_?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}

export interface GetDeletionsParams {
  filter?: FilterOverDeletionIncidents;
  range?: RangeOverDeletionIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type_?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}

export interface GetIncidentsParams {
  filter?: FilterOverIncidents;
  range?: RangeOverIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type_?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}
