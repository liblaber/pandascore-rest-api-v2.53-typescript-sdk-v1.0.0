import { z } from 'zod';
import {
  baseSerieWinnerId,
  baseSerieWinnerIdRequest,
  baseSerieWinnerIdResponse,
} from './base-serie-winner-id';
import { baseSerieWinnerType } from './base-serie-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseSerie = z.object({
  beginAt: z.string().min(1),
  endAt: z.string().min(1),
  fullName: z.string(),
  id: z.number().gte(1),
  leagueId: z.number().gte(1),
  modifiedAt: z.string().min(1),
  name: z.string(),
  season: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  winnerId: baseSerieWinnerId,
  winnerType: baseSerieWinnerType,
  year: z.number().gte(2012),
});

/**
 *
 * @typedef  {BaseSerie} baseSerie
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {BaseSerieWinnerId}
 * @property {BaseSerieWinnerType}
 * @property {number}
 */
export type BaseSerie = z.infer<typeof baseSerie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseSerieResponse = z
  .object({
    begin_at: z.string().min(1),
    end_at: z.string().min(1),
    full_name: z.string(),
    id: z.number().gte(1),
    league_id: z.number().gte(1),
    modified_at: z.string().min(1),
    name: z.string(),
    season: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    winner_id: baseSerieWinnerIdResponse,
    winner_type: baseSerieWinnerType,
    year: z.number().gte(2012),
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    endAt: data['end_at'],
    fullName: data['full_name'],
    id: data['id'],
    leagueId: data['league_id'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    season: data['season'],
    slug: data['slug'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
    year: data['year'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseSerieRequest = z
  .object({
    beginAt: z.string().nullish(),
    endAt: z.string().nullish(),
    fullName: z.string().nullish(),
    id: z.number().nullish(),
    leagueId: z.number().nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    season: z.string().nullish(),
    slug: z.string().nullish(),
    winnerId: baseSerieWinnerIdRequest.nullish(),
    winnerType: baseSerieWinnerType.nullish(),
    year: z.number().nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    end_at: data['endAt'],
    full_name: data['fullName'],
    id: data['id'],
    league_id: data['leagueId'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    season: data['season'],
    slug: data['slug'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
    year: data['year'],
  }));
