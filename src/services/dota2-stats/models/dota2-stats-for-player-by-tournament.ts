import { z } from 'zod';
import {
  dota2StatsForPlayerByTournamentCurrentTeam,
  dota2StatsForPlayerByTournamentCurrentTeamRequest,
  dota2StatsForPlayerByTournamentCurrentTeamResponse,
} from './dota2-stats-for-player-by-tournament-current-team';
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
  dota2PlayerByTournamentStat,
  dota2PlayerByTournamentStatRequest,
  dota2PlayerByTournamentStatResponse,
} from './dota2-player-by-tournament-stat';
import { baseTeam, baseTeamRequest, baseTeamResponse } from '../../common/base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2StatsForPlayerByTournament = z.object({
  active: z.boolean(),
  age: z.number().gte(0),
  birthday: z.string(),
  currentTeam: dota2StatsForPlayerByTournamentCurrentTeam,
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
  stats: dota2PlayerByTournamentStat,
  teams: z.array(baseTeam),
});

/**
 * Player's aggregated statistics for a tournament
 * @typedef  {Dota2StatsForPlayerByTournament} dota2StatsForPlayerByTournament - Player's aggregated statistics for a tournament - Player's aggregated statistics for a tournament
 * @property {boolean} - Whether player is active
 * @property {number} - Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {string} - Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {Dota2StatsForPlayerByTournamentCurrentTeam}
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
 * @property {Dota2PlayerByTournamentStat} - Player's statistics for a tournament
 * @property {BaseTeam[]}
 */
export type Dota2StatsForPlayerByTournament = z.infer<typeof dota2StatsForPlayerByTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForPlayerByTournamentResponse = z
  .object({
    active: z.boolean(),
    age: z.number().gte(0),
    birthday: z.string(),
    current_team: dota2StatsForPlayerByTournamentCurrentTeamResponse,
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
    stats: dota2PlayerByTournamentStatResponse,
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
export const dota2StatsForPlayerByTournamentRequest = z
  .object({
    active: z.boolean().nullish(),
    age: z.number().nullish(),
    birthday: z.string().nullish(),
    currentTeam: dota2StatsForPlayerByTournamentCurrentTeamRequest.nullish(),
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
    stats: dota2PlayerByTournamentStatRequest.nullish(),
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
