import { z } from 'zod';
import {
  loLPlayersRoleDetail,
  loLPlayersRoleDetailRequest,
  loLPlayersRoleDetailResponse,
} from './lo-l-players-role-detail';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayersRole = z.object({
  adc: loLPlayersRoleDetail,
  jun: loLPlayersRoleDetail,
  mid: loLPlayersRoleDetail,
  sup: loLPlayersRoleDetail,
  top: loLPlayersRoleDetail,
});

/**
 *
 * @typedef  {LoLPlayersRole} loLPlayersRole
 * @property {LoLPlayersRoleDetail}
 * @property {LoLPlayersRoleDetail}
 * @property {LoLPlayersRoleDetail}
 * @property {LoLPlayersRoleDetail}
 * @property {LoLPlayersRoleDetail}
 */
export type LoLPlayersRole = z.infer<typeof loLPlayersRole>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayersRoleResponse = z
  .object({
    adc: loLPlayersRoleDetailResponse,
    jun: loLPlayersRoleDetailResponse,
    mid: loLPlayersRoleDetailResponse,
    sup: loLPlayersRoleDetailResponse,
    top: loLPlayersRoleDetailResponse,
  })
  .transform((data) => ({
    adc: data['adc'],
    jun: data['jun'],
    mid: data['mid'],
    sup: data['sup'],
    top: data['top'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayersRoleRequest = z
  .object({
    adc: loLPlayersRoleDetailRequest.nullish(),
    jun: loLPlayersRoleDetailRequest.nullish(),
    mid: loLPlayersRoleDetailRequest.nullish(),
    sup: loLPlayersRoleDetailRequest.nullish(),
    top: loLPlayersRoleDetailRequest.nullish(),
  })
  .transform((data) => ({
    adc: data['adc'],
    jun: data['jun'],
    mid: data['mid'],
    sup: data['sup'],
    top: data['top'],
  }));
