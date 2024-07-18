import { z } from 'zod';
import { match, matchRequest, matchResponse } from '../../common/match';
import {
  valorantPlayerMatchStats,
  valorantPlayerMatchStatsRequest,
  valorantPlayerMatchStatsResponse,
} from './valorant-player-match-stats';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantStatsForPlayersByMatch: any = z.lazy(() => {
  return z.object({
    match: match,
    stats: z.array(valorantPlayerMatchStats),
  });
});

/**
 *
 * @typedef  {ValorantStatsForPlayersByMatch} valorantStatsForPlayersByMatch
 * @property {Match}
 * @property {ValorantPlayerMatchStats[]}
 */
export type ValorantStatsForPlayersByMatch = z.infer<typeof valorantStatsForPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantStatsForPlayersByMatchResponse: any = z.lazy(() => {
  return z
    .object({
      match: matchResponse,
      stats: z.array(valorantPlayerMatchStatsResponse),
    })
    .transform((data) => ({
      match: data['match'],
      stats: data['stats'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantStatsForPlayersByMatchRequest: any = z.lazy(() => {
  return z
    .object({ match: matchRequest.nullish(), stats: z.array(valorantPlayerMatchStatsRequest).nullish() })
    .transform((data) => ({
      match: data['match'],
      stats: data['stats'],
    }));
});
