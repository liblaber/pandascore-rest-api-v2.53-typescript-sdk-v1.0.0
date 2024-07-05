import { z } from 'zod';
import {
  tournamentRosterItem,
  tournamentRosterItemRequest,
  tournamentRosterItemResponse,
} from './tournament-roster-item';
import { baseLeague, baseLeagueRequest, baseLeagueResponse } from './base-league';
import { baseMatch, baseMatchRequest, baseMatchResponse } from './base-match';
import { baseSerie, baseSerieRequest, baseSerieResponse } from './base-serie';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';
import { tournamentTier1 } from './tournament-tier-1';
import {
  tournamentVideogameTitle,
  tournamentVideogameTitleRequest,
  tournamentVideogameTitleResponse,
} from './tournament-videogame-title';
import {
  tournamentWinnerId,
  tournamentWinnerIdRequest,
  tournamentWinnerIdResponse,
} from './tournament-winner-id';
import { tournamentWinnerType } from './tournament-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tournament = z.object({
  beginAt: z.string().min(1),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  expectedRoster: z.array(tournamentRosterItem),
  hasBracket: z.boolean(),
  id: z.number().gte(1),
  league1: baseLeague,
  leagueId: z.number().gte(1),
  liveSupported: z.boolean(),
  matches: z.array(baseMatch),
  modifiedAt: z.string().min(1),
  name: z.string(),
  prizepool: z.string(),
  serie1: baseSerie,
  serieId: z.number().gte(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  teams: z.array(baseTeam),
  tier: tournamentTier1,
  videogame: z.any(),
  videogameTitle: tournamentVideogameTitle,
  winnerId: tournamentWinnerId,
  winnerType: tournamentWinnerType,
});

/**
 *
 * @typedef  {Tournament} tournament
 * @property {string}
 * @property {boolean} - Whether the tournament is expected to have detailed statistics available
 * @property {string}
 * @property {TournamentRosterItem[]}
 * @property {boolean} - Whether the tournament has a bracket
 * @property {number}
 * @property {BaseLeague}
 * @property {number}
 * @property {boolean} - Whether live is supported
 * @property {BaseMatch[]}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {BaseSerie}
 * @property {number}
 * @property {string}
 * @property {BaseTeam[]}
 * @property {TournamentTier1} - The tier of the tournament, ranging from 'S' to 'Unranked'. Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'
 * @property {any}
 * @property {TournamentVideogameTitle}
 * @property {TournamentWinnerId}
 * @property {TournamentWinnerType}
 */
export type Tournament = z.infer<typeof tournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentResponse = z
  .object({
    begin_at: z.string().min(1),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    expected_roster: z.array(tournamentRosterItemResponse),
    has_bracket: z.boolean(),
    id: z.number().gte(1),
    league: baseLeagueResponse,
    league_id: z.number().gte(1),
    live_supported: z.boolean(),
    matches: z.array(baseMatchResponse),
    modified_at: z.string().min(1),
    name: z.string(),
    prizepool: z.string(),
    serie: baseSerieResponse,
    serie_id: z.number().gte(1),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    teams: z.array(baseTeamResponse),
    tier: tournamentTier1,
    videogame: z.any(),
    videogame_title: tournamentVideogameTitleResponse,
    winner_id: tournamentWinnerIdResponse,
    winner_type: tournamentWinnerType,
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    detailedStats: data['detailed_stats'],
    endAt: data['end_at'],
    expectedRoster: data['expected_roster'],
    hasBracket: data['has_bracket'],
    id: data['id'],
    league1: data['league'],
    leagueId: data['league_id'],
    liveSupported: data['live_supported'],
    matches: data['matches'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    prizepool: data['prizepool'],
    serie1: data['serie'],
    serieId: data['serie_id'],
    slug: data['slug'],
    teams: data['teams'],
    tier: data['tier'],
    videogame: data['videogame'],
    videogameTitle: data['videogame_title'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentRequest = z
  .object({
    beginAt: z.string().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    expectedRoster: z.array(tournamentRosterItemRequest).nullish(),
    hasBracket: z.boolean().nullish(),
    id: z.number().nullish(),
    league1: baseLeagueRequest.nullish(),
    leagueId: z.number().nullish(),
    liveSupported: z.boolean().nullish(),
    matches: z.array(baseMatchRequest).nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    prizepool: z.string().nullish(),
    serie1: baseSerieRequest.nullish(),
    serieId: z.number().nullish(),
    slug: z.string().nullish(),
    teams: z.array(baseTeamRequest).nullish(),
    tier: tournamentTier1.nullish(),
    videogame: z.any().nullish(),
    videogameTitle: tournamentVideogameTitleRequest.nullish(),
    winnerId: tournamentWinnerIdRequest.nullish(),
    winnerType: tournamentWinnerType.nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    detailed_stats: data['detailedStats'],
    end_at: data['endAt'],
    expected_roster: data['expectedRoster'],
    has_bracket: data['hasBracket'],
    id: data['id'],
    league: data['league1'],
    league_id: data['leagueId'],
    live_supported: data['liveSupported'],
    matches: data['matches'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    prizepool: data['prizepool'],
    serie: data['serie1'],
    serie_id: data['serieId'],
    slug: data['slug'],
    teams: data['teams'],
    tier: data['tier'],
    videogame: data['videogame'],
    videogame_title: data['videogameTitle'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
