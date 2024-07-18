import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverR6SiegePlayers: any = z.lazy(() => {
  return z.object({
    birthday: z.array(z.string()).min(2).max(2).optional(),
    firstName: z.array(z.string()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    lastName: z.array(z.string()).min(2).max(2).optional(),
    modifiedAt: z.array(z.string()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    nationality: z.array(z.string()).min(2).max(2).optional(),
    role: z.array(z.string()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverR6SiegePlayers} rangeOverR6SiegePlayers
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 */
export type RangeOverR6SiegePlayers = z.infer<typeof rangeOverR6SiegePlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverR6SiegePlayersResponse: any = z.lazy(() => {
  return z
    .object({
      birthday: z.array(z.string()).min(2).max(2).optional(),
      first_name: z.array(z.string()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      last_name: z.array(z.string()).min(2).max(2).optional(),
      modified_at: z.array(z.string()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
      nationality: z.array(z.string()).min(2).max(2).optional(),
      role: z.array(z.string()).min(2).max(2).optional(),
      slug: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      birthday: data['birthday'],
      firstName: data['first_name'],
      id: data['id'],
      lastName: data['last_name'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      nationality: data['nationality'],
      role: data['role'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverR6SiegePlayersRequest: any = z.lazy(() => {
  return z
    .object({
      birthday: z.array(z.string()).nullish(),
      firstName: z.array(z.string()).nullish(),
      id: z.array(z.number()).nullish(),
      lastName: z.array(z.string()).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      nationality: z.array(z.string()).nullish(),
      role: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      birthday: data['birthday'],
      first_name: data['firstName'],
      id: data['id'],
      last_name: data['lastName'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      nationality: data['nationality'],
      role: data['role'],
      slug: data['slug'],
    }));
});
