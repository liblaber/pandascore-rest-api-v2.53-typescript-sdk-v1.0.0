import { z } from 'zod';
import { teamIdOrSlug, teamIdOrSlugRequest, teamIdOrSlugResponse } from './team-id-or-slug';
import { playerIdOrSlug, playerIdOrSlugRequest, playerIdOrSlugResponse } from './player-id-or-slug';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCodmwMatchesOpponentId = z.union([teamIdOrSlug, playerIdOrSlug]);

/**
 *
 * @typedef  {FilterOverCodmwMatchesOpponentId} filterOverCodmwMatchesOpponentId
 * @property {TeamIdOrSlug} - A team ID or slug
 * @property {PlayerIdOrSlug} - A player ID or slug
 */
export type FilterOverCodmwMatchesOpponentId = z.infer<typeof filterOverCodmwMatchesOpponentId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwMatchesOpponentIdResponse = z.union([
  teamIdOrSlugResponse,
  playerIdOrSlugResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwMatchesOpponentIdRequest = z.union([
  teamIdOrSlugRequest,
  playerIdOrSlugRequest,
]);
