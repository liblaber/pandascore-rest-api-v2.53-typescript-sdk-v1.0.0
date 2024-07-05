import { z } from 'zod';
import { incidentDeletionReasonDeleted } from './incident-deletion-reason-deleted';

/**
 * The shape of the model inside the application code - what the users use
 */
export const incidentDeletionReason = z.union([
  z.string(),
  z.string(),
  incidentDeletionReasonDeleted,
]);

/**
 *
 * @typedef  {IncidentDeletionReason} incidentDeletionReason
 * @property {string}
 * @property {string}
 * @property {IncidentDeletionReasonDeleted} - The entity no longer exists.
 */
export type IncidentDeletionReason = z.infer<typeof incidentDeletionReason>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentDeletionReasonResponse = z.union([
  z.string(),
  z.string(),
  incidentDeletionReasonDeleted,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentDeletionReasonRequest = z.union([
  z.string(),
  z.string(),
  incidentDeletionReasonDeleted,
]);
