import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverValorantTeams: any = z.lazy(() => {
  return z.object({
    acronym: z.array(z.string()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    location: z.array(z.string()).min(2).max(2).optional(),
    modifiedAt: z.array(z.string()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverValorantTeams} rangeOverValorantTeams
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 */
export type RangeOverValorantTeams = z.infer<typeof rangeOverValorantTeams>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantTeamsResponse: any = z.lazy(() => {
  return z
    .object({
      acronym: z.array(z.string()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      location: z.array(z.string()).min(2).max(2).optional(),
      modified_at: z.array(z.string()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
      slug: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      location: data['location'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantTeamsRequest: any = z.lazy(() => {
  return z
    .object({
      acronym: z.array(z.string()).nullish(),
      id: z.array(z.number()).nullish(),
      location: z.array(z.string()).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      location: data['location'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      slug: data['slug'],
    }));
});