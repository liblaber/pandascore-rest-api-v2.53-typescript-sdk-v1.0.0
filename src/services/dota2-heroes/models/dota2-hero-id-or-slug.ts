import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2HeroIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A hero ID or slug
 * @typedef  {Dota2HeroIdOrSlug} dota2HeroIdOrSlug - A hero ID or slug - A hero ID or slug
 * @property {number}
 * @property {string}
 */
export type Dota2HeroIdOrSlug = z.infer<typeof dota2HeroIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2HeroIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2HeroIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
