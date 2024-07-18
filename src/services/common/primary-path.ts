import { z } from 'zod';
import { loLRuneReforged, loLRuneReforgedRequest, loLRuneReforgedResponse } from './lo-l-rune-reforged';
import { loLRuneReforgedType } from './lo-l-rune-reforged-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const primaryPath: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string(),
    keystone: loLRuneReforged,
    lesserRunes: z.array(loLRuneReforged),
    name: z.string(),
    type: loLRuneReforgedType,
  });
});

/**
 *
 * @typedef  {PrimaryPath} primaryPath
 * @property {number} - ID of the rune
 * @property {string} - URL to an image of the rune
 * @property {LoLRuneReforged}
 * @property {LoLRuneReforged[]}
 * @property {string} - Name of the rune path
 * @property {LoLRuneReforgedType}
 */
export type PrimaryPath = z.infer<typeof primaryPath>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const primaryPathResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string(),
      keystone: loLRuneReforgedResponse,
      lesser_runes: z.array(loLRuneReforgedResponse),
      name: z.string(),
      type: loLRuneReforgedType,
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      keystone: data['keystone'],
      lesserRunes: data['lesser_runes'],
      name: data['name'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const primaryPathRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      keystone: loLRuneReforgedRequest.nullish(),
      lesserRunes: z.array(loLRuneReforgedRequest).nullish(),
      name: z.string().nullish(),
      type: loLRuneReforgedType.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      keystone: data['keystone'],
      lesser_runes: data['lesserRunes'],
      name: data['name'],
      type: data['type'],
    }));
});
