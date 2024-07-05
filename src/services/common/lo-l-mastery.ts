import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMastery = z.object({
  id: z.number().gte(1),
  name: z.string(),
});

/**
 *
 * @typedef  {LoLMastery} loLMastery
 * @property {number}
 * @property {string}
 */
export type LoLMastery = z.infer<typeof loLMastery>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMasteryResponse = z
  .object({
    id: z.number().gte(1),
    name: z.string(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMasteryRequest = z
  .object({ id: z.number().nullish(), name: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
