import { z } from 'zod';
import { csgoStatsCounts, csgoStatsCountsRequest, csgoStatsCountsResponse } from './csgo-stats-counts';
import {
  csgoPlayerStatsGameAverages,
  csgoPlayerStatsGameAveragesRequest,
  csgoPlayerStatsGameAveragesResponse,
} from './csgo-player-stats-game-averages';
import {
  csgoStatsRoundAverages,
  csgoStatsRoundAveragesRequest,
  csgoStatsRoundAveragesResponse,
} from './csgo-stats-round-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoPlayerStatsBySerie: any = z.lazy(() => {
  return z.object({
    counts: csgoStatsCounts,
    perGameAverages: csgoPlayerStatsGameAverages,
    perRoundAverages: csgoStatsRoundAverages,
    serie: serie,
  });
});

/**
 * Statistics for a serie
 * @typedef  {CsgoPlayerStatsBySerie} csgoPlayerStatsBySerie - Statistics for a serie - Statistics for a serie
 * @property {CsgoStatsCounts}
 * @property {CsgoPlayerStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 * @property {Serie} - A serie, an occurrence of a league event
 */
export type CsgoPlayerStatsBySerie = z.infer<typeof csgoPlayerStatsBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsBySerieResponse: any = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsResponse,
      per_game_averages: csgoPlayerStatsGameAveragesResponse,
      per_round_averages: csgoStatsRoundAveragesResponse,
      serie: serieResponse,
    })
    .transform((data) => ({
      counts: data['counts'],
      perGameAverages: data['per_game_averages'],
      perRoundAverages: data['per_round_averages'],
      serie: data['serie'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsBySerieRequest: any = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsRequest.nullish(),
      perGameAverages: csgoPlayerStatsGameAveragesRequest.nullish(),
      perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
      serie: serieRequest.nullish(),
    })
    .transform((data) => ({
      counts: data['counts'],
      per_game_averages: data['perGameAverages'],
      per_round_averages: data['perRoundAverages'],
      serie: data['serie'],
    }));
});
