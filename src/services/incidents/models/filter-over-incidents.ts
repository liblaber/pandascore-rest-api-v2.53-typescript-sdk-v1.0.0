import { z } from 'zod';
import { incidentId, incidentIdRequest, incidentIdResponse } from './incident-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverIncidents: any = z.lazy(() => {
  return z.object({
    id: z.array(incidentId).min(1).optional(),
    modifiedAt: z.array(z.string()).min(1).optional(),
    opponentsFilled: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {FilterOverIncidents} filterOverIncidents
 * @property {IncidentId[]}
 * @property {string[]}
 * @property {boolean} - Whether a match has opponents filled i.e. opponents are not TBD.
 */
export type FilterOverIncidents = z.infer<typeof filterOverIncidents>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverIncidentsResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(incidentIdResponse).min(1).optional(),
      modified_at: z.array(z.string()).min(1).optional(),
      opponents_filled: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      modifiedAt: data['modified_at'],
      opponentsFilled: data['opponents_filled'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverIncidentsRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.array(incidentIdRequest).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      opponentsFilled: z.boolean().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      modified_at: data['modifiedAt'],
      opponents_filled: data['opponentsFilled'],
    }));
});
