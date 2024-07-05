import { z } from 'zod';
import { teamIdOrSlug, teamIdOrSlugRequest, teamIdOrSlugResponse } from './team-id-or-slug';
import { playerIdOrSlug, playerIdOrSlugRequest, playerIdOrSlugResponse } from './player-id-or-slug';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverRlMatchesOpponentId = z.union([teamIdOrSlug, playerIdOrSlug]);

/**
 *
 * @typedef  {FilterOverRlMatchesOpponentId} filterOverRlMatchesOpponentId
 * @property {TeamIdOrSlug} - A team ID or slug
 * @property {PlayerIdOrSlug} - A player ID or slug
 */
export type FilterOverRlMatchesOpponentId = z.infer<typeof filterOverRlMatchesOpponentId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverRlMatchesOpponentIdResponse = z.union([
  teamIdOrSlugResponse,
  playerIdOrSlugResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverRlMatchesOpponentIdRequest = z.union([
  teamIdOrSlugRequest,
  playerIdOrSlugRequest,
]);
