import { z } from 'zod';
import { csgoWeaponKind } from './csgo-weapon-kind';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverCsgoWeapons: any = z.lazy(() => {
  return z.object({
    kind: csgoWeaponKind.optional(),
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
 * @typedef  {SearchOverCsgoWeapons} searchOverCsgoWeapons
 * @property {CsgoWeaponKind}
 * @property {string}
 * @property {string} - The slug of the weapon.
 */
export type SearchOverCsgoWeapons = z.infer<typeof searchOverCsgoWeapons>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoWeaponsResponse: any = z.lazy(() => {
  return z
    .object({
      kind: csgoWeaponKind.optional(),
      name: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
    })
    .transform((data) => ({
      kind: data['kind'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoWeaponsRequest: any = z.lazy(() => {
  return z
    .object({ kind: csgoWeaponKind.nullish(), name: z.string().nullish(), slug: z.string().nullish() })
    .transform((data) => ({
      kind: data['kind'],
      name: data['name'],
      slug: data['slug'],
    }));
});