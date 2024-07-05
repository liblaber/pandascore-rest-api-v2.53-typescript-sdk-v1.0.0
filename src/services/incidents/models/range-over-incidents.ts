import { z } from 'zod';
import { incidentId, incidentIdRequest, incidentIdResponse } from '../../common/incident-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverIncidents = z.object({
  id: z.array(incidentId).min(2).max(2).optional(),
  modifiedAt: z.array(z.string()).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverIncidents} rangeOverIncidents
 * @property {IncidentId[]}
 * @property {string[]}
 */
export type RangeOverIncidents = z.infer<typeof rangeOverIncidents>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverIncidentsResponse = z
  .object({
    id: z.array(incidentIdResponse).min(2).max(2).optional(),
    modified_at: z.array(z.string()).min(2).max(2).optional(),
  })
  .transform((data) => ({
    id: data['id'],
    modifiedAt: data['modified_at'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverIncidentsRequest = z
  .object({ id: z.array(incidentIdRequest).nullish(), modifiedAt: z.array(z.string()).nullish() })
  .transform((data) => ({
    id: data['id'],
    modified_at: data['modifiedAt'],
  }));
