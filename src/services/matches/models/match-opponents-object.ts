import { z } from 'zod';
import {
  matchTeamOpponentsObject,
  matchTeamOpponentsObjectRequest,
  matchTeamOpponentsObjectResponse,
} from './match-team-opponents-object';
import {
  matchPlayerOpponentsObject,
  matchPlayerOpponentsObjectRequest,
  matchPlayerOpponentsObjectResponse,
} from './match-player-opponents-object';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchOpponentsObject = z.union([matchTeamOpponentsObject, matchPlayerOpponentsObject]);

/**
 *
 * @typedef  {MatchOpponentsObject} matchOpponentsObject
 * @property {MatchTeamOpponentsObject}
 * @property {MatchPlayerOpponentsObject}
 */
export type MatchOpponentsObject = z.infer<typeof matchOpponentsObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchOpponentsObjectResponse = z.union([
  matchTeamOpponentsObjectResponse,
  matchPlayerOpponentsObjectResponse,
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchOpponentsObjectRequest = z.union([
  matchTeamOpponentsObjectRequest,
  matchPlayerOpponentsObjectRequest,
]);
