import { z } from 'zod';
import { gameStatus } from '../../common/game-status';
import { opponentType } from '../../common/opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverLoLGames = z.object({
  status: gameStatus.optional(),
  winnerType: opponentType.optional(),
});

/**
 *
 * @typedef  {SearchOverLoLGames} searchOverLoLGames
 * @property {GameStatus} - The game status
 * @property {OpponentType}
 */
export type SearchOverLoLGames = z.infer<typeof searchOverLoLGames>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverLoLGamesResponse = z
  .object({
    status: gameStatus.optional(),
    winner_type: opponentType.optional(),
  })
  .transform((data) => ({
    status: data['status'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverLoLGamesRequest = z
  .object({ status: gameStatus.nullish(), winnerType: opponentType.nullish() })
  .transform((data) => ({
    status: data['status'],
    winner_type: data['winnerType'],
  }));
