import { z } from 'zod';
import { incidentChangeType } from './incident-change-type';
import { incidentId, incidentIdRequest, incidentIdResponse } from './incident-id';
import { incidentObject, incidentObjectRequest, incidentObjectResponse } from './incident-object';
import { incidentType } from './incident-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const nonDeletionIncident: any = z.lazy(() => {
  return z.object({
    changeType: incidentChangeType,
    id: incidentId,
    modifiedAt: z.string().min(1),
    object: incidentObject,
    type: incidentType,
  });
});

/**
 *
 * @typedef  {NonDeletionIncident} nonDeletionIncident
 * @property {IncidentChangeType}
 * @property {IncidentId} - An incident ID
 * @property {string}
 * @property {IncidentObject}
 * @property {IncidentType}
 */
export type NonDeletionIncident = z.infer<typeof nonDeletionIncident>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const nonDeletionIncidentResponse: any = z.lazy(() => {
  return z
    .object({
      change_type: incidentChangeType,
      id: incidentIdResponse,
      modified_at: z.string().min(1),
      object: incidentObjectResponse,
      type: incidentType,
    })
    .transform((data) => ({
      changeType: data['change_type'],
      id: data['id'],
      modifiedAt: data['modified_at'],
      object: data['object'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const nonDeletionIncidentRequest: any = z.lazy(() => {
  return z
    .object({
      changeType: incidentChangeType.nullish(),
      id: incidentIdRequest.nullish(),
      modifiedAt: z.string().nullish(),
      object: incidentObjectRequest.nullish(),
      type: incidentType.nullish(),
    })
    .transform((data) => ({
      change_type: data['changeType'],
      id: data['id'],
      modified_at: data['modifiedAt'],
      object: data['object'],
      type: data['type'],
    }));
});
