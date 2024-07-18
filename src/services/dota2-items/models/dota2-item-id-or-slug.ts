import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2ItemIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * An item ID or slug
 * @typedef  {Dota2ItemIdOrSlug} dota2ItemIdOrSlug - An item ID or slug - An item ID or slug
 * @property {number}
 * @property {string}
 */
export type Dota2ItemIdOrSlug = z.infer<typeof dota2ItemIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2ItemIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2ItemIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});