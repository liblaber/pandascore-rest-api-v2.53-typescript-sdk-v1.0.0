import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tournamentIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A tournament ID or slug
 * @typedef  {TournamentIdOrSlug} tournamentIdOrSlug - A tournament ID or slug - A tournament ID or slug
 * @property {number}
 * @property {string}
 */
export type TournamentIdOrSlug = z.infer<typeof tournamentIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});