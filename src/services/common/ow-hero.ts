import { z } from 'zod';
import { owHeroRole } from './ow-hero-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owHero = z.object({
  difficulty: z.number().gte(1),
  id: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  portraitUrl: z.string(),
  realName: z.string(),
  role: owHeroRole,
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {OwHero} owHero
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {OwHeroRole}
 * @property {string}
 */
export type OwHero = z.infer<typeof owHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owHeroResponse = z
  .object({
    difficulty: z.number().gte(1),
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    portrait_url: z.string(),
    real_name: z.string(),
    role: owHeroRole,
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  })
  .transform((data) => ({
    difficulty: data['difficulty'],
    id: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    portraitUrl: data['portrait_url'],
    realName: data['real_name'],
    role: data['role'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owHeroRequest = z
  .object({
    difficulty: z.number().nullish(),
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    portraitUrl: z.string().nullish(),
    realName: z.string().nullish(),
    role: owHeroRole.nullish(),
    slug: z.string().nullish(),
  })
  .transform((data) => ({
    difficulty: data['difficulty'],
    id: data['id'],
    image_url: data['imageUrl'],
    name: data['name'],
    portrait_url: data['portraitUrl'],
    real_name: data['realName'],
    role: data['role'],
    slug: data['slug'],
  }));
