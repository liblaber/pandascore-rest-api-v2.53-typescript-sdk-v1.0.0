import { z } from 'zod';
import { defense, defenseRequest, defenseResponse } from './defense';
import { flex, flexRequest, flexResponse } from './flex';
import { offense, offenseRequest, offenseResponse } from './offense';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerRuneShards = z.object({
  defense: defense,
  flex: flex,
  offense: offense,
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
export const loLPlayerRuneShardsResponse = z
  .object({
    defense: defenseResponse,
    flex: flexResponse,
    offense: offenseResponse,
  })
  .transform((data) => ({
    defense: data['defense'],
    flex: data['flex'],
    offense: data['offense'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerRuneShardsRequest = z
  .object({
    defense: defenseRequest.nullish(),
    flex: flexRequest.nullish(),
    offense: offenseRequest.nullish(),
  })
  .transform((data) => ({
    defense: data['defense'],
    flex: data['flex'],
    offense: data['offense'],
  }));
