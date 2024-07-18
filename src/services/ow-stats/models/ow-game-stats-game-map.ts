import { z } from 'zod';
import { owMapGameMode } from '../../common/ow-map-game-mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameStatsGameMap: any = z.lazy(() => {
  return z.object({
    gameMode: owMapGameMode,
    id: z.number().gte(1),
    imageUrl: z.string(),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    thumbnailUrl: z.string(),
  });
});

/**
 *
 * @typedef  {OwGameStatsGameMap} owGameStatsGameMap
 * @property {OwMapGameMode}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type OwGameStatsGameMap = z.infer<typeof owGameStatsGameMap>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameStatsGameMapResponse: any = z.lazy(() => {
  return z
    .object({
      game_mode: owMapGameMode,
      id: z.number().gte(1),
      image_url: z.string(),
      name: z.string(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
      thumbnail_url: z.string(),
    })
    .transform((data) => ({
      gameMode: data['game_mode'],
      id: data['id'],
      imageUrl: data['image_url'],
      name: data['name'],
      slug: data['slug'],
      thumbnailUrl: data['thumbnail_url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameStatsGameMapRequest: any = z.lazy(() => {
  return z
    .object({
      gameMode: owMapGameMode.nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
      thumbnailUrl: z.string().nullish(),
    })
    .transform((data) => ({
      game_mode: data['gameMode'],
      id: data['id'],
      image_url: data['imageUrl'],
      name: data['name'],
      slug: data['slug'],
      thumbnail_url: data['thumbnailUrl'],
    }));
});
