import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverLoLRunePaths: any = z.lazy(() => {
  return z.object({
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverLoLRunePaths} rangeOverLoLRunePaths
 * @property {number[]}
 * @property {string[]}
 */
export type RangeOverLoLRunePaths = z.infer<typeof rangeOverLoLRunePaths>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLRunePathsResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(z.number()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLRunePathsRequest: any = z.lazy(() => {
  return z.object({ id: z.array(z.number()).nullish(), name: z.array(z.string()).nullish() }).transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
});
