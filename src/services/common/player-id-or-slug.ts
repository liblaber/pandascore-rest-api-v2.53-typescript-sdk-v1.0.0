import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const playerIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A player ID or slug
 * @typedef  {PlayerIdOrSlug} playerIdOrSlug - A player ID or slug - A player ID or slug
 * @property {number}
 * @property {string}
 */
export type PlayerIdOrSlug = z.infer<typeof playerIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const playerIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const playerIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
