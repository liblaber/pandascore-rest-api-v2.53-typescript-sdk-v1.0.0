import { z } from 'zod';
import { deletionIncidentChangeType } from './deletion-incident-change-type';
import { incidentId, incidentIdRequest, incidentIdResponse } from './incident-id';
import { deletionObject, deletionObjectRequest, deletionObjectResponse } from './deletion-object';
import { incidentType } from './incident-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deletionIncident: any = z.lazy(() => {
  return z.object({
    changeType: deletionIncidentChangeType,
    id: incidentId,
    modifiedAt: z.string().min(1),
    object: deletionObject,
    type: incidentType,
  });
});

/**
 *
 * @typedef  {DeletionIncident} deletionIncident
 * @property {DeletionIncidentChangeType}
 * @property {IncidentId} - An incident ID
 * @property {string}
 * @property {DeletionObject}
 * @property {IncidentType}
 */
export type DeletionIncident = z.infer<typeof deletionIncident>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deletionIncidentResponse: any = z.lazy(() => {
  return z
    .object({
      change_type: deletionIncidentChangeType,
      id: incidentIdResponse,
      modified_at: z.string().min(1),
      object: deletionObjectResponse,
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
export const deletionIncidentRequest: any = z.lazy(() => {
  return z
    .object({
      changeType: deletionIncidentChangeType.nullish(),
      id: incidentIdRequest.nullish(),
      modifiedAt: z.string().nullish(),
      object: deletionObjectRequest.nullish(),
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
