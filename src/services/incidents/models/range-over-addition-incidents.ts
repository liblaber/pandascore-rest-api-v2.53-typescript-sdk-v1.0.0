import { z } from 'zod';
import { incidentId, incidentIdRequest, incidentIdResponse } from './incident-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverAdditionIncidents: any = z.lazy(() => {
  return z.object({
    id: z.array(incidentId).min(2).max(2).optional(),
    modifiedAt: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverAdditionIncidents} rangeOverAdditionIncidents
 * @property {IncidentId[]}
 * @property {string[]}
 */
export type RangeOverAdditionIncidents = z.infer<typeof rangeOverAdditionIncidents>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverAdditionIncidentsResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(incidentIdResponse).min(2).max(2).optional(),
      modified_at: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      modifiedAt: data['modified_at'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverAdditionIncidentsRequest: any = z.lazy(() => {
  return z
    .object({ id: z.array(incidentIdRequest).nullish(), modifiedAt: z.array(z.string()).nullish() })
    .transform((data) => ({
      id: data['id'],
      modified_at: data['modifiedAt'],
    }));
});