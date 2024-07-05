import { z } from 'zod';
import { videogameId } from './videogame-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tournamentVideogameTitle = z.object({
  id: z.number().gte(1),
  name: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  videogameId1: videogameId,
});

/**
 *
 * @typedef  {TournamentVideogameTitle} tournamentVideogameTitle
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {VideogameId} - A videogame ID
 */
export type TournamentVideogameTitle = z.infer<typeof tournamentVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentVideogameTitleResponse = z
  .object({
    id: z.number().gte(1),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    videogame_id: videogameId,
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    slug: data['slug'],
    videogameId1: data['videogame_id'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentVideogameTitleRequest = z
  .object({
    id: z.number().nullish(),
    name: z.string().nullish(),
    slug: z.string().nullish(),
    videogameId1: videogameId.nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    slug: data['slug'],
    videogame_id: data['videogameId1'],
  }));
