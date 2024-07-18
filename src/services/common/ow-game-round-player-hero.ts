import { z } from 'zod';
import { owHeroRole } from './ow-hero-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameRoundPlayerHero: any = z.lazy(() => {
  return z.object({
    avgTimeToChargeUltimate: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    destructions: z.number().gte(0).nullable(),
    difficulty: z.number().gte(1),
    id: z.number().gte(1),
    imageUrl: z.string(),
    kills: z.number().gte(0).nullable(),
    name: z.string(),
    portraitUrl: z.string(),
    realName: z.string(),
    resurrections: z.number().gte(0).nullable(),
    role: owHeroRole,
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    timePlayed: z.number().gte(0).nullable(),
    timeWithUltUp: z.number().gte(0).nullable(),
    ultimates: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {OwGameRoundPlayerHero} owGameRoundPlayerHero
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {OwHeroRole}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type OwGameRoundPlayerHero = z.infer<typeof owGameRoundPlayerHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundPlayerHeroResponse: any = z.lazy(() => {
  return z
    .object({
      avg_time_to_charge_ultimate: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      destructions: z.number().gte(0).nullable(),
      difficulty: z.number().gte(1),
      id: z.number().gte(1),
      image_url: z.string(),
      kills: z.number().gte(0).nullable(),
      name: z.string(),
      portrait_url: z.string(),
      real_name: z.string(),
      resurrections: z.number().gte(0).nullable(),
      role: owHeroRole,
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
      time_played: z.number().gte(0).nullable(),
      time_with_ult_up: z.number().gte(0).nullable(),
      ultimates: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      avgTimeToChargeUltimate: data['avg_time_to_charge_ultimate'],
      deaths: data['deaths'],
      destructions: data['destructions'],
      difficulty: data['difficulty'],
      id: data['id'],
      imageUrl: data['image_url'],
      kills: data['kills'],
      name: data['name'],
      portraitUrl: data['portrait_url'],
      realName: data['real_name'],
      resurrections: data['resurrections'],
      role: data['role'],
      slug: data['slug'],
      timePlayed: data['time_played'],
      timeWithUltUp: data['time_with_ult_up'],
      ultimates: data['ultimates'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundPlayerHeroRequest: any = z.lazy(() => {
  return z
    .object({
      avgTimeToChargeUltimate: z.number().nullish(),
      deaths: z.number().nullish(),
      destructions: z.number().nullish(),
      difficulty: z.number().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      kills: z.number().nullish(),
      name: z.string().nullish(),
      portraitUrl: z.string().nullish(),
      realName: z.string().nullish(),
      resurrections: z.number().nullish(),
      role: owHeroRole.nullish(),
      slug: z.string().nullish(),
      timePlayed: z.number().nullish(),
      timeWithUltUp: z.number().nullish(),
      ultimates: z.number().nullish(),
    })
    .transform((data) => ({
      avg_time_to_charge_ultimate: data['avgTimeToChargeUltimate'],
      deaths: data['deaths'],
      destructions: data['destructions'],
      difficulty: data['difficulty'],
      id: data['id'],
      image_url: data['imageUrl'],
      kills: data['kills'],
      name: data['name'],
      portrait_url: data['portraitUrl'],
      real_name: data['realName'],
      resurrections: data['resurrections'],
      role: data['role'],
      slug: data['slug'],
      time_played: data['timePlayed'],
      time_with_ult_up: data['timeWithUltUp'],
      ultimates: data['ultimates'],
    }));
});