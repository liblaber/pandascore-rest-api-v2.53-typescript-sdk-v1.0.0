import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverDota2Heroes: any = z.lazy(() => {
  return z.object({
    id: z.array(z.number()).min(2).max(2).optional(),
    localizedName: z.array(z.string()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverDota2Heroes} rangeOverDota2Heroes
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 */
export type RangeOverDota2Heroes = z.infer<typeof rangeOverDota2Heroes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverDota2HeroesResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(z.number()).min(2).max(2).optional(),
      localized_name: z.array(z.string()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      localizedName: data['localized_name'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverDota2HeroesRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.array(z.number()).nullish(),
      localizedName: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      localized_name: data['localizedName'],
      name: data['name'],
    }));
});
