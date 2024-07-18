import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoMatchVideogameVersion: any = z.lazy(() => {
  return z.object({
    current: z.boolean(),
    name: z.string().regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/),
  });
});

/**
 *
 * @typedef  {CsgoMatchVideogameVersion} csgoMatchVideogameVersion
 * @property {boolean} - Whether this videogame version is current
 * @property {string}
 */
export type CsgoMatchVideogameVersion = z.infer<typeof csgoMatchVideogameVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchVideogameVersionResponse: any = z.lazy(() => {
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
export const csgoMatchVideogameVersionRequest: any = z.lazy(() => {
  return z.object({ current: z.boolean().nullish(), name: z.string().nullish() }).transform((data) => ({
    current: data['current'],
    name: data['name'],
  }));
});
