import { FilterOverAdditionIncidents, filterOverAdditionIncidents } from './models/filter-over-addition-incidents';
import { RangeOverAdditionIncidents, rangeOverAdditionIncidents } from './models/range-over-addition-incidents';
import { Page, page } from '../common/page';
import { VideogameIdOrSlug, videogameIdOrSlug } from '../common/videogame-id-or-slug';
import { FilterOverChangeIncidents, filterOverChangeIncidents } from './models/filter-over-change-incidents';
import { RangeOverChangeIncidents, rangeOverChangeIncidents } from './models/range-over-change-incidents';
import { FilterOverDeletionIncidents, filterOverDeletionIncidents } from './models/filter-over-deletion-incidents';
import { RangeOverDeletionIncidents, rangeOverDeletionIncidents } from './models/range-over-deletion-incidents';
import { FilterOverIncidents, filterOverIncidents } from './models/filter-over-incidents';
import { RangeOverIncidents, rangeOverIncidents } from './models/range-over-incidents';

export interface GetAdditionsParams {
  filter?: FilterOverAdditionIncidents;
  range?: RangeOverAdditionIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}

export interface GetChangesParams {
  filter?: FilterOverChangeIncidents;
  range?: RangeOverChangeIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}

export interface GetDeletionsParams {
  filter?: FilterOverDeletionIncidents;
  range?: RangeOverDeletionIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}

export interface GetIncidentsParams {
  filter?: FilterOverIncidents;
  range?: RangeOverIncidents;
  sort?: any[];
  page?: Page;
  perPage?: number;
  type?: any[];
  since?: string;
  videogame?: VideogameIdOrSlug[];
}
