import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const serieIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A serie ID or slug
 * @typedef  {SerieIdOrSlug} serieIdOrSlug - A serie ID or slug - A serie ID or slug
 * @property {number}
 * @property {string}
 */
export type SerieIdOrSlug = z.infer<typeof serieIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const serieIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const serieIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});