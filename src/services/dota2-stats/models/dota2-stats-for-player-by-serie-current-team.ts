import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2StatsForPlayerBySerieCurrentTeam: any = z.lazy(() => {
  return z.object({
    acronym: z.string().nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    location: z.string().nullable(),
    modifiedAt: z.string().min(1),
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
 * @typedef  {Dota2StatsForPlayerBySerieCurrentTeam} dota2StatsForPlayerBySerieCurrentTeam
 * @property {string}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {string} - The team's organization location
 * @property {string}
 * @property {string} - The name of the team.
 * @property {string}
 */
export type Dota2StatsForPlayerBySerieCurrentTeam = z.infer<typeof dota2StatsForPlayerBySerieCurrentTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForPlayerBySerieCurrentTeamResponse: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      location: z.string().nullable(),
      modified_at: z.string().min(1),
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
      modifiedAt: data['modified_at'],
      name: data['name'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForPlayerBySerieCurrentTeamRequest: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      location: z.string().nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      id: data['id'],
      image_url: data['imageUrl'],
      location: data['location'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      slug: data['slug'],
    }));
});