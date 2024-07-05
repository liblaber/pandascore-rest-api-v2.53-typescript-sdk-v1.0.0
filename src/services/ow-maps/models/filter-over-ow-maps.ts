import { z } from 'zod';
import { owMapGameMode } from '../../common/ow-map-game-mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverOwMaps = z.object({
  gameMode: z.array(owMapGameMode).min(1).optional(),
  id: z.array(z.number()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  slug: z.array(z.string()).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverOwMaps} filterOverOwMaps
 * @property {OwMapGameMode[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 */
export type FilterOverOwMaps = z.infer<typeof filterOverOwMaps>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwMapsResponse = z
  .object({
    game_mode: z.array(owMapGameMode).min(1).optional(),
    id: z.array(z.number()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
  })
  .transform((data) => ({
    gameMode: data['game_mode'],
    id: data['id'],
    name: data['name'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverOwMapsRequest = z
  .object({
    gameMode: z.array(owMapGameMode).nullish(),
    id: z.array(z.number()).nullish(),
    name: z.array(z.string()).nullish(),
    slug: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    game_mode: data['gameMode'],
    id: data['id'],
    name: data['name'],
    slug: data['slug'],
  }));
