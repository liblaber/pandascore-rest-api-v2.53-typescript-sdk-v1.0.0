import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const leagueIdOrSlug = z.union([z.number(), z.string()]);

/**
 * A league ID or slug
 * @typedef  {LeagueIdOrSlug} leagueIdOrSlug - A league ID or slug - A league ID or slug
 * @property {number}
 * @property {string}
 */
export type LeagueIdOrSlug = z.infer<typeof leagueIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const leagueIdOrSlugResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const leagueIdOrSlugRequest = z.union([z.number(), z.string()]);
