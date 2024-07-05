import { z } from 'zod';
import {
  loLRunePathRunesObject,
  loLRunePathRunesObjectRequest,
  loLRunePathRunesObjectResponse,
} from './lo-l-rune-path-runes-object';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLRunePath = z.object({
  id: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  runes: loLRunePathRunesObject,
  videogameVersions: z.array(z.string()),
});

/**
 *
 * @typedef  {LoLRunePath} loLRunePath
 * @property {number} - ID of the rune path
 * @property {string} - URL to an image of the rune path
 * @property {string} - Name of the rune
 * @property {LoLRunePathRunesObject}
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type LoLRunePath = z.infer<typeof loLRunePath>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLRunePathResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    runes: loLRunePathRunesObjectResponse,
    videogame_versions: z.array(z.string()),
  })
  .transform((data) => ({
    id: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    runes: data['runes'],
    videogameVersions: data['videogame_versions'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLRunePathRequest = z
  .object({
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    runes: loLRunePathRunesObjectRequest.nullish(),
    videogameVersions: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    image_url: data['imageUrl'],
    name: data['name'],
    runes: data['runes'],
    videogame_versions: data['videogameVersions'],
  }));
