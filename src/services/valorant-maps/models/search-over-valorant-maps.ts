import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverValorantMaps: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  });
});

/**
 *
 * @typedef  {SearchOverValorantMaps} searchOverValorantMaps
 * @property {string} - Name of the map
 * @property {string} - Human-readable identifier of the map
 */
export type SearchOverValorantMaps = z.infer<typeof searchOverValorantMaps>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantMapsResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
    })
    .transform((data) => ({
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantMapsRequest: any = z.lazy(() => {
  return z.object({ name: z.string().nullish(), slug: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    slug: data['slug'],
  }));
});
