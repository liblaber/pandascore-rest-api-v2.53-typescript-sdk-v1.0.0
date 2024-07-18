import { z } from 'zod';
import { matchType } from './match-type';
import {
  filterOverMatchesOpponentId,
  filterOverMatchesOpponentIdRequest,
  filterOverMatchesOpponentIdResponse,
} from './filter-over-matches-opponent-id';
import { matchStatus } from './match-status';
import { videogameIdOrSlug, videogameIdOrSlugRequest, videogameIdOrSlugResponse } from './videogame-id-or-slug';
import {
  filterOverMatchesVideogameTitle,
  filterOverMatchesVideogameTitleRequest,
  filterOverMatchesVideogameTitleResponse,
} from './filter-over-matches-videogame-title';
import {
  filterOverMatchesVideogameVersion,
  filterOverMatchesVideogameVersionRequest,
  filterOverMatchesVideogameVersionResponse,
} from './filter-over-matches-videogame-version';
import { opponentId, opponentIdRequest, opponentIdResponse } from './opponent-id';
import { matchWinnerType } from './match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverMatches: any = z.lazy(() => {
  return z.object({
    beginAt: z.array(z.string()).min(1).optional(),
    detailedStats: z.boolean().optional(),
    draw: z.boolean().optional(),
    endAt: z.array(z.string()).min(1).optional(),
    finished: z.boolean().optional(),
    forfeit: z.boolean().optional(),
    future: z.boolean().optional(),
    id: z.array(z.number()).min(1).optional(),
    leagueId: z.array(z.number()).min(1).optional(),
    matchType: z.array(matchType).min(1).optional(),
    modifiedAt: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    notStarted: z.boolean().optional(),
    numberOfGames: z.array(z.number()).min(1).optional(),
    opponentId: z.array(filterOverMatchesOpponentId).min(1).optional(),
    opponentsFilled: z.boolean().optional(),
    past: z.boolean().optional(),
    running: z.boolean().optional(),
    scheduledAt: z.array(z.string()).min(1).optional(),
    serieId: z.array(z.number()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    status: z.array(matchStatus).min(1).optional(),
    tournamentId: z.array(z.number()).min(1).optional(),
    unscheduled: z.boolean().optional(),
    videogame: z.array(videogameIdOrSlug).min(1).optional(),
    videogameTitle: z.array(filterOverMatchesVideogameTitle).min(1).optional(),
    videogameVersion: z.array(filterOverMatchesVideogameVersion).min(1).optional(),
    winnerId: z.array(opponentId).min(1).optional(),
    winnerType: z.array(matchWinnerType).min(1).optional(),
  });
});

/**
 *
 * @typedef  {FilterOverMatches} filterOverMatches
 * @property {string[]}
 * @property {boolean} - Whether the match offers full stats
 * @property {boolean} - Whether result of the match is a draw
 * @property {string[]}
 * @property {boolean}
 * @property {boolean} - Whether match was forfeited
 * @property {boolean} - `true` for future matches only, `false` for past matches only. <br/>Filtering is done on the `begin_at` value, so  matches with `running` status will not appear if `true`.
 * @property {number[]}
 * @property {number[]}
 * @property {MatchType[]}
 * @property {string[]}
 * @property {string[]}
 * @property {boolean}
 * @property {number[]}
 * @property {FilterOverMatchesOpponentId[]} - A Team or a Player (id or slug). You can use`filter[winner_type]=Team` or `filter[winner_type]=Player` to focus on teams or players.
 * @property {boolean} - Whether a match has opponents filled i.e. opponents are not TBD.
 * @property {boolean}
 * @property {boolean}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {MatchStatus[]}
 * @property {number[]}
 * @property {boolean}
 * @property {VideogameIdOrSlug[]}
 * @property {FilterOverMatchesVideogameTitle[]} - A videogame title id or slug. <br/>Only for `/csgo/*`, `/codmw/*`, `/fifa/*` and `/ow/*` endpoints <br/>
 * @property {FilterOverMatchesVideogameVersion[]} - Filter by the names of videogame versions, all versions using `filter[videogame_version]=all`, or by the latest version using `filter[videogame_version]=latest` <br/>Only for `valorant/*` and `/lol/*` endpoints. <br/>
 * @property {OpponentId[]}
 * @property {MatchWinnerType[]}
 */
export type FilterOverMatches = z.infer<typeof filterOverMatches>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverMatchesResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.array(z.string()).min(1).optional(),
      detailed_stats: z.boolean().optional(),
      draw: z.boolean().optional(),
      end_at: z.array(z.string()).min(1).optional(),
      finished: z.boolean().optional(),
      forfeit: z.boolean().optional(),
      future: z.boolean().optional(),
      id: z.array(z.number()).min(1).optional(),
      league_id: z.array(z.number()).min(1).optional(),
      match_type: z.array(matchType).min(1).optional(),
      modified_at: z.array(z.string()).min(1).optional(),
      name: z.array(z.string()).min(1).optional(),
      not_started: z.boolean().optional(),
      number_of_games: z.array(z.number()).min(1).optional(),
      opponent_id: z.array(filterOverMatchesOpponentIdResponse).min(1).optional(),
      opponents_filled: z.boolean().optional(),
      past: z.boolean().optional(),
      running: z.boolean().optional(),
      scheduled_at: z.array(z.string()).min(1).optional(),
      serie_id: z.array(z.number()).min(1).optional(),
      slug: z.array(z.string()).min(1).optional(),
      status: z.array(matchStatus).min(1).optional(),
      tournament_id: z.array(z.number()).min(1).optional(),
      unscheduled: z.boolean().optional(),
      videogame: z.array(videogameIdOrSlugResponse).min(1).optional(),
      videogame_title: z.array(filterOverMatchesVideogameTitleResponse).min(1).optional(),
      videogame_version: z.array(filterOverMatchesVideogameVersionResponse).min(1).optional(),
      winner_id: z.array(opponentIdResponse).min(1).optional(),
      winner_type: z.array(matchWinnerType).min(1).optional(),
    })
    .transform((data) => ({
      beginAt: data['begin_at'],
      detailedStats: data['detailed_stats'],
      draw: data['draw'],
      endAt: data['end_at'],
      finished: data['finished'],
      forfeit: data['forfeit'],
      future: data['future'],
      id: data['id'],
      leagueId: data['league_id'],
      matchType: data['match_type'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      notStarted: data['not_started'],
      numberOfGames: data['number_of_games'],
      opponentId: data['opponent_id'],
      opponentsFilled: data['opponents_filled'],
      past: data['past'],
      running: data['running'],
      scheduledAt: data['scheduled_at'],
      serieId: data['serie_id'],
      slug: data['slug'],
      status: data['status'],
      tournamentId: data['tournament_id'],
      unscheduled: data['unscheduled'],
      videogame: data['videogame'],
      videogameTitle: data['videogame_title'],
      videogameVersion: data['videogame_version'],
      winnerId: data['winner_id'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverMatchesRequest: any = z.lazy(() => {
  return z
    .object({
      beginAt: z.array(z.string()).nullish(),
      detailedStats: z.boolean().nullish(),
      draw: z.boolean().nullish(),
      endAt: z.array(z.string()).nullish(),
      finished: z.boolean().nullish(),
      forfeit: z.boolean().nullish(),
      future: z.boolean().nullish(),
      id: z.array(z.number()).nullish(),
      leagueId: z.array(z.number()).nullish(),
      matchType: z.array(matchType).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      notStarted: z.boolean().nullish(),
      numberOfGames: z.array(z.number()).nullish(),
      opponentId: z.array(filterOverMatchesOpponentIdRequest).nullish(),
      opponentsFilled: z.boolean().nullish(),
      past: z.boolean().nullish(),
      running: z.boolean().nullish(),
      scheduledAt: z.array(z.string()).nullish(),
      serieId: z.array(z.number()).nullish(),
      slug: z.array(z.string()).nullish(),
      status: z.array(matchStatus).nullish(),
      tournamentId: z.array(z.number()).nullish(),
      unscheduled: z.boolean().nullish(),
      videogame: z.array(videogameIdOrSlugRequest).nullish(),
      videogameTitle: z.array(filterOverMatchesVideogameTitleRequest).nullish(),
      videogameVersion: z.array(filterOverMatchesVideogameVersionRequest).nullish(),
      winnerId: z.array(opponentIdRequest).nullish(),
      winnerType: z.array(matchWinnerType).nullish(),
    })
    .transform((data) => ({
      begin_at: data['beginAt'],
      detailed_stats: data['detailedStats'],
      draw: data['draw'],
      end_at: data['endAt'],
      finished: data['finished'],
      forfeit: data['forfeit'],
      future: data['future'],
      id: data['id'],
      league_id: data['leagueId'],
      match_type: data['matchType'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      not_started: data['notStarted'],
      number_of_games: data['numberOfGames'],
      opponent_id: data['opponentId'],
      opponents_filled: data['opponentsFilled'],
      past: data['past'],
      running: data['running'],
      scheduled_at: data['scheduledAt'],
      serie_id: data['serieId'],
      slug: data['slug'],
      status: data['status'],
      tournament_id: data['tournamentId'],
      unscheduled: data['unscheduled'],
      videogame: data['videogame'],
      videogame_title: data['videogameTitle'],
      videogame_version: data['videogameVersion'],
      winner_id: data['winnerId'],
      winner_type: data['winnerType'],
    }));
});
