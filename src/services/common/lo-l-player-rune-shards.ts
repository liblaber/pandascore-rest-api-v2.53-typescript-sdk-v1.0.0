import { z } from 'zod';
import { defense, defenseRequest, defenseResponse } from './defense';
import { flex, flexRequest, flexResponse } from './flex';
import { offense, offenseRequest, offenseResponse } from './offense';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerRuneShards: any = z.lazy(() => {
  return z.object({
    defense: defense.nullable(),
    flex: flex.nullable(),
    offense: offense.nullable(),
  });
});

/**
 *
 * @typedef  {LoLPlayerRuneShards} loLPlayerRuneShards
 * @property {Defense}
 * @property {Flex}
 * @property {Offense}
 */
export type LoLPlayerRuneShards = z.infer<typeof loLPlayerRuneShards>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerRuneShardsResponse: any = z.lazy(() => {
  return z
    .object({
      defense: defenseResponse.nullable(),
      flex: flexResponse.nullable(),
      offense: offenseResponse.nullable(),
    })
    .transform((data) => ({
      defense: data['defense'],
      flex: data['flex'],
      offense: data['offense'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerRuneShardsRequest: any = z.lazy(() => {
  return z
    .object({ defense: defenseRequest.nullish(), flex: flexRequest.nullish(), offense: offenseRequest.nullish() })
    .transform((data) => ({
      defense: data['defense'],
      flex: data['flex'],
      offense: data['offense'],
    }));
});
