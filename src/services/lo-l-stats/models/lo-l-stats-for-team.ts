import { z } from 'zod';
import { loLTeamLastGame, loLTeamLastGameRequest, loLTeamLastGameResponse } from '../../common/lo-l-team-last-game';
import { loLBannedChampion, loLBannedChampionRequest, loLBannedChampionResponse } from './lo-l-banned-champion';
import { loLPickedChampion, loLPickedChampionRequest, loLPickedChampionResponse } from './lo-l-picked-champion';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';
import { loLTeamBySerieStat, loLTeamBySerieStatRequest, loLTeamBySerieStatResponse } from './lo-l-team-by-serie-stat';
import { loLTotalTeamStat, loLTotalTeamStatRequest, loLTotalTeamStatResponse } from './lo-l-total-team-stat';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLStatsForTeam: any = z.lazy(() => {
  return z.object({
    acronym: z.string().nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    lastGames: z.array(loLTeamLastGame),
    location: z.string().nullable(),
    modifiedAt: z.string().min(1),
    mostBanned: z.array(loLBannedChampion),
    mostBannedAgainst: z.array(loLBannedChampion),
    mostPicked: z.array(loLPickedChampion),
    name: z.string(),
    players: z.array(basePlayer),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
    stats: z.array(loLTeamBySerieStat),
    totalStats: loLTotalTeamStat,
  });
});

/**
 * Aggregated statistics for a team grouped by serie
 * @typedef  {LoLStatsForTeam} loLStatsForTeam - Aggregated statistics for a team grouped by serie - Aggregated statistics for a team grouped by serie
 * @property {string}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {LoLTeamLastGame[]}
 * @property {string} - The team's organization location
 * @property {string}
 * @property {LoLBannedChampion[]}
 * @property {LoLBannedChampion[]}
 * @property {LoLPickedChampion[]}
 * @property {string} - The name of the team.
 * @property {BasePlayer[]}
 * @property {string}
 * @property {LoLTeamBySerieStat[]}
 * @property {LoLTotalTeamStat} - Total Team's statistics
 */
export type LoLStatsForTeam = z.infer<typeof loLStatsForTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLStatsForTeamResponse: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      last_games: z.array(loLTeamLastGameResponse),
      location: z.string().nullable(),
      modified_at: z.string().min(1),
      most_banned: z.array(loLBannedChampionResponse),
      most_banned_against: z.array(loLBannedChampionResponse),
      most_picked: z.array(loLPickedChampionResponse),
      name: z.string(),
      players: z.array(basePlayerResponse),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
      stats: z.array(loLTeamBySerieStatResponse),
      total_stats: loLTotalTeamStatResponse,
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      imageUrl: data['image_url'],
      lastGames: data['last_games'],
      location: data['location'],
      modifiedAt: data['modified_at'],
      mostBanned: data['most_banned'],
      mostBannedAgainst: data['most_banned_against'],
      mostPicked: data['most_picked'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
      stats: data['stats'],
      totalStats: data['total_stats'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLStatsForTeamRequest: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      lastGames: z.array(loLTeamLastGameRequest).nullish(),
      location: z.string().nullish(),
      modifiedAt: z.string().nullish(),
      mostBanned: z.array(loLBannedChampionRequest).nullish(),
      mostBannedAgainst: z.array(loLBannedChampionRequest).nullish(),
      mostPicked: z.array(loLPickedChampionRequest).nullish(),
      name: z.string().nullish(),
      players: z.array(basePlayerRequest).nullish(),
      slug: z.string().nullish(),
      stats: z.array(loLTeamBySerieStatRequest).nullish(),
      totalStats: loLTotalTeamStatRequest.nullish(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      image_url: data['imageUrl'],
      last_games: data['lastGames'],
      location: data['location'],
      modified_at: data['modifiedAt'],
      most_banned: data['mostBanned'],
      most_banned_against: data['mostBannedAgainst'],
      most_picked: data['mostPicked'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
      stats: data['stats'],
      total_stats: data['totalStats'],
    }));
});