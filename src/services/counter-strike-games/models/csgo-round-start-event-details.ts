import { z } from 'zod';
import { csgoRoundsScore, csgoRoundsScoreRequest, csgoRoundsScoreResponse } from '../../common/csgo-rounds-score';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundStartEventDetails: any = z.lazy(() => {
  return z.object({
    counterTerrorists: csgoRoundsScore,
    terrorists: csgoRoundsScore,
  });
});

/**
 *
 * @typedef  {CsgoRoundStartEventDetails} csgoRoundStartEventDetails
 * @property {CsgoRoundsScore}
 * @property {CsgoRoundsScore}
 */
export type CsgoRoundStartEventDetails = z.infer<typeof csgoRoundStartEventDetails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundStartEventDetailsResponse: any = z.lazy(() => {
  return z
    .object({
      counter_terrorists: csgoRoundsScoreResponse,
      terrorists: csgoRoundsScoreResponse,
    })
    .transform((data) => ({
      counterTerrorists: data['counter_terrorists'],
      terrorists: data['terrorists'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundStartEventDetailsRequest: any = z.lazy(() => {
  return z
    .object({ counterTerrorists: csgoRoundsScoreRequest.nullish(), terrorists: csgoRoundsScoreRequest.nullish() })
    .transform((data) => ({
      counter_terrorists: data['counterTerrorists'],
      terrorists: data['terrorists'],
    }));
});
