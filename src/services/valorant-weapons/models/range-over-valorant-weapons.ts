import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverValorantWeapons: any = z.lazy(() => {
  return z.object({
    creds: z.array(z.number()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverValorantWeapons} rangeOverValorantWeapons
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 */
export type RangeOverValorantWeapons = z.infer<typeof rangeOverValorantWeapons>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantWeaponsResponse: any = z.lazy(() => {
  return z
    .object({
      creds: z.array(z.number()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      creds: data['creds'],
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantWeaponsRequest: any = z.lazy(() => {
  return z
    .object({
      creds: z.array(z.number()).nullish(),
      id: z.array(z.number()).nullish(),
      name: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      creds: data['creds'],
      id: data['id'],
      name: data['name'],
    }));
});