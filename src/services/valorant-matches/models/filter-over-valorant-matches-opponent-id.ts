// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { teamIdOrSlug, teamIdOrSlugRequest, teamIdOrSlugResponse } from '../../common/team-id-or-slug';
import { playerIdOrSlug, playerIdOrSlugRequest, playerIdOrSlugResponse } from '../../common/player-id-or-slug';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverValorantMatchesOpponentId = z.lazy(() => {
  return z.union([teamIdOrSlug, playerIdOrSlug]);
});

/**
 *
 * @typedef  {FilterOverValorantMatchesOpponentId} filterOverValorantMatchesOpponentId
 * @property {TeamIdOrSlug} - A team ID or slug
 * @property {PlayerIdOrSlug} - A player ID or slug
 */
export type FilterOverValorantMatchesOpponentId = z.infer<typeof filterOverValorantMatchesOpponentId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverValorantMatchesOpponentIdResponse = z.lazy(() => {
  return z.union([teamIdOrSlugResponse, playerIdOrSlugResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverValorantMatchesOpponentIdRequest = z.lazy(() => {
  return z.union([teamIdOrSlugRequest, playerIdOrSlugRequest]);
});
