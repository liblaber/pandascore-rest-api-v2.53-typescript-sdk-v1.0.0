import { z } from 'zod';
import { loLMatchPlayerRole } from './lo-l-match-player-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatchPlayer: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    firstName: z.string().nullable(),
    imageUrl: z.string().nullable(),
    kills: z.number().gte(0).nullable(),
    lastName: z.string().nullable(),
    name: z.string(),
    nationality: z.string().nullable(),
    numberOfGames: z.number().gte(0),
    playerId: z.number().gte(1),
    role: loLMatchPlayerRole.nullable(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
  });
});

/**
 * Player's data for a LoL Match
 * @typedef  {LoLMatchPlayer} loLMatchPlayer - Player's data for a LoL Match - Player's data for a LoL Match
 * @property {number}
 * @property {number}
 * @property {string} - First name of the player. `null` if unknown
 * @property {string} - URL to the photo of the player. `null` if not available.
 * @property {number}
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string} - Professional name of the player
 * @property {string} - Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown
 * @property {number} - Number of games
 * @property {number} - ID of the player
 * @property {LoLMatchPlayerRole}
 * @property {string} - Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.
 */
export type LoLMatchPlayer = z.infer<typeof loLMatchPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchPlayerResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      first_name: z.string().nullable(),
      image_url: z.string().nullable(),
      kills: z.number().gte(0).nullable(),
      last_name: z.string().nullable(),
      name: z.string(),
      nationality: z.string().nullable(),
      number_of_games: z.number().gte(0),
      player_id: z.number().gte(1),
      role: loLMatchPlayerRole.nullable(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      firstName: data['first_name'],
      imageUrl: data['image_url'],
      kills: data['kills'],
      lastName: data['last_name'],
      name: data['name'],
      nationality: data['nationality'],
      numberOfGames: data['number_of_games'],
      playerId: data['player_id'],
      role: data['role'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchPlayerRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      deaths: z.number().nullish(),
      firstName: z.string().nullish(),
      imageUrl: z.string().nullish(),
      kills: z.number().nullish(),
      lastName: z.string().nullish(),
      name: z.string().nullish(),
      nationality: z.string().nullish(),
      numberOfGames: z.number().nullish(),
      playerId: z.number().nullish(),
      role: loLMatchPlayerRole.nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      first_name: data['firstName'],
      image_url: data['imageUrl'],
      kills: data['kills'],
      last_name: data['lastName'],
      name: data['name'],
      nationality: data['nationality'],
      number_of_games: data['numberOfGames'],
      player_id: data['playerId'],
      role: data['role'],
      slug: data['slug'],
    }));
});