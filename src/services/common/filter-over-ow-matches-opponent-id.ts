import { z } from 'zod';
import { teamIdOrSlug, teamIdOrSlugRequest, teamIdOrSlugResponse } from './team-id-or-slug';
import { playerIdOrSlug, playerIdOrSlugRequest, playerIdOrSlugResponse } from './player-id-or-slug';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverOwMatchesOpponentId = z.union([teamIdOrSlug, playerIdOrSlug]);

/**
 *
 * @typedef  {FilterOverOwMatchesOpponentId} filterOverOwMatchesOpponentId
 * @property {TeamIdOrSlug} - A team ID or slug
 * @property {PlayerIdOrSlug} - A player ID or slug
 */
export type FilterOverOwMatchesOpponentId = z.infer<typeof filterOverOwMatchesOpponentId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwMatchesOpponentIdResponse = z.union([
  teamIdOrSlugResponse,
  playerIdOrSlugResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwMatchesOpponentIdRequest = z.union([
  teamIdOrSlugRequest,
  playerIdOrSlugRequest,
]);
