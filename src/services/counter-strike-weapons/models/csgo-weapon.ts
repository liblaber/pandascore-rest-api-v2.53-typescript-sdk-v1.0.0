import { z } from 'zod';
import { csgoWeaponKind } from './csgo-weapon-kind';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoWeapon: any = z.lazy(() => {
  return z.object({
    ammoClipMax: z.number().gte(0).nullable(),
    ammoMax: z.number().gte(0).nullable(),
    cost: z.number().gte(0),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    killReward: z.number().gte(0).nullable(),
    kind: csgoWeaponKind,
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  });
});

/**
 *
 * @typedef  {CsgoWeapon} csgoWeapon
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string} - A URL to the image of the weapon.
 * @property {number}
 * @property {CsgoWeaponKind}
 * @property {string}
 * @property {string} - The slug of the weapon.
 */
export type CsgoWeapon = z.infer<typeof csgoWeapon>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoWeaponResponse: any = z.lazy(() => {
  return z
    .object({
      ammo_clip_max: z.number().gte(0).nullable(),
      ammo_max: z.number().gte(0).nullable(),
      cost: z.number().gte(0),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      kill_reward: z.number().gte(0).nullable(),
      kind: csgoWeaponKind,
      name: z.string(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
    })
    .transform((data) => ({
      ammoClipMax: data['ammo_clip_max'],
      ammoMax: data['ammo_max'],
      cost: data['cost'],
      id: data['id'],
      imageUrl: data['image_url'],
      killReward: data['kill_reward'],
      kind: data['kind'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoWeaponRequest: any = z.lazy(() => {
  return z
    .object({
      ammoClipMax: z.number().nullish(),
      ammoMax: z.number().nullish(),
      cost: z.number().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      killReward: z.number().nullish(),
      kind: csgoWeaponKind.nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      ammo_clip_max: data['ammoClipMax'],
      ammo_max: data['ammoMax'],
      cost: data['cost'],
      id: data['id'],
      image_url: data['imageUrl'],
      kill_reward: data['killReward'],
      kind: data['kind'],
      name: data['name'],
      slug: data['slug'],
    }));
});
