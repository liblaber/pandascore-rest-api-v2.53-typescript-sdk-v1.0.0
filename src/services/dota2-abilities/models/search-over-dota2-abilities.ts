import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverDota2Abilities: any = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  });
});

/**
 *
 * @typedef  {SearchOverDota2Abilities} searchOverDota2Abilities
 * @property {string}
 */
export type SearchOverDota2Abilities = z.infer<typeof searchOverDota2Abilities>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverDota2AbilitiesResponse: any = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverDota2AbilitiesRequest: any = z.lazy(() => {
  return z.object({ name: z.string().nullish() }).transform((data) => ({
    name: data['name'],
  }));
});
