import { z } from 'zod';
import {
  nonDeletionIncident,
  nonDeletionIncidentRequest,
  nonDeletionIncidentResponse,
} from './non-deletion-incident';
import {
  deletionIncident,
  deletionIncidentRequest,
  deletionIncidentResponse,
} from './deletion-incident';

/**
 * The shape of the model inside the application code - what the users use
 */
export const incident = z.union([nonDeletionIncident, deletionIncident]);

/**
 *
 * @typedef  {Incident} incident
 * @property {NonDeletionIncident}
 * @property {DeletionIncident}
 */
export type Incident = z.infer<typeof incident>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentResponse = z.union([nonDeletionIncidentResponse, deletionIncidentResponse]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentRequest = z.union([nonDeletionIncidentRequest, deletionIncidentRequest]);
