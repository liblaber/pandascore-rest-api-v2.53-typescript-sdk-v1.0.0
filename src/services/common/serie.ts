import { z } from 'zod';
import { baseLeague, baseLeagueRequest, baseLeagueResponse } from './base-league';
import { baseTournament, baseTournamentRequest, baseTournamentResponse } from './base-tournament';
import {
  serieVideogameTitle,
  serieVideogameTitleRequest,
  serieVideogameTitleResponse,
} from './serie-videogame-title';
import { serieWinnerId, serieWinnerIdRequest, serieWinnerIdResponse } from './serie-winner-id';
import { serieWinnerType } from './serie-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const serie = z.object({
  beginAt: z.string().min(1),
  endAt: z.string().min(1),
  fullName: z.string(),
  id: z.number().gte(1),
  league1: baseLeague,
  leagueId: z.number().gte(1),
  modifiedAt: z.string().min(1),
  name: z.string(),
  season: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  tournaments: z.array(baseTournament),
  videogame: z.any(),
  videogameTitle: serieVideogameTitle,
  winnerId: serieWinnerId,
  winnerType: serieWinnerType,
  year: z.number().gte(2012),
});

/**
 * A serie, an occurrence of a league event
 * @typedef  {Serie} serie - A serie, an occurrence of a league event - A serie, an occurrence of a league event
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {BaseLeague}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {BaseTournament[]}
 * @property {any}
 * @property {SerieVideogameTitle}
 * @property {SerieWinnerId}
 * @property {SerieWinnerType}
 * @property {number}
 */
export type Serie = z.infer<typeof serie>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const serieResponse = z
  .object({
    begin_at: z.string().min(1),
    end_at: z.string().min(1),
    full_name: z.string(),
    id: z.number().gte(1),
    league: baseLeagueResponse,
    league_id: z.number().gte(1),
    modified_at: z.string().min(1),
    name: z.string(),
    season: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    tournaments: z.array(baseTournamentResponse),
    videogame: z.any(),
    videogame_title: serieVideogameTitleResponse,
    winner_id: serieWinnerIdResponse,
    winner_type: serieWinnerType,
    year: z.number().gte(2012),
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    endAt: data['end_at'],
    fullName: data['full_name'],
    id: data['id'],
    league1: data['league'],
    leagueId: data['league_id'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    season: data['season'],
    slug: data['slug'],
    tournaments: data['tournaments'],
    videogame: data['videogame'],
    videogameTitle: data['videogame_title'],
    winnerId: data['winner_id'],
    winnerType: data['winner_type'],
    year: data['year'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const serieRequest = z
  .object({
    beginAt: z.string().nullish(),
    endAt: z.string().nullish(),
    fullName: z.string().nullish(),
    id: z.number().nullish(),
    league1: baseLeagueRequest.nullish(),
    leagueId: z.number().nullish(),
    modifiedAt: z.string().nullish(),
    name: z.string().nullish(),
    season: z.string().nullish(),
    slug: z.string().nullish(),
    tournaments: z.array(baseTournamentRequest).nullish(),
    videogame: z.any().nullish(),
    videogameTitle: serieVideogameTitleRequest.nullish(),
    winnerId: serieWinnerIdRequest.nullish(),
    winnerType: serieWinnerType.nullish(),
    year: z.number().nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    end_at: data['endAt'],
    full_name: data['fullName'],
    id: data['id'],
    league: data['league1'],
    league_id: data['leagueId'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    season: data['season'],
    slug: data['slug'],
    tournaments: data['tournaments'],
    videogame: data['videogame'],
    videogame_title: data['videogameTitle'],
    winner_id: data['winnerId'],
    winner_type: data['winnerType'],
    year: data['year'],
  }));
