import { z } from 'zod';
import { videogameId } from './videogame-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2Teams = z.object({
  acronym: z.array(z.string()).min(1).optional(),
  id: z.array(z.number()).min(1).optional(),
  location: z.array(z.string()).min(1).optional(),
  modifiedAt: z.array(z.string()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  slug: z.array(z.string()).min(1).optional(),
  videogameId: z.array(videogameId).min(1).optional(),
});

/**
 *
 * @typedef  {FilterOverDota2Teams} filterOverDota2Teams
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {VideogameId[]}
 */
export type FilterOverDota2Teams = z.infer<typeof filterOverDota2Teams>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2TeamsResponse = z
  .object({
    acronym: z.array(z.string()).min(1).optional(),
    id: z.array(z.number()).min(1).optional(),
    location: z.array(z.string()).min(1).optional(),
    modified_at: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    videogame_id: z.array(videogameId).min(1).optional(),
  })
  .transform((data) => ({
    acronym: data['acronym'],
    id: data['id'],
    location: data['location'],
    modifiedAt: data['modified_at'],
    name: data['name'],
    slug: data['slug'],
    videogameId: data['videogame_id'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2TeamsRequest = z
  .object({
    acronym: z.array(z.string()).nullish(),
    id: z.array(z.number()).nullish(),
    location: z.array(z.string()).nullish(),
    modifiedAt: z.array(z.string()).nullish(),
    name: z.array(z.string()).nullish(),
    slug: z.array(z.string()).nullish(),
    videogameId: z.array(videogameId).nullish(),
  })
  .transform((data) => ({
    acronym: data['acronym'],
    id: data['id'],
    location: data['location'],
    modified_at: data['modifiedAt'],
    name: data['name'],
    slug: data['slug'],
    videogame_id: data['videogameId'],
  }));
