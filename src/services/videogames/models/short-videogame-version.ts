import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const shortVideogameVersion: any = z.lazy(() => {
  return z.object({
    current: z.boolean(),
    name: z.string().regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/),
  });
});

/**
 *
 * @typedef  {ShortVideogameVersion} shortVideogameVersion
 * @property {boolean} - Whether this videogame version is current
 * @property {string}
 */
export type ShortVideogameVersion = z.infer<typeof shortVideogameVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const shortVideogameVersionResponse: any = z.lazy(() => {
  return z
    .object({
      current: z.boolean(),
      name: z.string().regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/),
    })
    .transform((data) => ({
      current: data['current'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const shortVideogameVersionRequest: any = z.lazy(() => {
  return z.object({ current: z.boolean().nullish(), name: z.string().nullish() }).transform((data) => ({
    current: data['current'],
    name: data['name'],
  }));
});
