import { z } from 'zod';
import { matchTeamResult, matchTeamResultRequest, matchTeamResultResponse } from './match-team-result';
import { matchPlayerResult, matchPlayerResultRequest, matchPlayerResultResponse } from './match-player-result';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchResult: any = z.lazy(() => {
  return z.union([matchTeamResult, matchPlayerResult]);
});

/**
 *
 * @typedef  {MatchResult} matchResult
 * @property {MatchTeamResult}
 * @property {MatchPlayerResult}
 */
export type MatchResult = z.infer<typeof matchResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchResultResponse: any = z.lazy(() => {
  return z.union([matchTeamResultResponse, matchPlayerResultResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchResultRequest: any = z.lazy(() => {
  return z.union([matchTeamResultRequest, matchPlayerResultRequest]);
});
