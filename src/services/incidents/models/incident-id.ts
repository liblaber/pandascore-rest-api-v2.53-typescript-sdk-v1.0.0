import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const incidentId: any = z.lazy(() => {
  return z.union([z.number(), z.number(), z.number(), z.number(), z.number(), z.number()]);
});

/**
 * An incident ID
 * @typedef  {IncidentId} incidentId - An incident ID - An incident ID
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type IncidentId = z.infer<typeof incidentId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentIdResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number(), z.number(), z.number(), z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentIdRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number(), z.number(), z.number(), z.number(), z.number()]);
});
