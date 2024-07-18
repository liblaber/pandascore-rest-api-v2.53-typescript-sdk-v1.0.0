import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatchVideogameVersion: any = z.lazy(() => {
  return z.object({
    current: z.boolean(),
    name: z.string().regex(/^[0-9]+\.[0-9]+(\.[0-9]+)?$/),
  });
});

/**
 *
 * @typedef  {LoLMatchVideogameVersion} loLMatchVideogameVersion
 * @property {boolean} - Whether this videogame version is current
 * @property {string}
 */
export type LoLMatchVideogameVersion = z.infer<typeof loLMatchVideogameVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchVideogameVersionResponse: any = z.lazy(() => {
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
export const loLMatchVideogameVersionRequest: any = z.lazy(() => {
  return z.object({ current: z.boolean().nullish(), name: z.string().nullish() }).transform((data) => ({
    current: data['current'],
    name: data['name'],
  }));
});