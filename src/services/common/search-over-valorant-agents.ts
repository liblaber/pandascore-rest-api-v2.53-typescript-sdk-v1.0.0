import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverValorantAgents = z.object({
  name: z.string().optional(),
});

/**
 *
 * @typedef  {SearchOverValorantAgents} searchOverValorantAgents
 * @property {string} - Name of the agent
 */
export type SearchOverValorantAgents = z.infer<typeof searchOverValorantAgents>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantAgentsResponse = z
  .object({
    name: z.string().optional(),
  })
  .transform((data) => ({
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantAgentsRequest = z
  .object({ name: z.string().nullish() })
  .transform((data) => ({
    name: data['name'],
  }));
