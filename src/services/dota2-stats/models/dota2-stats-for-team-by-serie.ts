import { z } from 'zod';
import {
  baseDota2Game,
  baseDota2GameRequest,
  baseDota2GameResponse,
} from '../../common/base-dota2-game';
import {
  dota2BannedHero,
  dota2BannedHeroRequest,
  dota2BannedHeroResponse,
} from '../../common/dota2-banned-hero';
import {
  dota2PickedHero,
  dota2PickedHeroRequest,
  dota2PickedHeroResponse,
} from '../../common/dota2-picked-hero';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';
import {
  dota2TeamBySerieStat,
  dota2TeamBySerieStatRequest,
  dota2TeamBySerieStatResponse,
} from '../../common/dota2-team-by-serie-stat';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2StatsForTeamBySerie = z.object({
  acronym: z.string(),
  id: z.number().gte(1),
  imageUrl: z.string(),
  lastGames: z.array(baseDota2Game),
  location: z.string(),
  modifiedAt: z.string().min(1),
  mostBanned: z.array(dota2BannedHero),
  mostBannedAgainst: z.array(dota2BannedHero),
  mostPicked: z.array(dota2PickedHero),
  name: z.string(),
  players: z.array(basePlayer),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  stats: dota2TeamBySerieStat,
  videogame: z.any(),
});

/**
 * Team's aggregated statistics for a serie
 * @typedef  {Dota2StatsForTeamBySerie} dota2StatsForTeamBySerie - Team's aggregated statistics for a serie - Team's aggregated statistics for a serie
 * @property {string}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {BaseDota2Game[]}
 * @property {string} - The team's organization location
 * @property {string}
 * @property {Dota2BannedHero[]}
 * @property {Dota2BannedHero[]}
 * @property {Dota2PickedHero[]}
 * @property {string} - The name of the team.
 * @property {BasePlayer[]}
 * @property {string}
 * @property {Dota2TeamBySerieStat} - Team's statistics for a serie
 * @property {any}
 */
export type Dota2StatsForTeamBySerie = z.infer<typeof dota2StatsForTeamBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForTeamBySerieResponse = z
  .object({
    acronym: z.string(),
    id: z.number().gte(1),
    image_url: z.string(),
    last_games: z.array(baseDota2GameResponse),
    location: z.string(),
    modified_at: z.string().min(1),
    most_banned: z.array(dota2BannedHeroResponse),
    most_banned_against: z.array(dota2BannedHeroResponse),
    most_picked: z.array(dota2PickedHeroResponse),
    name: z.string(),
    players: z.array(basePlayerResponse),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    stats: dota2TeamBySerieStatResponse,
    videogame: z.any(),
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
    videogame: data['videogame'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForTeamBySerieRequest = z
  .object({
    acronym: z.string().nullish(),
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    lastGames: z.array(baseDota2GameRequest).nullish(),
    location: z.string().nullish(),
    modifiedAt: z.string().nullish(),
    mostBanned: z.array(dota2BannedHeroRequest).nullish(),
    mostBannedAgainst: z.array(dota2BannedHeroRequest).nullish(),
    mostPicked: z.array(dota2PickedHeroRequest).nullish(),
    name: z.string().nullish(),
    players: z.array(basePlayerRequest).nullish(),
    slug: z.string().nullish(),
    stats: dota2TeamBySerieStatRequest.nullish(),
    videogame: z.any().nullish(),
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
    videogame: data['videogame'],
  }));
