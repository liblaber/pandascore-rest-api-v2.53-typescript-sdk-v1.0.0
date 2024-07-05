import { z } from 'zod';
import {
  owPlayerAverages,
  owPlayerAveragesRequest,
  owPlayerAveragesResponse,
} from '../../common/ow-player-averages';
import {
  owPlayer10MinAverages,
  owPlayer10MinAveragesRequest,
  owPlayer10MinAveragesResponse,
} from '../../common/ow-player10-min-averages';
import {
  owPlayerGameAverages,
  owPlayerGameAveragesRequest,
  owPlayerGameAveragesResponse,
} from '../../common/ow-player-game-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';
import {
  owPlayerTotals,
  owPlayerTotalsRequest,
  owPlayerTotalsResponse,
} from '../../common/ow-player-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerStatsBySerie = z.object({
  averages: owPlayerAverages,
  gamesCount: z.number().gte(0),
  per10MinutesAverages: owPlayer10MinAverages,
  perGameAverages: owPlayerGameAverages,
  serie: serie,
  totals: owPlayerTotals,
});

/**
 * Player's statistics for a serie
 * @typedef  {OwPlayerStatsBySerie} owPlayerStatsBySerie - Player's statistics for a serie - Player's statistics for a serie
 * @property {OwPlayerAverages}
 * @property {number} - Number of games
 * @property {OwPlayer10MinAverages}
 * @property {OwPlayerGameAverages}
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {OwPlayerTotals}
 */
export type OwPlayerStatsBySerie = z.infer<typeof owPlayerStatsBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsBySerieResponse = z
  .object({
    averages: owPlayerAveragesResponse,
    games_count: z.number().gte(0),
    per_10_minutes_averages: owPlayer10MinAveragesResponse,
    per_game_averages: owPlayerGameAveragesResponse,
    serie: serieResponse,
    totals: owPlayerTotalsResponse,
  })
  .transform((data) => ({
    averages: data['averages'],
    gamesCount: data['games_count'],
    per10MinutesAverages: data['per_10_minutes_averages'],
    perGameAverages: data['per_game_averages'],
    serie: data['serie'],
    totals: data['totals'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsBySerieRequest = z
  .object({
    averages: owPlayerAveragesRequest.nullish(),
    gamesCount: z.number().nullish(),
    per10MinutesAverages: owPlayer10MinAveragesRequest.nullish(),
    perGameAverages: owPlayerGameAveragesRequest.nullish(),
    serie: serieRequest.nullish(),
    totals: owPlayerTotalsRequest.nullish(),
  })
  .transform((data) => ({
    averages: data['averages'],
    games_count: data['gamesCount'],
    per_10_minutes_averages: data['per10MinutesAverages'],
    per_game_averages: data['perGameAverages'],
    serie: data['serie'],
    totals: data['totals'],
  }));
