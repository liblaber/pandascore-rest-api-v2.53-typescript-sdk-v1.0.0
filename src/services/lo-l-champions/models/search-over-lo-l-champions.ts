import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverLoLChampions: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SearchOverLoLChampions} searchOverLoLChampions
 * @property {string}
 */
export type SearchOverLoLChampions = z.infer<typeof searchOverLoLChampions>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverLoLChampionsResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverLoLChampionsRequest: any = z.lazy(() => {
  return z.object({ name: z.string().nullish() }).transform((data) => ({
    name: data['name'],
  }));
});