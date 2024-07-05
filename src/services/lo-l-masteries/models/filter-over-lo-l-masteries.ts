import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLoLMasteries = z.object({
  id: z.array(z.number()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverLoLMasteries} filterOverLoLMasteries
 * @property {number[]}
 * @property {string[]}
 */
export type FilterOverLoLMasteries = z.infer<typeof filterOverLoLMasteries>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLMasteriesResponse = z
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
export const filterOverLoLMasteriesRequest = z
  .object({ id: z.array(z.number()).nullish(), name: z.array(z.string()).nullish() })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
