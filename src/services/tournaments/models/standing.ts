import { z } from 'zod';
import {
  bracketStanding,
  bracketStandingRequest,
  bracketStandingResponse,
} from './bracket-standing';
import { groupStanding, groupStandingRequest, groupStandingResponse } from './group-standing';

/**
 * The shape of the model inside the application code - what the users use
 */
export const standing = z.union([bracketStanding, groupStanding]);

/**
 *
 * @typedef  {Standing} standing
 * @property {BracketStanding}
 * @property {GroupStanding}
 */
export type Standing = z.infer<typeof standing>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const standingResponse = z.union([bracketStandingResponse, groupStandingResponse]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const standingRequest = z.union([bracketStandingRequest, groupStandingRequest]);
