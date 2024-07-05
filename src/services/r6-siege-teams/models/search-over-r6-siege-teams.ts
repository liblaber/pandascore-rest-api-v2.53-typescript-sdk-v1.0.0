import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverR6SiegeTeams = z.object({
  acronym: z.string().optional(),
  location: z.string().optional(),
  name: z.string().optional(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/)
    .optional(),
});

/**
 *
 * @typedef  {SearchOverR6SiegeTeams} searchOverR6SiegeTeams
 * @property {string}
 * @property {string} - The team's organization location
 * @property {string} - The name of the team.
 * @property {string}
 */
export type SearchOverR6SiegeTeams = z.infer<typeof searchOverR6SiegeTeams>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverR6SiegeTeamsResponse = z
  .object({
    acronym: z.string().optional(),
    location: z.string().optional(),
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  })
  .transform((data) => ({
    acronym: data['acronym'],
    location: data['location'],
    name: data['name'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverR6SiegeTeamsRequest = z
  .object({
    acronym: z.string().nullish(),
    location: z.string().nullish(),
    name: z.string().nullish(),
    slug: z.string().nullish(),
  })
  .transform((data) => ({
    acronym: data['acronym'],
    location: data['location'],
    name: data['name'],
    slug: data['slug'],
  }));
