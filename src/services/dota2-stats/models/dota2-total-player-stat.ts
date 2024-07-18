import { z } from 'zod';
import { dota2PlayerAverages, dota2PlayerAveragesRequest, dota2PlayerAveragesResponse } from './dota2-player-averages';
import {
  dota2PlayerStatsTotals,
  dota2PlayerStatsTotalsRequest,
  dota2PlayerStatsTotalsResponse,
} from './dota2-player-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TotalPlayerStat: any = z.lazy(() => {
  return z.object({
    averages: dota2PlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    totals: dota2PlayerStatsTotals,
  });
});

/**
 * Total Player's statistics
 * @typedef  {Dota2TotalPlayerStat} dota2TotalPlayerStat - Total Player's statistics - Total Player's statistics
 * @property {Dota2PlayerAverages}
 * @property {number} - Number of games
 * @property {Dota2PlayerStatsTotals}
 */
export type Dota2TotalPlayerStat = z.infer<typeof dota2TotalPlayerStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TotalPlayerStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: dota2PlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      totals: dota2PlayerStatsTotalsResponse,
    })
    .transform((data) => ({
      averages: data['averages'],
      gamesCount: data['games_count'],
      totals: data['totals'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TotalPlayerStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: dota2PlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      totals: dota2PlayerStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      totals: data['totals'],
    }));
});
