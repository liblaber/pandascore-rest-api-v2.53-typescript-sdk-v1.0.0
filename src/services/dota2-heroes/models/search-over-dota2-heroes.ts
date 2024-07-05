import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverDota2Heroes = z.object({
  localizedName: z.string().optional(),
  name: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/)
    .optional(),
});

/**
 *
 * @typedef  {SearchOverDota2Heroes} searchOverDota2Heroes
 * @property {string}
 * @property {string}
 */
export type SearchOverDota2Heroes = z.infer<typeof searchOverDota2Heroes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverDota2HeroesResponse = z
  .object({
    localized_name: z.string().optional(),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  })
  .transform((data) => ({
    localizedName: data['localized_name'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverDota2HeroesRequest = z
  .object({ localizedName: z.string().nullish(), name: z.string().nullish() })
  .transform((data) => ({
    localized_name: data['localizedName'],
    name: data['name'],
  }));
