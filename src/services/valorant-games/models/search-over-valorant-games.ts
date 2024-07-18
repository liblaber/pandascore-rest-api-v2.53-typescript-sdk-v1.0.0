import { z } from 'zod';
import { gameStatus } from '../../common/game-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverValorantGames: any = z.lazy(() => {
  return z.object({
    status: gameStatus.optional(),
  });
});

/**
 *
 * @typedef  {SearchOverValorantGames} searchOverValorantGames
 * @property {GameStatus} - The game status
 */
export type SearchOverValorantGames = z.infer<typeof searchOverValorantGames>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantGamesResponse: any = z.lazy(() => {
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
export const searchOverValorantGamesRequest: any = z.lazy(() => {
  return z.object({ status: gameStatus.nullish() }).transform((data) => ({
    status: data['status'],
  }));
});
