import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gameId = z.union([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);

/**
 * ID of the game. <br/>IDs are video game-specific, ie. a Valorant game and an Overwatch game can have the same game ID.
 * @typedef  {GameId} gameId - ID of the game. <br/>IDs are video game-specific, ie. a Valorant game and an Overwatch game can have the same game ID. - ID of the game. <br/>IDs are video game-specific, ie. a Valorant game and an Overwatch game can have the same game ID.
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type GameId = z.infer<typeof gameId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gameIdResponse = z.union([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gameIdRequest = z.union([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);
