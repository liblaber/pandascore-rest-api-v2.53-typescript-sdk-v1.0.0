import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseValorantTeam: any = z.lazy(() => {
  return z.object({
    acronym: z.string().nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    location: z.string().nullable(),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
  });
});

/**
 *
 * @typedef  {BaseValorantTeam} baseValorantTeam
 * @property {string}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {string} - The team's organization location
 * @property {string} - The name of the team.
 * @property {string}
 */
export type BaseValorantTeam = z.infer<typeof baseValorantTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseValorantTeamResponse: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      location: z.string().nullable(),
      name: z.string(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      imageUrl: data['image_url'],
      location: data['location'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseValorantTeamRequest: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      location: z.string().nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      image_url: data['imageUrl'],
      location: data['location'],
      name: data['name'],
      slug: data['slug'],
    }));
});