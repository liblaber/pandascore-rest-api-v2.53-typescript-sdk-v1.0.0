import { z } from 'zod';
import { league, leagueRequest, leagueResponse } from './league';
import { serie, serieRequest, serieResponse } from './serie';
import { tournament, tournamentRequest, tournamentResponse } from './tournament';
import { match, matchRequest, matchResponse } from './match';
import { player, playerRequest, playerResponse } from './player';
import { team, teamRequest, teamResponse } from './team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const incidentObject = z.union([league, serie, tournament, match, player, team]);

/**
 *
 * @typedef  {IncidentObject} incidentObject
 * @property {League}
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {Tournament}
 * @property {Match}
 * @property {Player}
 * @property {Team}
 */
export type IncidentObject = z.infer<typeof incidentObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentObjectResponse = z.union([
  leagueResponse,
  serieResponse,
  tournamentResponse,
  matchResponse,
  playerResponse,
  teamResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const incidentObjectRequest = z.union([
  leagueRequest,
  serieRequest,
  tournamentRequest,
  matchRequest,
  playerRequest,
  teamRequest,
]);
