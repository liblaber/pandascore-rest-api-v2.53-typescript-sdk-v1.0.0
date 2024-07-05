import { z } from 'zod';
import { searchOverValorantShortTournamentsTier2 } from './search-over-valorant-short-tournaments-tier-2';
import {
  filterOverR6SiegeShortTournamentsVideogameTitle,
  filterOverR6SiegeShortTournamentsVideogameTitleRequest,
  filterOverR6SiegeShortTournamentsVideogameTitleResponse,
} from './filter-over-r6-siege-short-tournaments-videogame-title';
import { opponentId, opponentIdRequest, opponentIdResponse } from './opponent-id';
import { opponentType } from './opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverR6SiegeShortTournaments = z.object({
  beginAt: z.array(z.string()).min(1).optional(),
  detailedStats: z.boolean().optional(),
  endAt: z.array(z.string()).min(1).optional(),
  hasBracket: z.boolean().optional(),
  id: z.array(z.number()).min(1).optional(),
  liveSupported: z.boolean().optional(),
  modifiedAt: z.array(z.string()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  prizepool: z.array(z.string()).min(1).optional(),
  serieId: z.array(z.number()).min(1).optional(),
  slug: z.array(z.string()).min(1).optional(),
  tier: z.array(searchOverValorantShortTournamentsTier2).min(1).optional(),
  videogameTitle: z.array(filterOverR6SiegeShortTournamentsVideogameTitle).min(1).optional(),
  winnerId: z.array(opponentId).min(1).optional(),
  winnerType: z.array(opponentType).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverR6SiegeShortTournaments} filterOverR6SiegeShortTournaments
 * @property {string[]}
 * @property {boolean} - Whether the tournament is expected to have detailed statistics available
 * @property {string[]}
 * @property {boolean} - Whether the tournament has a bracket
 * @property {number[]}
 * @property {boolean} - Whether live is supported
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {SearchOverValorantShortTournamentsTier2[]}
 * @property {FilterOverR6SiegeShortTournamentsVideogameTitle[]} - A videogame title id or slug. <br/>Only for `/csgo/*`, `/codmw/*`, `/fifa/*` and `/ow/*` endpoints <br/>
 * @property {OpponentId[]}
 * @property {OpponentType[]}
 */
export type FilterOverR6SiegeShortTournaments = z.infer<typeof filterOverR6SiegeShortTournaments>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeShortTournamentsResponse = z
  .object({
    begin_at: z.array(z.string()).min(1).optional(),
    detailed_stats: z.boolean().optional(),
    end_at: z.array(z.string()).min(1).optional(),
    has_bracket: z.boolean().optional(),
    id: z.array(z.number()).min(1).optional(),
    live_supported: z.boolean().optional(),
    modified_at: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    prizepool: z.array(z.string()).min(1).optional(),
    serie_id: z.array(z.number()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    tier: z.array(searchOverValorantShortTournamentsTier2).min(1).optional(),
    videogame_title: z
      .array(filterOverR6SiegeShortTournamentsVideogameTitleResponse)
      .min(1)
      .optional(),
    winner_id: z.array(opponentIdResponse).min(1).optional(),
    winner_type: z.array(opponentType).min(1).optional(),
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    detailedStats: data['detailed_stats'],
    endAt: data['end_at'],
    hasBracket: data['has_bracket'],
    id: data['id'],
    liveSupported: data['live_supported'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    prizepool: data['prizepool'],
    serieId: data['serie_id'],
    slug: data['slug'],
    tier: data['tier'],
    videogameTitle: data['videogame_title'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeShortTournamentsRequest = z
  .object({
    beginAt: z.array(z.string()).nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.array(z.string()).nullish(),
    hasBracket: z.boolean().nullish(),
    id: z.array(z.number()).nullish(),
    liveSupported: z.boolean().nullish(),
    modifiedAt: z.array(z.string()).nullish(),
    name: z.array(z.string()).nullish(),
    prizepool: z.array(z.string()).nullish(),
    serieId: z.array(z.number()).nullish(),
    slug: z.array(z.string()).nullish(),
    tier: z.array(searchOverValorantShortTournamentsTier2).nullish(),
    videogameTitle: z.array(filterOverR6SiegeShortTournamentsVideogameTitleRequest).nullish(),
    winnerId: z.array(opponentIdRequest).nullish(),
    winnerType: z.array(opponentType).nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    detailed_stats: data['detailedStats'],
    end_at: data['endAt'],
    has_bracket: data['hasBracket'],
    id: data['id'],
    live_supported: data['liveSupported'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    prizepool: data['prizepool'],
    serie_id: data['serieId'],
    slug: data['slug'],
    tier: data['tier'],
    videogame_title: data['videogameTitle'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
  }));
