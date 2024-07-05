import { z } from 'zod';
import { loLDrakeName } from './lo-l-drake-name';
import { loLDrakeType } from './lo-l-drake-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventDrakeObject = z.object({
  name: loLDrakeName,
  type_: loLDrakeType,
});

/**
 *
 * @typedef  {LoLEventDrakeObject} loLEventDrakeObject
 * @property {LoLDrakeName}
 * @property {LoLDrakeType}
 */
export type LoLEventDrakeObject = z.infer<typeof loLEventDrakeObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventDrakeObjectResponse = z
  .object({
    name: loLDrakeName,
    type: loLDrakeType,
  })
  .transform((data) => ({
    name: data['name'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventDrakeObjectRequest = z
  .object({ name: loLDrakeName.nullish(), type_: loLDrakeType.nullish() })
  .transform((data) => ({
    name: data['name'],
    type: data['type_'],
  }));
