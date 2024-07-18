import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLWards: any = z.lazy(() => {
  return z.object({
    placed: z.number().gte(0).nullable(),
    sightWardsBoughtInGame: z.number().gte(0).nullable(),
    visionWardsBoughtInGame: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLWards} loLWards
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type LoLWards = z.infer<typeof loLWards>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLWardsResponse: any = z.lazy(() => {
  return z
    .object({
      placed: z.number().gte(0).nullable(),
      sight_wards_bought_in_game: z.number().gte(0).nullable(),
      vision_wards_bought_in_game: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      placed: data['placed'],
      sightWardsBoughtInGame: data['sight_wards_bought_in_game'],
      visionWardsBoughtInGame: data['vision_wards_bought_in_game'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLWardsRequest: any = z.lazy(() => {
  return z
    .object({
      placed: z.number().nullish(),
      sightWardsBoughtInGame: z.number().nullish(),
      visionWardsBoughtInGame: z.number().nullish(),
    })
    .transform((data) => ({
      placed: data['placed'],
      sight_wards_bought_in_game: data['sightWardsBoughtInGame'],
      vision_wards_bought_in_game: data['visionWardsBoughtInGame'],
    }));
});