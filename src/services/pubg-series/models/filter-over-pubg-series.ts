import { z } from 'zod';
import {
  filterOverPubgSeriesVideogameTitle,
  filterOverPubgSeriesVideogameTitleRequest,
  filterOverPubgSeriesVideogameTitleResponse,
} from './filter-over-pubg-series-videogame-title';
import { opponentId, opponentIdRequest, opponentIdResponse } from '../../common/opponent-id';
import { opponentType } from '../../common/opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverPubgSeries: any = z.lazy(() => {
  return z.object({
    beginAt: z.array(z.string()).min(1).optional(),
    endAt: z.array(z.string()).min(1).optional(),
    id: z.array(z.number()).min(1).optional(),
    leagueId: z.array(z.number()).min(1).optional(),
    modifiedAt: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    season: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    videogameTitle: z.array(filterOverPubgSeriesVideogameTitle).min(1).optional(),
    winnerId: z.array(opponentId).min(1).optional(),
    winnerType: z.array(opponentType).min(1).optional(),
    year: z.array(z.number()).min(1).optional(),
  });
});

/**
 *
 * @typedef  {FilterOverPubgSeries} filterOverPubgSeries
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {FilterOverPubgSeriesVideogameTitle[]} - A videogame title id or slug. <br/>Only for `/csgo/*`, `/codmw/*`, `/fifa/*` and `/ow/*` endpoints <br/>
 * @property {OpponentId[]}
 * @property {OpponentType[]}
 * @property {number[]}
 */
export type FilterOverPubgSeries = z.infer<typeof filterOverPubgSeries>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgSeriesResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.array(z.string()).min(1).optional(),
      end_at: z.array(z.string()).min(1).optional(),
      id: z.array(z.number()).min(1).optional(),
      league_id: z.array(z.number()).min(1).optional(),
      modified_at: z.array(z.string()).min(1).optional(),
      name: z.array(z.string()).min(1).optional(),
      season: z.array(z.string()).min(1).optional(),
      slug: z.array(z.string()).min(1).optional(),
      videogame_title: z.array(filterOverPubgSeriesVideogameTitleResponse).min(1).optional(),
      winner_id: z.array(opponentIdResponse).min(1).optional(),
      winner_type: z.array(opponentType).min(1).optional(),
      year: z.array(z.number()).min(1).optional(),
    })
    .transform((data) => ({
      beginAt: data['begin_at'],
      endAt: data['end_at'],
      id: data['id'],
      leagueId: data['league_id'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      videogameTitle: data['videogame_title'],
      winnerId: data['winner_id'],
      winnerType: data['winner_type'],
      year: data['year'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgSeriesRequest: any = z.lazy(() => {
  return z
    .object({
      beginAt: z.array(z.string()).nullish(),
      endAt: z.array(z.string()).nullish(),
      id: z.array(z.number()).nullish(),
      leagueId: z.array(z.number()).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      season: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
      videogameTitle: z.array(filterOverPubgSeriesVideogameTitleRequest).nullish(),
      winnerId: z.array(opponentIdRequest).nullish(),
      winnerType: z.array(opponentType).nullish(),
      year: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      begin_at: data['beginAt'],
      end_at: data['endAt'],
      id: data['id'],
      league_id: data['leagueId'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      videogame_title: data['videogameTitle'],
      winner_id: data['winnerId'],
      winner_type: data['winnerType'],
      year: data['year'],
    }));
});
