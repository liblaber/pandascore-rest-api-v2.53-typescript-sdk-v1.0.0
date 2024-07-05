import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const opponent2_3 = z.object({
  acronym: z.string(),
  id: z.number().gte(1),
  imageUrl: z.string(),
  location: z.string(),
  modifiedAt: z.string().min(1),
  name: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {Opponent2_3} opponent2_3
 * @property {string}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {string} - The team's organization location
 * @property {string}
 * @property {string} - The name of the team.
 * @property {string}
 */
export type Opponent2_3 = z.infer<typeof opponent2_3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const opponent2_3Response = z
  .object({
    acronym: z.string(),
    id: z.number().gte(1),
    image_url: z.string(),
    location: z.string(),
    modified_at: z.string().min(1),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const opponent2_3Request = z
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
