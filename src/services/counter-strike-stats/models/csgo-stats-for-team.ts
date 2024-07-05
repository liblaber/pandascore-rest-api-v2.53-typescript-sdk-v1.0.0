import { z } from 'zod';
import {
  baseCsgoGame,
  baseCsgoGameRequest,
  baseCsgoGameResponse,
} from '../../common/base-csgo-game';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';
import { csgoTeamStats, csgoTeamStatsRequest, csgoTeamStatsResponse } from './csgo-team-stats';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoStatsForTeam = z.object({
  acronym: z.string(),
  currentVideogame: z.any(),
  id: z.number().gte(1),
  imageUrl: z.string(),
  lastGames: z.array(baseCsgoGame),
  location: z.string(),
  modifiedAt: z.string().min(1),
  name: z.string(),
  players: z.array(basePlayer),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  stats: csgoTeamStats,
});

/**
 * Team's aggregated statistics
 * @typedef  {CsgoStatsForTeam} csgoStatsForTeam - Team's aggregated statistics - Team's aggregated statistics
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
 * @property {CsgoTeamStats} - Statistics for all matches
 */
export type CsgoStatsForTeam = z.infer<typeof csgoStatsForTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForTeamResponse = z
  .object({
    acronym: z.string(),
    current_videogame: z.any(),
    id: z.number().gte(1),
    image_url: z.string(),
    last_games: z.array(baseCsgoGameResponse),
    location: z.string(),
    modified_at: z.string().min(1),
    name: z.string(),
    players: z.array(basePlayerResponse),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    stats: csgoTeamStatsResponse,
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForTeamRequest = z
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
    stats: csgoTeamStatsRequest.nullish(),
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
