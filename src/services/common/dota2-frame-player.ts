import { z } from 'zod';
import { dota2FrameHero, dota2FrameHeroRequest, dota2FrameHeroResponse } from './dota2-frame-hero';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FramePlayer = z.object({
  gold: z.number().gte(0),
  hero: dota2FrameHero,
  id: z.number().gte(1),
  name: z.string(),
  xp: z.number().gte(0),
});

/**
 *
 * @typedef  {Dota2FramePlayer} dota2FramePlayer
 * @property {number} - Total gold of the player
 * @property {Dota2FrameHero}
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 * @property {number} - Total experience of the player
 */
export type Dota2FramePlayer = z.infer<typeof dota2FramePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FramePlayerResponse = z
  .object({
    gold: z.number().gte(0),
    hero: dota2FrameHeroResponse,
    id: z.number().gte(1),
    name: z.string(),
    xp: z.number().gte(0),
  })
  .transform((data) => ({
    gold: data['gold'],
    hero: data['hero'],
    id: data['id'],
    name: data['name'],
    xp: data['xp'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FramePlayerRequest = z
  .object({
    gold: z.number().nullish(),
    hero: dota2FrameHeroRequest.nullish(),
    id: z.number().nullish(),
    name: z.string().nullish(),
    xp: z.number().nullish(),
  })
  .transform((data) => ({
    gold: data['gold'],
    hero: data['hero'],
    id: data['id'],
    name: data['name'],
    xp: data['xp'],
  }));
