import { z } from 'zod';
import {
  csgoStatsForPlayerByTournamentCurrentTeam,
  csgoStatsForPlayerByTournamentCurrentTeamRequest,
  csgoStatsForPlayerByTournamentCurrentTeamResponse,
} from './csgo-stats-for-player-by-tournament-current-team';
import { csgoGamePlayer, csgoGamePlayerRequest, csgoGamePlayerResponse } from '../../common/csgo-game-player';
import {
  csgoPlayerStatsByTournament,
  csgoPlayerStatsByTournamentRequest,
  csgoPlayerStatsByTournamentResponse,
} from './csgo-player-stats-by-tournament';
import { baseTeam, baseTeamRequest, baseTeamResponse } from '../../common/base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoStatsForPlayerByTournament: any = z.lazy(() => {
  return z.object({
    active: z.boolean(),
    age: z.number().gte(0).nullable(),
    birthday: z.string().nullable(),
    currentTeam: csgoStatsForPlayerByTournamentCurrentTeam.nullable(),
    currentVideogame: z.any().nullable(),
    firstName: z.string().nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    lastGames: z.array(csgoGamePlayer),
    lastName: z.string().nullable(),
    modifiedAt: z.string().min(1),
    name: z.string(),
    nationality: z.string().nullable(),
    role: z.string().nullable(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
    stats: csgoPlayerStatsByTournament,
    teams: z.array(baseTeam),
  });
});

/**
 * Player's aggregated statistics for a tournament
 * @typedef  {CsgoStatsForPlayerByTournament} csgoStatsForPlayerByTournament - Player's aggregated statistics for a tournament - Player's aggregated statistics for a tournament
 * @property {boolean} - Whether player is active
 * @property {number} - Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {string} - Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {CsgoStatsForPlayerByTournamentCurrentTeam}
 * @property {any}
 * @property {string} - First name of the player. `null` if unknown
 * @property {number} - ID of the player
 * @property {string} - URL to the photo of the player. `null` if not available.
 * @property {CsgoGamePlayer[]}
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string}
 * @property {string} - Professional name of the player
 * @property {string} - Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown
 * @property {string} - Role/position of the player. Field value varies depending on the video game.`null` if unknown. <br/>**Note**: role is only available for DotA 2, League of Legends, and Overwatch players. <br/>`null` for other video games.
 * @property {string} - Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.
 * @property {CsgoPlayerStatsByTournament} - Statistics for a tournament
 * @property {BaseTeam[]}
 */
export type CsgoStatsForPlayerByTournament = z.infer<typeof csgoStatsForPlayerByTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForPlayerByTournamentResponse: any = z.lazy(() => {
  return z
    .object({
      active: z.boolean(),
      age: z.number().gte(0).nullable(),
      birthday: z.string().nullable(),
      current_team: csgoStatsForPlayerByTournamentCurrentTeamResponse.nullable(),
      current_videogame: z.any().nullable(),
      first_name: z.string().nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      last_games: z.array(csgoGamePlayerResponse),
      last_name: z.string().nullable(),
      modified_at: z.string().min(1),
      name: z.string(),
      nationality: z.string().nullable(),
      role: z.string().nullable(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
      stats: csgoPlayerStatsByTournamentResponse,
      teams: z.array(baseTeamResponse),
    })
    .transform((data) => ({
      active: data['active'],
      age: data['age'],
      birthday: data['birthday'],
      currentTeam: data['current_team'],
      currentVideogame: data['current_videogame'],
      firstName: data['first_name'],
      id: data['id'],
      imageUrl: data['image_url'],
      lastGames: data['last_games'],
      lastName: data['last_name'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      nationality: data['nationality'],
      role: data['role'],
      slug: data['slug'],
      stats: data['stats'],
      teams: data['teams'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForPlayerByTournamentRequest: any = z.lazy(() => {
  return z
    .object({
      active: z.boolean().nullish(),
      age: z.number().nullish(),
      birthday: z.string().nullish(),
      currentTeam: csgoStatsForPlayerByTournamentCurrentTeamRequest.nullish(),
      currentVideogame: z.any().nullish(),
      firstName: z.string().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      lastGames: z.array(csgoGamePlayerRequest).nullish(),
      lastName: z.string().nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      nationality: z.string().nullish(),
      role: z.string().nullish(),
      slug: z.string().nullish(),
      stats: csgoPlayerStatsByTournamentRequest.nullish(),
      teams: z.array(baseTeamRequest).nullish(),
    })
    .transform((data) => ({
      active: data['active'],
      age: data['age'],
      birthday: data['birthday'],
      current_team: data['currentTeam'],
      current_videogame: data['currentVideogame'],
      first_name: data['firstName'],
      id: data['id'],
      image_url: data['imageUrl'],
      last_games: data['lastGames'],
      last_name: data['lastName'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      nationality: data['nationality'],
      role: data['role'],
      slug: data['slug'],
      stats: data['stats'],
      teams: data['teams'],
    }));
});