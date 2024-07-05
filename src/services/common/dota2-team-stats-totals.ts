import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TeamStatsTotals = z.object({
  assists: z.number().gte(0),
  deaths: z.number().gte(0),
  direGamesLost: z.number().gte(0),
  direGamesWon: z.number().gte(0),
  gamesLost: z.number().gte(0),
  gamesPlayed: z.number().gte(0),
  gamesWon: z.number().gte(0),
  kills: z.number().gte(0),
  matchesDraw: z.number().gte(0),
  matchesLost: z.number().gte(0),
  matchesPlayed: z.number().gte(0),
  matchesWon: z.number().gte(0),
  observerWardsDestroyed: z.number().gte(0),
  observerWardsPlaced: z.number().gte(0),
  radiantGamesLost: z.number().gte(0),
  radiantGamesWon: z.number().gte(0),
  roshanKills: z.number().gte(0),
  sentryWardsDestroyed: z.number().gte(0),
  sentryWardsPlaced: z.number().gte(0),
  towerKills: z.number().gte(0),
});

/**
 *
 * @typedef  {Dota2TeamStatsTotals} dota2TeamStatsTotals
 * @property {number}
 * @property {number}
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - The total number of Roshans killed by the team
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type Dota2TeamStatsTotals = z.infer<typeof dota2TeamStatsTotals>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamStatsTotalsResponse = z
  .object({
    assists: z.number().gte(0),
    deaths: z.number().gte(0),
    dire_games_lost: z.number().gte(0),
    dire_games_won: z.number().gte(0),
    games_lost: z.number().gte(0),
    games_played: z.number().gte(0),
    games_won: z.number().gte(0),
    kills: z.number().gte(0),
    matches_draw: z.number().gte(0),
    matches_lost: z.number().gte(0),
    matches_played: z.number().gte(0),
    matches_won: z.number().gte(0),
    observer_wards_destroyed: z.number().gte(0),
    observer_wards_placed: z.number().gte(0),
    radiant_games_lost: z.number().gte(0),
    radiant_games_won: z.number().gte(0),
    roshan_kills: z.number().gte(0),
    sentry_wards_destroyed: z.number().gte(0),
    sentry_wards_placed: z.number().gte(0),
    tower_kills: z.number().gte(0),
  })
  .transform((data) => ({
    assists: data['assists'],
    deaths: data['deaths'],
    direGamesLost: data['dire_games_lost'],
    direGamesWon: data['dire_games_won'],
    gamesLost: data['games_lost'],
    gamesPlayed: data['games_played'],
    gamesWon: data['games_won'],
    kills: data['kills'],
    matchesDraw: data['matches_draw'],
    matchesLost: data['matches_lost'],
    matchesPlayed: data['matches_played'],
    matchesWon: data['matches_won'],
    observerWardsDestroyed: data['observer_wards_destroyed'],
    observerWardsPlaced: data['observer_wards_placed'],
    radiantGamesLost: data['radiant_games_lost'],
    radiantGamesWon: data['radiant_games_won'],
    roshanKills: data['roshan_kills'],
    sentryWardsDestroyed: data['sentry_wards_destroyed'],
    sentryWardsPlaced: data['sentry_wards_placed'],
    towerKills: data['tower_kills'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamStatsTotalsRequest = z
  .object({
    assists: z.number().nullish(),
    deaths: z.number().nullish(),
    direGamesLost: z.number().nullish(),
    direGamesWon: z.number().nullish(),
    gamesLost: z.number().nullish(),
    gamesPlayed: z.number().nullish(),
    gamesWon: z.number().nullish(),
    kills: z.number().nullish(),
    matchesDraw: z.number().nullish(),
    matchesLost: z.number().nullish(),
    matchesPlayed: z.number().nullish(),
    matchesWon: z.number().nullish(),
    observerWardsDestroyed: z.number().nullish(),
    observerWardsPlaced: z.number().nullish(),
    radiantGamesLost: z.number().nullish(),
    radiantGamesWon: z.number().nullish(),
    roshanKills: z.number().nullish(),
    sentryWardsDestroyed: z.number().nullish(),
    sentryWardsPlaced: z.number().nullish(),
    towerKills: z.number().nullish(),
  })
  .transform((data) => ({
    assists: data['assists'],
    deaths: data['deaths'],
    dire_games_lost: data['direGamesLost'],
    dire_games_won: data['direGamesWon'],
    games_lost: data['gamesLost'],
    games_played: data['gamesPlayed'],
    games_won: data['gamesWon'],
    kills: data['kills'],
    matches_draw: data['matchesDraw'],
    matches_lost: data['matchesLost'],
    matches_played: data['matchesPlayed'],
    matches_won: data['matchesWon'],
    observer_wards_destroyed: data['observerWardsDestroyed'],
    observer_wards_placed: data['observerWardsPlaced'],
    radiant_games_lost: data['radiantGamesLost'],
    radiant_games_won: data['radiantGamesWon'],
    roshan_kills: data['roshanKills'],
    sentry_wards_destroyed: data['sentryWardsDestroyed'],
    sentry_wards_placed: data['sentryWardsPlaced'],
    tower_kills: data['towerKills'],
  }));
