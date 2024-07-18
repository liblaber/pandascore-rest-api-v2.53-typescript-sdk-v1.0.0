import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owHeroIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A hero ID or slug
 * @typedef  {OwHeroIdOrSlug} owHeroIdOrSlug - A hero ID or slug - A hero ID or slug
 * @property {number}
 * @property {string}
 */
export type OwHeroIdOrSlug = z.infer<typeof owHeroIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owHeroIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owHeroIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
