import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owMapIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A map ID or slug
 * @typedef  {OwMapIdOrSlug} owMapIdOrSlug - A map ID or slug - A map ID or slug
 * @property {number}
 * @property {string}
 */
export type OwMapIdOrSlug = z.infer<typeof owMapIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owMapIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owMapIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
