import { z } from 'zod';
import { baseCsgoGame, baseCsgoGameRequest, baseCsgoGameResponse } from './base-csgo-game';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';
import {
  csgoTeamStatsBySerie,
  csgoTeamStatsBySerieRequest,
  csgoTeamStatsBySerieResponse,
} from './csgo-team-stats-by-serie';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoStatsForTeamBySerie: any = z.lazy(() => {
  return z.object({
    acronym: z.string().nullable(),
    currentVideogame: z.any().nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    lastGames: z.array(baseCsgoGame),
    location: z.string().nullable(),
    modifiedAt: z.string().min(1),
    name: z.string(),
    players: z.array(basePlayer),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
    stats: csgoTeamStatsBySerie,
  });
});

/**
 * Team's aggregated statistics for a serie
 * @typedef  {CsgoStatsForTeamBySerie} csgoStatsForTeamBySerie - Team's aggregated statistics for a serie - Team's aggregated statistics for a serie
 * @property {string}
 * @property {any}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {BaseCsgoGame[]}
 * @property {string} - The team's organization location
 * @property {string}
 * @property {string} - The name of the team.
 * @property {BasePlayer[]}
 * @property {string}
 * @property {CsgoTeamStatsBySerie} - Statistics for a serie
 */
export type CsgoStatsForTeamBySerie = z.infer<typeof csgoStatsForTeamBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForTeamBySerieResponse: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullable(),
      current_videogame: z.any().nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      last_games: z.array(baseCsgoGameResponse),
      location: z.string().nullable(),
      modified_at: z.string().min(1),
      name: z.string(),
      players: z.array(basePlayerResponse),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
      stats: csgoTeamStatsBySerieResponse,
    })
    .transform((data) => ({
      acronym: data['acronym'],
      currentVideogame: data['current_videogame'],
      id: data['id'],
      imageUrl: data['image_url'],
      lastGames: data['last_games'],
      location: data['location'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
      stats: data['stats'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForTeamBySerieRequest: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullish(),
      currentVideogame: z.any().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      lastGames: z.array(baseCsgoGameRequest).nullish(),
      location: z.string().nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      players: z.array(basePlayerRequest).nullish(),
      slug: z.string().nullish(),
      stats: csgoTeamStatsBySerieRequest.nullish(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      current_videogame: data['currentVideogame'],
      id: data['id'],
      image_url: data['imageUrl'],
      last_games: data['lastGames'],
      location: data['location'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
      stats: data['stats'],
    }));
});
