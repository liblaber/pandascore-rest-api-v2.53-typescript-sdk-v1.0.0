import { z } from 'zod';
import { csgoStatsCounts, csgoStatsCountsRequest, csgoStatsCountsResponse } from './csgo-stats-counts';
import { csgoTeamMapStats, csgoTeamMapStatsRequest, csgoTeamMapStatsResponse } from './csgo-team-map-stats';
import {
  csgoTeamStatsGameAverages,
  csgoTeamStatsGameAveragesRequest,
  csgoTeamStatsGameAveragesResponse,
} from './csgo-team-stats-game-averages';
import {
  csgoStatsRoundAverages,
  csgoStatsRoundAveragesRequest,
  csgoStatsRoundAveragesResponse,
} from './csgo-stats-round-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamStatsBySerie: any = z.lazy(() => {
  return z.object({
    counts: csgoStatsCounts,
    maps: z.array(csgoTeamMapStats),
    perGameAverages: csgoTeamStatsGameAverages,
    perRoundAverages: csgoStatsRoundAverages,
    serie: serie,
  });
});

/**
 * Statistics for a serie
 * @typedef  {CsgoTeamStatsBySerie} csgoTeamStatsBySerie - Statistics for a serie - Statistics for a serie
 * @property {CsgoStatsCounts}
 * @property {CsgoTeamMapStats[]}
 * @property {CsgoTeamStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 * @property {Serie} - A serie, an occurrence of a league event
 */
export type CsgoTeamStatsBySerie = z.infer<typeof csgoTeamStatsBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsBySerieResponse: any = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsResponse,
      maps: z.array(csgoTeamMapStatsResponse),
      per_game_averages: csgoTeamStatsGameAveragesResponse,
      per_round_averages: csgoStatsRoundAveragesResponse,
      serie: serieResponse,
    })
    .transform((data) => ({
      counts: data['counts'],
      maps: data['maps'],
      perGameAverages: data['per_game_averages'],
      perRoundAverages: data['per_round_averages'],
      serie: data['serie'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsBySerieRequest: any = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsRequest.nullish(),
      maps: z.array(csgoTeamMapStatsRequest).nullish(),
      perGameAverages: csgoTeamStatsGameAveragesRequest.nullish(),
      perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
      serie: serieRequest.nullish(),
    })
    .transform((data) => ({
      counts: data['counts'],
      maps: data['maps'],
      per_game_averages: data['perGameAverages'],
      per_round_averages: data['perRoundAverages'],
      serie: data['serie'],
    }));
});
