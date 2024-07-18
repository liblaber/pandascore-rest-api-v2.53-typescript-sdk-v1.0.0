import { z } from 'zod';
import { loLRuneReforged, loLRuneReforgedRequest, loLRuneReforgedResponse } from './lo-l-rune-reforged';
import { loLRuneReforgedType } from './lo-l-rune-reforged-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const secondaryPath: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string(),
    lesserRunes: z.array(loLRuneReforged),
    name: z.string(),
    type: loLRuneReforgedType,
  });
});

/**
 *
 * @typedef  {SecondaryPath} secondaryPath
 * @property {number} - ID of the rune
 * @property {string} - URL to an image of the rune
 * @property {LoLRuneReforged[]}
 * @property {string} - Name of the rune path
 * @property {LoLRuneReforgedType}
 */
export type SecondaryPath = z.infer<typeof secondaryPath>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const secondaryPathResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string(),
      lesser_runes: z.array(loLRuneReforgedResponse),
      name: z.string(),
      type: loLRuneReforgedType,
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      lesserRunes: data['lesser_runes'],
      name: data['name'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const secondaryPathRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      lesserRunes: z.array(loLRuneReforgedRequest).nullish(),
      name: z.string().nullish(),
      type: loLRuneReforgedType.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      lesser_runes: data['lesserRunes'],
      name: data['name'],
      type: data['type'],
    }));
});
