import { z } from 'zod';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const team: any = z.lazy(() => {
  return z.object({
    acronym: z.string().nullable(),
    currentVideogame: z.any().nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    location: z.string().nullable(),
    modifiedAt: z.string().min(1),
    name: z.string(),
    players: z.array(basePlayer),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
  });
});

/**
 *
 * @typedef  {Team} team
 * @property {string}
 * @property {any}
 * @property {number}
 * @property {string} - URL of the team logo
 * @property {string} - The team's organization location
 * @property {string}
 * @property {string} - The name of the team.
 * @property {BasePlayer[]}
 * @property {string}
 */
export type Team = z.infer<typeof team>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamResponse: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullable(),
      current_videogame: z.any().nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      location: z.string().nullable(),
      modified_at: z.string().min(1),
      name: z.string(),
      players: z.array(basePlayerResponse),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      currentVideogame: data['current_videogame'],
      id: data['id'],
      imageUrl: data['image_url'],
      location: data['location'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRequest: any = z.lazy(() => {
  return z
    .object({
      acronym: z.string().nullish(),
      currentVideogame: z.any().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      location: z.string().nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      players: z.array(basePlayerRequest).nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      acronym: data['acronym'],
      current_videogame: data['currentVideogame'],
      id: data['id'],
      image_url: data['imageUrl'],
      location: data['location'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
    }));
});
