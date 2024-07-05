import { z } from 'zod';
import {
  dota2TeamAverages,
  dota2TeamAveragesRequest,
  dota2TeamAveragesResponse,
} from '../../common/dota2-team-averages';
import {
  dota2TeamStatsTotals,
  dota2TeamStatsTotalsRequest,
  dota2TeamStatsTotalsResponse,
} from '../../common/dota2-team-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TotalTeamStat = z.object({
  averages: dota2TeamAverages,
  gamesCount: z.number().gte(0),
  totals: dota2TeamStatsTotals,
});

/**
 * Total Team's statistics
 * @typedef  {Dota2TotalTeamStat} dota2TotalTeamStat - Total Team's statistics - Total Team's statistics
 * @property {Dota2TeamAverages}
 * @property {number} - Number of games
 * @property {Dota2TeamStatsTotals}
 */
export type Dota2TotalTeamStat = z.infer<typeof dota2TotalTeamStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TotalTeamStatResponse = z
  .object({
    averages: dota2TeamAveragesResponse,
    games_count: z.number().gte(0),
    totals: dota2TeamStatsTotalsResponse,
  })
  .transform((data) => ({
    averages: data['averages'],
    gamesCount: data['games_count'],
    totals: data['totals'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TotalTeamStatRequest = z
  .object({
    averages: dota2TeamAveragesRequest.nullish(),
    gamesCount: z.number().nullish(),
    totals: dota2TeamStatsTotalsRequest.nullish(),
  })
  .transform((data) => ({
    averages: data['averages'],
    games_count: data['gamesCount'],
    totals: data['totals'],
  }));
