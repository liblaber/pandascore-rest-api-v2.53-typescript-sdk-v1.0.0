import { z } from 'zod';
import { owMapGameMode } from '../../common/ow-map-game-mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverOwMaps: any = z.lazy(() => {
  return z.object({
    gameMode: owMapGameMode.optional(),
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  });
});

/**
 *
 * @typedef  {SearchOverOwMaps} searchOverOwMaps
 * @property {OwMapGameMode}
 * @property {string}
 * @property {string}
 */
export type SearchOverOwMaps = z.infer<typeof searchOverOwMaps>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverOwMapsResponse: any = z.lazy(() => {
  return z
    .object({
      game_mode: owMapGameMode.optional(),
      name: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
    })
    .transform((data) => ({
      gameMode: data['game_mode'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverOwMapsRequest: any = z.lazy(() => {
  return z
    .object({ gameMode: owMapGameMode.nullish(), name: z.string().nullish(), slug: z.string().nullish() })
    .transform((data) => ({
      game_mode: data['gameMode'],
      name: data['name'],
      slug: data['slug'],
    }));
});
