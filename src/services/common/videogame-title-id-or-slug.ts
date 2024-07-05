import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogameTitleIdOrSlug = z.union([z.number(), z.string()]);

/**
 * A videogame title ID or slug
 * @typedef  {VideogameTitleIdOrSlug} videogameTitleIdOrSlug - A videogame title ID or slug - A videogame title ID or slug
 * @property {number}
 * @property {string}
 */
export type VideogameTitleIdOrSlug = z.infer<typeof videogameTitleIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameTitleIdOrSlugResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameTitleIdOrSlugRequest = z.union([z.number(), z.string()]);
