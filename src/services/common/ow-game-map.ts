import { z } from 'zod';
import { owMapGameMode } from './ow-map-game-mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameMap = z.object({
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

/**
 *
 * @typedef  {OwGameMap} owGameMap
 * @property {OwMapGameMode}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type OwGameMap = z.infer<typeof owGameMap>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameMapResponse = z
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameMapRequest = z
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
