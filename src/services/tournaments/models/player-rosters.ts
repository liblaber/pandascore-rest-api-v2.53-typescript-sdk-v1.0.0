import { z } from 'zod';
import { player, playerRequest, playerResponse } from '../../common/player';
import { opponentTypePlayer } from '../../common/opponent-type-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const playerRosters = z.object({
  rosters: z.array(player),
  type_: opponentTypePlayer,
});

/**
 * Rosters for a series or a tournament with player participants
 * @typedef  {PlayerRosters} playerRosters - Rosters for a series or a tournament with player participants - Rosters for a series or a tournament with player participants
 * @property {Player[]}
 * @property {OpponentTypePlayer}
 */
export type PlayerRosters = z.infer<typeof playerRosters>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const playerRostersResponse = z
  .object({
    rosters: z.array(playerResponse),
    type: opponentTypePlayer,
  })
  .transform((data) => ({
    rosters: data['rosters'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const playerRostersRequest = z
  .object({ rosters: z.array(playerRequest).nullish(), type_: opponentTypePlayer.nullish() })
  .transform((data) => ({
    rosters: data['rosters'],
    type: data['type_'],
  }));
