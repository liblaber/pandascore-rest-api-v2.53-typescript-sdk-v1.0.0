import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogameVersionOrAll: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 * Possible values are `latest`, `all` or a specific version number.
 * @typedef  {VideogameVersionOrAll} videogameVersionOrAll - Possible values are `latest`, `all` or a specific version number. - Possible values are `latest`, `all` or a specific version number.
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type VideogameVersionOrAll = z.infer<typeof videogameVersionOrAll>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameVersionOrAllResponse: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameVersionOrAllRequest: any = z.lazy(() => {
  return z.union([z.string(), z.any(), z.any()]);
});
