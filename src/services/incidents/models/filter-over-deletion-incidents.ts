import { z } from 'zod';
import { incidentId, incidentIdRequest, incidentIdResponse } from './incident-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDeletionIncidents: any = z.lazy(() => {
  return z.object({
    id: z.array(incidentId).min(1).optional(),
    modifiedAt: z.array(z.string()).min(1).optional(),
  });
});

/**
 *
 * @typedef  {FilterOverDeletionIncidents} filterOverDeletionIncidents
 * @property {IncidentId[]}
 * @property {string[]}
 */
export type FilterOverDeletionIncidents = z.infer<typeof filterOverDeletionIncidents>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDeletionIncidentsResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(incidentIdResponse).min(1).optional(),
      modified_at: z.array(z.string()).min(1).optional(),
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
export const filterOverDeletionIncidentsRequest: any = z.lazy(() => {
  return z
    .object({ id: z.array(incidentIdRequest).nullish(), modifiedAt: z.array(z.string()).nullish() })
    .transform((data) => ({
      id: data['id'],
      modified_at: data['modifiedAt'],
    }));
});