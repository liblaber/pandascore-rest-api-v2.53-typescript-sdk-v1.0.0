import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverTeams: any = z.lazy(() => {
  return z.object({
    acronym: z.string().optional(),
    location: z.string().optional(),
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  });
});

/**
 *
 * @typedef  {SearchOverTeams} searchOverTeams
 * @property {string}
 * @property {string} - The team's organization location
 * @property {string} - The name of the team.
 * @property {string}
 */
export type SearchOverTeams = z.infer<typeof searchOverTeams>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverTeamsResponse: any = z.lazy(() => {
  return z
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
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverTeamsRequest: any = z.lazy(() => {
  return z
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
});