import { z } from 'zod';
import { videogameId } from './videogame-id';
import { videogameSlug } from './videogame-slug';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogameIdOrSlug: any = z.lazy(() => {
  return z.union([videogameId, videogameSlug]);
});

/**
 * A videogame ID or slug
 * @typedef  {VideogameIdOrSlug} videogameIdOrSlug - A videogame ID or slug - A videogame ID or slug
 * @property {VideogameId} - A videogame ID
 * @property {VideogameSlug} - A videogame slug
 */
export type VideogameIdOrSlug = z.infer<typeof videogameIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameIdOrSlugResponse: any = z.lazy(() => {
  return z.union([videogameId, videogameSlug]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameIdOrSlugRequest: any = z.lazy(() => {
  return z.union([videogameId, videogameSlug]);
});
