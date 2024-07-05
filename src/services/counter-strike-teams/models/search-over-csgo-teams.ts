import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverCsgoTeams = z.object({
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
 * @typedef  {SearchOverCsgoTeams} searchOverCsgoTeams
 * @property {string}
 * @property {string} - The team's organization location
 * @property {string} - The name of the team.
 * @property {string}
 */
export type SearchOverCsgoTeams = z.infer<typeof searchOverCsgoTeams>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoTeamsResponse = z
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
export const searchOverCsgoTeamsRequest = z
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
