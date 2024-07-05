import { z } from 'zod';
import {
  dota2StatsForPlayerBySerieCurrentTeam,
  dota2StatsForPlayerBySerieCurrentTeamRequest,
  dota2StatsForPlayerBySerieCurrentTeamResponse,
} from './dota2-stats-for-player-by-serie-current-team';
import {
  dota2FavoriteHero,
  dota2FavoriteHeroRequest,
  dota2FavoriteHeroResponse,
} from '../../common/dota2-favorite-hero';
import {
  dota2GamePlayer,
  dota2GamePlayerRequest,
  dota2GamePlayerResponse,
} from '../../common/dota2-game-player';
import {
  dota2PlayerBySerieStat,
  dota2PlayerBySerieStatRequest,
  dota2PlayerBySerieStatResponse,
} from '../../common/dota2-player-by-serie-stat';
import { baseTeam, baseTeamRequest, baseTeamResponse } from '../../common/base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2StatsForPlayerBySerie = z.object({
  active: z.boolean(),
  age: z.number().gte(0),
  birthday: z.string(),
  currentTeam: dota2StatsForPlayerBySerieCurrentTeam,
  currentVideogame: z.any(),
  favoriteHeroes: z.array(dota2FavoriteHero),
  firstName: z.string(),
  id: z.number().gte(1),
  imageUrl: z.string(),
  lastGames: z.array(dota2GamePlayer),
  lastName: z.string(),
  modifiedAt: z.string().min(1),
  name: z.string(),
  nationality: z.string(),
  role: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  stats: dota2PlayerBySerieStat,
  teams: z.array(baseTeam),
});

/**
 * Player's aggregated statistics for a serie
 * @typedef  {Dota2StatsForPlayerBySerie} dota2StatsForPlayerBySerie - Player's aggregated statistics for a serie - Player's aggregated statistics for a serie
 * @property {boolean} - Whether player is active
 * @property {number} - Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {string} - Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {Dota2StatsForPlayerBySerieCurrentTeam}
 * @property {any}
 * @property {Dota2FavoriteHero[]}
 * @property {string} - First name of the player. `null` if unknown
 * @property {number} - ID of the player
 * @property {string} - URL to the photo of the player. `null` if not available.
 * @property {Dota2GamePlayer[]}
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string}
 * @property {string} - Professional name of the player
 * @property {string} - Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown
 * @property {string} - Role/position of the player. Field value varies depending on the video game.`null` if unknown. <br/>**Note**: role is only available for DotA 2, League of Legends, and Overwatch players. <br/>`null` for other video games.
 * @property {string} - Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.
 * @property {Dota2PlayerBySerieStat} - Player's statistics for a serie
 * @property {BaseTeam[]}
 */
export type Dota2StatsForPlayerBySerie = z.infer<typeof dota2StatsForPlayerBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForPlayerBySerieResponse = z
  .object({
    active: z.boolean(),
    age: z.number().gte(0),
    birthday: z.string(),
    current_team: dota2StatsForPlayerBySerieCurrentTeamResponse,
    current_videogame: z.any(),
    favorite_heroes: z.array(dota2FavoriteHeroResponse),
    first_name: z.string(),
    id: z.number().gte(1),
    image_url: z.string(),
    last_games: z.array(dota2GamePlayerResponse),
    last_name: z.string(),
    modified_at: z.string().min(1),
    name: z.string(),
    nationality: z.string(),
    role: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    stats: dota2PlayerBySerieStatResponse,
    teams: z.array(baseTeamResponse),
  })
  .transform((data) => ({
    active: data['active'],
    age: data['age'],
    birthday: data['birthday'],
    currentTeam: data['current_team'],
    currentVideogame: data['current_videogame'],
    favoriteHeroes: data['favorite_heroes'],
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForPlayerBySerieRequest = z
  .object({
    active: z.boolean().nullish(),
    age: z.number().nullish(),
    birthday: z.string().nullish(),
    currentTeam: dota2StatsForPlayerBySerieCurrentTeamRequest.nullish(),
    currentVideogame: z.any().nullish(),
    favoriteHeroes: z.array(dota2FavoriteHeroRequest).nullish(),
    firstName: z.string().nullish(),
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    lastGames: z.array(dota2GamePlayerRequest).nullish(),
    lastName: z.string().nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    nationality: z.string().nullish(),
    role: z.string().nullish(),
    slug: z.string().nullish(),
    stats: dota2PlayerBySerieStatRequest.nullish(),
    teams: z.array(baseTeamRequest).nullish(),
  })
  .transform((data) => ({
    active: data['active'],
    age: data['age'],
    birthday: data['birthday'],
    current_team: data['currentTeam'],
    current_videogame: data['currentVideogame'],
    favorite_heroes: data['favoriteHeroes'],
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
