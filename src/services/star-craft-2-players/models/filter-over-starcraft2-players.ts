// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraft2Players = z.lazy(() => {
  return z.object({
    active: z.boolean().optional(),
    birthday: z.array(z.string()).min(1).optional(),
    firstName: z.array(z.string()).min(1).optional(),
    id: z.array(z.number()).min(1).optional(),
    lastName: z.array(z.string()).min(1).optional(),
    modifiedAt: z.array(z.string()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    nationality: z.array(z.string()).min(1).optional(),
    role: z.array(z.string()).min(1).optional(),
    slug: z.array(z.string()).min(1).optional(),
    teamId: z.array(z.number()).min(1).optional(),
    videogameId: z.array(z.number()).min(1).optional(),
  });
});

/**
 *
 * @typedef  {FilterOverStarcraft2Players} filterOverStarcraft2Players
 * @property {boolean} - Whether player is active
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {VideogameId[]}
 */
export type FilterOverStarcraft2Players = z.infer<typeof filterOverStarcraft2Players>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2PlayersResponse = z.lazy(() => {
  return z
    .object({
      active: z.boolean().optional(),
      birthday: z.array(z.string()).min(1).optional(),
      first_name: z.array(z.string()).min(1).optional(),
      id: z.array(z.number()).min(1).optional(),
      last_name: z.array(z.string()).min(1).optional(),
      modified_at: z.array(z.string()).min(1).optional(),
      name: z.array(z.string()).min(1).optional(),
      nationality: z.array(z.string()).min(1).optional(),
      role: z.array(z.string()).min(1).optional(),
      slug: z.array(z.string()).min(1).optional(),
      team_id: z.array(z.number()).min(1).optional(),
      videogame_id: z.array(z.number()).min(1).optional(),
    })
    .transform((data) => ({
      active: data['active'],
      birthday: data['birthday'],
      firstName: data['first_name'],
      id: data['id'],
      lastName: data['last_name'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      nationality: data['nationality'],
      role: data['role'],
      slug: data['slug'],
      teamId: data['team_id'],
      videogameId: data['videogame_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2PlayersRequest = z.lazy(() => {
  return z
    .object({
      active: z.boolean().nullish(),
      birthday: z.array(z.string()).nullish(),
      firstName: z.array(z.string()).nullish(),
      id: z.array(z.number()).nullish(),
      lastName: z.array(z.string()).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      nationality: z.array(z.string()).nullish(),
      role: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
      teamId: z.array(z.number()).nullish(),
      videogameId: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      active: data['active'],
      birthday: data['birthday'],
      first_name: data['firstName'],
      id: data['id'],
      last_name: data['lastName'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      nationality: data['nationality'],
      role: data['role'],
      slug: data['slug'],
      team_id: data['teamId'],
      videogame_id: data['videogameId'],
    }));
});
