import { z } from 'zod';
import {
  valorantTeamClutchWins,
  valorantTeamClutchWinsRequest,
  valorantTeamClutchWinsResponse,
} from './valorant-team-clutch-wins';
import { baseValorantGame, baseValorantGameRequest, baseValorantGameResponse } from './base-valorant-game';
import {
  valorantTeamMapStats,
  valorantTeamMapStatsRequest,
  valorantTeamMapStatsResponse,
} from './valorant-team-map-stats';
import { serie, serieRequest, serieResponse } from '../../common/serie';
import { valorantTeamStreaks, valorantTeamStreaksRequest, valorantTeamStreaksResponse } from './valorant-team-streaks';
import { baseValorantTeam, baseValorantTeamRequest, baseValorantTeamResponse } from './base-valorant-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantStatsForTeamBySerie: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    clutchWins: valorantTeamClutchWins,
    deaths: z.number().gte(0).nullable(),
    defusedSpikes: z.number().gte(0).nullable(),
    firstDeaths: z.number().gte(0).nullable(),
    firstKills: z.number().gte(0).nullable(),
    gamesDraw: z.number().gte(0),
    gamesLost: z.number().gte(0),
    gamesPlayed: z.number().gte(0),
    gamesWon: z.number().gte(0),
    headshotPercentage: z.number().gte(0).lte(100).nullable(),
    kills: z.number().gte(0).nullable(),
    killsPerDeath: z.number().gte(0).nullable(),
    lastGames: z.array(baseValorantGame),
    maps: z.array(valorantTeamMapStats),
    matchesDraw: z.number().gte(0),
    matchesLost: z.number().gte(0),
    matchesPlayed: z.number().gte(0),
    matchesWon: z.number().gte(0),
    pistolRoundLosses: z.number().gte(0),
    pistolRoundTotalPlayed: z.number().gte(0),
    pistolRoundWins: z.number().gte(0),
    plantedSpikes: z.number().gte(0).nullable(),
    serie: serie,
    streaks: valorantTeamStreaks,
    team: baseValorantTeam,
  });
});

/**
 *
 * @typedef  {ValorantStatsForTeamBySerie} valorantStatsForTeamBySerie
 * @property {number} - Number of team's assists
 * @property {ValorantTeamClutchWins} - Rounds wins with a single team member alive
 * @property {number} - Number of team's death
 * @property {number} - Number of spikes defused by a team member
 * @property {number} - Number of rounds where a team member died first
 * @property {number} - Number of rounds where a team member did the first kill
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Percentage of headshots within the player's shots
 * @property {number} - Number of team's kills
 * @property {number} - Ratio of team's kills per deaths
 * @property {BaseValorantGame[]}
 * @property {ValorantTeamMapStats[]}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of pistol rounds lost by the team
 * @property {number} - Number of pistol rounds played by the team
 * @property {number} - Number of pistol rounds won by the team
 * @property {number} - Number of spikes planted by a team member
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {ValorantTeamStreaks} - Streaks done by a team member (in a given round)
 * @property {BaseValorantTeam}
 */
export type ValorantStatsForTeamBySerie = z.infer<typeof valorantStatsForTeamBySerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantStatsForTeamBySerieResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      clutch_wins: valorantTeamClutchWinsResponse,
      deaths: z.number().gte(0).nullable(),
      defused_spikes: z.number().gte(0).nullable(),
      first_deaths: z.number().gte(0).nullable(),
      first_kills: z.number().gte(0).nullable(),
      games_draw: z.number().gte(0),
      games_lost: z.number().gte(0),
      games_played: z.number().gte(0),
      games_won: z.number().gte(0),
      headshot_percentage: z.number().gte(0).lte(100).nullable(),
      kills: z.number().gte(0).nullable(),
      kills_per_death: z.number().gte(0).nullable(),
      last_games: z.array(baseValorantGameResponse),
      maps: z.array(valorantTeamMapStatsResponse),
      matches_draw: z.number().gte(0),
      matches_lost: z.number().gte(0),
      matches_played: z.number().gte(0),
      matches_won: z.number().gte(0),
      pistol_round_losses: z.number().gte(0),
      pistol_round_total_played: z.number().gte(0),
      pistol_round_wins: z.number().gte(0),
      planted_spikes: z.number().gte(0).nullable(),
      serie: serieResponse,
      streaks: valorantTeamStreaksResponse,
      team: baseValorantTeamResponse,
    })
    .transform((data) => ({
      assists: data['assists'],
      clutchWins: data['clutch_wins'],
      deaths: data['deaths'],
      defusedSpikes: data['defused_spikes'],
      firstDeaths: data['first_deaths'],
      firstKills: data['first_kills'],
      gamesDraw: data['games_draw'],
      gamesLost: data['games_lost'],
      gamesPlayed: data['games_played'],
      gamesWon: data['games_won'],
      headshotPercentage: data['headshot_percentage'],
      kills: data['kills'],
      killsPerDeath: data['kills_per_death'],
      lastGames: data['last_games'],
      maps: data['maps'],
      matchesDraw: data['matches_draw'],
      matchesLost: data['matches_lost'],
      matchesPlayed: data['matches_played'],
      matchesWon: data['matches_won'],
      pistolRoundLosses: data['pistol_round_losses'],
      pistolRoundTotalPlayed: data['pistol_round_total_played'],
      pistolRoundWins: data['pistol_round_wins'],
      plantedSpikes: data['planted_spikes'],
      serie: data['serie'],
      streaks: data['streaks'],
      team: data['team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantStatsForTeamBySerieRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      clutchWins: valorantTeamClutchWinsRequest.nullish(),
      deaths: z.number().nullish(),
      defusedSpikes: z.number().nullish(),
      firstDeaths: z.number().nullish(),
      firstKills: z.number().nullish(),
      gamesDraw: z.number().nullish(),
      gamesLost: z.number().nullish(),
      gamesPlayed: z.number().nullish(),
      gamesWon: z.number().nullish(),
      headshotPercentage: z.number().nullish(),
      kills: z.number().nullish(),
      killsPerDeath: z.number().nullish(),
      lastGames: z.array(baseValorantGameRequest).nullish(),
      maps: z.array(valorantTeamMapStatsRequest).nullish(),
      matchesDraw: z.number().nullish(),
      matchesLost: z.number().nullish(),
      matchesPlayed: z.number().nullish(),
      matchesWon: z.number().nullish(),
      pistolRoundLosses: z.number().nullish(),
      pistolRoundTotalPlayed: z.number().nullish(),
      pistolRoundWins: z.number().nullish(),
      plantedSpikes: z.number().nullish(),
      serie: serieRequest.nullish(),
      streaks: valorantTeamStreaksRequest.nullish(),
      team: baseValorantTeamRequest.nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      clutch_wins: data['clutchWins'],
      deaths: data['deaths'],
      defused_spikes: data['defusedSpikes'],
      first_deaths: data['firstDeaths'],
      first_kills: data['firstKills'],
      games_draw: data['gamesDraw'],
      games_lost: data['gamesLost'],
      games_played: data['gamesPlayed'],
      games_won: data['gamesWon'],
      headshot_percentage: data['headshotPercentage'],
      kills: data['kills'],
      kills_per_death: data['killsPerDeath'],
      last_games: data['lastGames'],
      maps: data['maps'],
      matches_draw: data['matchesDraw'],
      matches_lost: data['matchesLost'],
      matches_played: data['matchesPlayed'],
      matches_won: data['matchesWon'],
      pistol_round_losses: data['pistolRoundLosses'],
      pistol_round_total_played: data['pistolRoundTotalPlayed'],
      pistol_round_wins: data['pistolRoundWins'],
      planted_spikes: data['plantedSpikes'],
      serie: data['serie'],
      streaks: data['streaks'],
      team: data['team'],
    }));
});
