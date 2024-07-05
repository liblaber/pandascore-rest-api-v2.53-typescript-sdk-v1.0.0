import { z } from 'zod';
import {
  incidentDeletionReason,
  incidentDeletionReasonRequest,
  incidentDeletionReasonResponse,
} from './incident-deletion-reason';
import { videogameId } from './videogame-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deletionObject = z.object({
  deletedAt: z.string().min(1),
  reason: incidentDeletionReason,
  videogameId: videogameId,
});

/**
 *
 * @typedef  {DeletionObject} deletionObject
 * @property {string}
 * @property {IncidentDeletionReason}
 * @property {VideogameId} - A videogame ID
 */
export type DeletionObject = z.infer<typeof deletionObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deletionObjectResponse = z
  .object({
    deleted_at: z.string().min(1),
    reason: incidentDeletionReasonResponse,
    videogame_id: videogameId,
  })
  .transform((data) => ({
    deletedAt: data['deleted_at'],
    reason: data['reason'],
    videogameId: data['videogame_id'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deletionObjectRequest = z
  .object({
    deletedAt: z.string().nullish(),
    reason: incidentDeletionReasonRequest.nullish(),
    videogameId: videogameId.nullish(),
  })
  .transform((data) => ({
    deleted_at: data['deletedAt'],
    reason: data['reason'],
    videogame_id: data['videogameId'],
  }));
