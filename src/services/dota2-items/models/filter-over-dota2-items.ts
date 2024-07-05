import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2Items = z.object({
  id: z.array(z.number()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverDota2Items} filterOverDota2Items
 * @property {number[]}
 * @property {string[]}
 */
export type FilterOverDota2Items = z.infer<typeof filterOverDota2Items>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2ItemsResponse = z
  .object({
    id: z.array(z.number()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2ItemsRequest = z
  .object({ id: z.array(z.number()).nullish(), name: z.array(z.string()).nullish() })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
