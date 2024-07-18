import { z } from 'zod';
import { primaryPath, primaryPathRequest, primaryPathResponse } from './primary-path';
import { secondaryPath, secondaryPathRequest, secondaryPathResponse } from './secondary-path';
import {
  loLPlayerRuneShards,
  loLPlayerRuneShardsRequest,
  loLPlayerRuneShardsResponse,
} from './lo-l-player-rune-shards';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerRunesReforged: any = z.lazy(() => {
  return z.object({
    primaryPath: primaryPath.nullable(),
    secondaryPath: secondaryPath.nullable(),
    shards: loLPlayerRuneShards,
  });
});

/**
 *
 * @typedef  {LoLPlayerRunesReforged} loLPlayerRunesReforged
 * @property {PrimaryPath}
 * @property {SecondaryPath}
 * @property {LoLPlayerRuneShards}
 */
export type LoLPlayerRunesReforged = z.infer<typeof loLPlayerRunesReforged>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerRunesReforgedResponse: any = z.lazy(() => {
  return z
    .object({
      primary_path: primaryPathResponse.nullable(),
      secondary_path: secondaryPathResponse.nullable(),
      shards: loLPlayerRuneShardsResponse,
    })
    .transform((data) => ({
      primaryPath: data['primary_path'],
      secondaryPath: data['secondary_path'],
      shards: data['shards'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerRunesReforgedRequest: any = z.lazy(() => {
  return z
    .object({
      primaryPath: primaryPathRequest.nullish(),
      secondaryPath: secondaryPathRequest.nullish(),
      shards: loLPlayerRuneShardsRequest.nullish(),
    })
    .transform((data) => ({
      primary_path: data['primaryPath'],
      secondary_path: data['secondaryPath'],
      shards: data['shards'],
    }));
});