import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A match ID or slug
 * @typedef  {MatchIdOrSlug} matchIdOrSlug - A match ID or slug - A match ID or slug
 * @property {number}
 * @property {string}
 */
export type MatchIdOrSlug = z.infer<typeof matchIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});