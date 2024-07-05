import { z } from 'zod';
import { id, idRequest, idResponse } from './id';
import { gameWinnerType2 } from './game-winner-type-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gameWinner = z.object({
  id: id,
  type_: gameWinnerType2,
});

/**
 *
 * @typedef  {GameWinner} gameWinner
 * @property {Id}
 * @property {GameWinnerType2}
 */
export type GameWinner = z.infer<typeof gameWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gameWinnerResponse = z
  .object({
    id: idResponse,
    type: gameWinnerType2,
  })
  .transform((data) => ({
    id: data['id'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gameWinnerRequest = z
  .object({ id: idRequest.nullish(), type_: gameWinnerType2.nullish() })
  .transform((data) => ({
    id: data['id'],
    type: data['type_'],
  }));
