import { z } from 'zod';
import { csgoWeaponKind } from './csgo-weapon-kind';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverCsgoWeapons: any = z.lazy(() => {
  return z.object({
    ammoClipMax: z.array(z.number()).min(2).max(2).optional(),
    ammoMax: z.array(z.number()).min(2).max(2).optional(),
    cost: z.array(z.number()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    killReward: z.array(z.number()).min(2).max(2).optional(),
    kind: z.array(csgoWeaponKind).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverCsgoWeapons} rangeOverCsgoWeapons
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {CsgoWeaponKind[]}
 * @property {string[]}
 * @property {string[]}
 */
export type RangeOverCsgoWeapons = z.infer<typeof rangeOverCsgoWeapons>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverCsgoWeaponsResponse: any = z.lazy(() => {
  return z
    .object({
      ammo_clip_max: z.array(z.number()).min(2).max(2).optional(),
      ammo_max: z.array(z.number()).min(2).max(2).optional(),
      cost: z.array(z.number()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      kill_reward: z.array(z.number()).min(2).max(2).optional(),
      kind: z.array(csgoWeaponKind).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
      slug: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      ammoClipMax: data['ammo_clip_max'],
      ammoMax: data['ammo_max'],
      cost: data['cost'],
      id: data['id'],
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
export const rangeOverCsgoWeaponsRequest: any = z.lazy(() => {
  return z
    .object({
      ammoClipMax: z.array(z.number()).nullish(),
      ammoMax: z.array(z.number()).nullish(),
      cost: z.array(z.number()).nullish(),
      id: z.array(z.number()).nullish(),
      killReward: z.array(z.number()).nullish(),
      kind: z.array(csgoWeaponKind).nullish(),
      name: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      ammo_clip_max: data['ammoClipMax'],
      ammo_max: data['ammoMax'],
      cost: data['cost'],
      id: data['id'],
      kill_reward: data['killReward'],
      kind: data['kind'],
      name: data['name'],
      slug: data['slug'],
    }));
});