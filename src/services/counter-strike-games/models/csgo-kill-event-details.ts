import { z } from 'zod';
import { killer, killerRequest, killerResponse } from './killer';
import {
  csgoRoundPlayer,
  csgoRoundPlayerRequest,
  csgoRoundPlayerResponse,
} from './csgo-round-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoKillEventDetails = z.object({
  killer: killer,
  victim: csgoRoundPlayer,
});

/**
 *
 * @typedef  {CsgoKillEventDetails} csgoKillEventDetails
 * @property {Killer}
 * @property {CsgoRoundPlayer}
 */
export type CsgoKillEventDetails = z.infer<typeof csgoKillEventDetails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoKillEventDetailsResponse = z
  .object({
    killer: killerResponse,
    victim: csgoRoundPlayerResponse,
  })
  .transform((data) => ({
    killer: data['killer'],
    victim: data['victim'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoKillEventDetailsRequest = z
  .object({ killer: killerRequest.nullish(), victim: csgoRoundPlayerRequest.nullish() })
  .transform((data) => ({
    killer: data['killer'],
    victim: data['victim'],
  }));
