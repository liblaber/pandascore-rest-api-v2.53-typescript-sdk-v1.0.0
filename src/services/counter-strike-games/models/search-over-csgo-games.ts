import { z } from 'zod';
import { gameStatus } from '../../common/game-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverCsgoGames: any = z.lazy(() => {
  return z.object({
    status: gameStatus.optional(),
  });
});

/**
 *
 * @typedef  {SearchOverCsgoGames} searchOverCsgoGames
 * @property {GameStatus} - The game status
 */
export type SearchOverCsgoGames = z.infer<typeof searchOverCsgoGames>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoGamesResponse: any = z.lazy(() => {
  return z
    .object({
      status: gameStatus.optional(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoGamesRequest: any = z.lazy(() => {
  return z.object({ status: gameStatus.nullish() }).transform((data) => ({
    status: data['status'],
  }));
});
