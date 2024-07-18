import { z } from 'zod';
import { opponentTypePlayer } from '../../common/opponent-type-player';
import {
  matchOpponentBasePlayer,
  matchOpponentBasePlayerRequest,
  matchOpponentBasePlayerResponse,
} from './match-opponent-base-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchPlayerOpponentsObject: any = z.lazy(() => {
  return z.object({
    opponentType: opponentTypePlayer,
    opponents: z.array(matchOpponentBasePlayer),
  });
});

/**
 *
 * @typedef  {MatchPlayerOpponentsObject} matchPlayerOpponentsObject
 * @property {OpponentTypePlayer}
 * @property {MatchOpponentBasePlayer[]} - A list of players
 */
export type MatchPlayerOpponentsObject = z.infer<typeof matchPlayerOpponentsObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchPlayerOpponentsObjectResponse: any = z.lazy(() => {
  return z
    .object({
      opponent_type: opponentTypePlayer,
      opponents: z.array(matchOpponentBasePlayerResponse),
    })
    .transform((data) => ({
      opponentType: data['opponent_type'],
      opponents: data['opponents'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchPlayerOpponentsObjectRequest: any = z.lazy(() => {
  return z
    .object({
      opponentType: opponentTypePlayer.nullish(),
      opponents: z.array(matchOpponentBasePlayerRequest).nullish(),
    })
    .transform((data) => ({
      opponent_type: data['opponentType'],
      opponents: data['opponents'],
    }));
});