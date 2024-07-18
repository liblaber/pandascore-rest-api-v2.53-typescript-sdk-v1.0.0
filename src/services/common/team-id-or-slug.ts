import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teamIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A team ID or slug
 * @typedef  {TeamIdOrSlug} teamIdOrSlug - A team ID or slug - A team ID or slug
 * @property {number}
 * @property {string}
 */
export type TeamIdOrSlug = z.infer<typeof teamIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});