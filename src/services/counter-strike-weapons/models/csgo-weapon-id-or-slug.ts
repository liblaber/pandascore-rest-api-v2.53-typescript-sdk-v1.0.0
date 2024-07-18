import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoWeaponIdOrSlug: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * A weapon ID or slug
 * @typedef  {CsgoWeaponIdOrSlug} csgoWeaponIdOrSlug - A weapon ID or slug - A weapon ID or slug
 * @property {number}
 * @property {string}
 */
export type CsgoWeaponIdOrSlug = z.infer<typeof csgoWeaponIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoWeaponIdOrSlugResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoWeaponIdOrSlugRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
