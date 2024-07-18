import { z } from 'zod';
import { baseTournamentTier } from './base-tournament-tier';
import {
  baseTournamentWinnerId,
  baseTournamentWinnerIdRequest,
  baseTournamentWinnerIdResponse,
} from './base-tournament-winner-id';
import { baseTournamentWinnerType } from './base-tournament-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseTournament: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    detailedStats: z.boolean(),
    endAt: z.string().min(1).nullable(),
    hasBracket: z.boolean(),
    id: z.number().gte(1),
    leagueId: z.number().gte(1),
    liveSupported: z.boolean(),
    modifiedAt: z.string().min(1),
    name: z.string(),
    prizepool: z.string().nullable(),
    serieId: z.number().gte(1),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    tier: baseTournamentTier.nullable(),
    winnerId: baseTournamentWinnerId,
    winnerType: baseTournamentWinnerType.nullable(),
  });
});

/**
 *
 * @typedef  {BaseTournament} baseTournament
 * @property {string}
 * @property {boolean} - Whether the tournament is expected to have detailed statistics available
 * @property {string}
 * @property {boolean} - Whether the tournament has a bracket
 * @property {number}
 * @property {number}
 * @property {boolean} - Whether live is supported
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {BaseTournamentTier} - The tier of the tournament, ranging from 'S' to 'Unranked'. Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'
 * @property {BaseTournamentWinnerId}
 * @property {BaseTournamentWinnerType}
 */
export type BaseTournament = z.infer<typeof baseTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseTournamentResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.string().min(1).nullable(),
      detailed_stats: z.boolean(),
      end_at: z.string().min(1).nullable(),
      has_bracket: z.boolean(),
      id: z.number().gte(1),
      league_id: z.number().gte(1),
      live_supported: z.boolean(),
      modified_at: z.string().min(1),
      name: z.string(),
      prizepool: z.string().nullable(),
      serie_id: z.number().gte(1),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
      tier: baseTournamentTier.nullable(),
      winner_id: baseTournamentWinnerIdResponse,
      winner_type: baseTournamentWinnerType.nullable(),
    })
    .transform((data) => ({
      beginAt: data['begin_at'],
      detailedStats: data['detailed_stats'],
      endAt: data['end_at'],
      hasBracket: data['has_bracket'],
      id: data['id'],
      leagueId: data['league_id'],
      liveSupported: data['live_supported'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      prizepool: data['prizepool'],
      serieId: data['serie_id'],
      slug: data['slug'],
      tier: data['tier'],
      winnerId: data['winner_id'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseTournamentRequest: any = z.lazy(() => {
  return z
    .object({
      beginAt: z.string().nullish(),
      detailedStats: z.boolean().nullish(),
      endAt: z.string().nullish(),
      hasBracket: z.boolean().nullish(),
      id: z.number().nullish(),
      leagueId: z.number().nullish(),
      liveSupported: z.boolean().nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      prizepool: z.string().nullish(),
      serieId: z.number().nullish(),
      slug: z.string().nullish(),
      tier: baseTournamentTier.nullish(),
      winnerId: baseTournamentWinnerIdRequest.nullish(),
      winnerType: baseTournamentWinnerType.nullish(),
    })
    .transform((data) => ({
      begin_at: data['beginAt'],
      detailed_stats: data['detailedStats'],
      end_at: data['endAt'],
      has_bracket: data['hasBracket'],
      id: data['id'],
      league_id: data['leagueId'],
      live_supported: data['liveSupported'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      prizepool: data['prizepool'],
      serie_id: data['serieId'],
      slug: data['slug'],
      tier: data['tier'],
      winner_id: data['winnerId'],
      winner_type: data['winnerType'],
    }));
});