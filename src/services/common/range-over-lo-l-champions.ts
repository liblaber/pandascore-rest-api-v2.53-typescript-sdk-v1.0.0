import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverLoLChampions = z.object({
  armor: z.array(z.number()).min(2).max(2).optional(),
  armorperlevel: z.array(z.number()).min(2).max(2).optional(),
  attackdamage: z.array(z.number()).min(2).max(2).optional(),
  attackdamageperlevel: z.array(z.number()).min(2).max(2).optional(),
  attackrange: z.array(z.number()).min(2).max(2).optional(),
  attackspeedoffset: z.array(z.number()).min(2).max(2).optional(),
  attackspeedperlevel: z.array(z.number()).min(2).max(2).optional(),
  crit: z.array(z.number()).min(2).max(2).optional(),
  critperlevel: z.array(z.number()).min(2).max(2).optional(),
  hp: z.array(z.number()).min(2).max(2).optional(),
  hpperlevel: z.array(z.number()).min(2).max(2).optional(),
  hpregen: z.array(z.number()).min(2).max(2).optional(),
  hpregenperlevel: z.array(z.number()).min(2).max(2).optional(),
  id: z.array(z.number()).min(2).max(2).optional(),
  movespeed: z.array(z.number()).min(2).max(2).optional(),
  mp: z.array(z.number()).min(2).max(2).optional(),
  mpperlevel: z.array(z.number()).min(2).max(2).optional(),
  mpregen: z.array(z.number()).min(2).max(2).optional(),
  mpregenperlevel: z.array(z.number()).min(2).max(2).optional(),
  name: z.array(z.string()).min(2).max(2).optional(),
  spellblock: z.array(z.number()).min(2).max(2).optional(),
  spellblockperlevel: z.array(z.number()).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverLoLChampions} rangeOverLoLChampions
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 * @property {number[]}
 * @property {number[]}
 */
export type RangeOverLoLChampions = z.infer<typeof rangeOverLoLChampions>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLChampionsResponse = z
  .object({
    armor: z.array(z.number()).min(2).max(2).optional(),
    armorperlevel: z.array(z.number()).min(2).max(2).optional(),
    attackdamage: z.array(z.number()).min(2).max(2).optional(),
    attackdamageperlevel: z.array(z.number()).min(2).max(2).optional(),
    attackrange: z.array(z.number()).min(2).max(2).optional(),
    attackspeedoffset: z.array(z.number()).min(2).max(2).optional(),
    attackspeedperlevel: z.array(z.number()).min(2).max(2).optional(),
    crit: z.array(z.number()).min(2).max(2).optional(),
    critperlevel: z.array(z.number()).min(2).max(2).optional(),
    hp: z.array(z.number()).min(2).max(2).optional(),
    hpperlevel: z.array(z.number()).min(2).max(2).optional(),
    hpregen: z.array(z.number()).min(2).max(2).optional(),
    hpregenperlevel: z.array(z.number()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    movespeed: z.array(z.number()).min(2).max(2).optional(),
    mp: z.array(z.number()).min(2).max(2).optional(),
    mpperlevel: z.array(z.number()).min(2).max(2).optional(),
    mpregen: z.array(z.number()).min(2).max(2).optional(),
    mpregenperlevel: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    spellblock: z.array(z.number()).min(2).max(2).optional(),
    spellblockperlevel: z.array(z.number()).min(2).max(2).optional(),
  })
  .transform((data) => ({
    armor: data['armor'],
    armorperlevel: data['armorperlevel'],
    attackdamage: data['attackdamage'],
    attackdamageperlevel: data['attackdamageperlevel'],
    attackrange: data['attackrange'],
    attackspeedoffset: data['attackspeedoffset'],
    attackspeedperlevel: data['attackspeedperlevel'],
    crit: data['crit'],
    critperlevel: data['critperlevel'],
    hp: data['hp'],
    hpperlevel: data['hpperlevel'],
    hpregen: data['hpregen'],
    hpregenperlevel: data['hpregenperlevel'],
    id: data['id'],
    movespeed: data['movespeed'],
    mp: data['mp'],
    mpperlevel: data['mpperlevel'],
    mpregen: data['mpregen'],
    mpregenperlevel: data['mpregenperlevel'],
    name: data['name'],
    spellblock: data['spellblock'],
    spellblockperlevel: data['spellblockperlevel'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLChampionsRequest = z
  .object({
    armor: z.array(z.number()).nullish(),
    armorperlevel: z.array(z.number()).nullish(),
    attackdamage: z.array(z.number()).nullish(),
    attackdamageperlevel: z.array(z.number()).nullish(),
    attackrange: z.array(z.number()).nullish(),
    attackspeedoffset: z.array(z.number()).nullish(),
    attackspeedperlevel: z.array(z.number()).nullish(),
    crit: z.array(z.number()).nullish(),
    critperlevel: z.array(z.number()).nullish(),
    hp: z.array(z.number()).nullish(),
    hpperlevel: z.array(z.number()).nullish(),
    hpregen: z.array(z.number()).nullish(),
    hpregenperlevel: z.array(z.number()).nullish(),
    id: z.array(z.number()).nullish(),
    movespeed: z.array(z.number()).nullish(),
    mp: z.array(z.number()).nullish(),
    mpperlevel: z.array(z.number()).nullish(),
    mpregen: z.array(z.number()).nullish(),
    mpregenperlevel: z.array(z.number()).nullish(),
    name: z.array(z.string()).nullish(),
    spellblock: z.array(z.number()).nullish(),
    spellblockperlevel: z.array(z.number()).nullish(),
  })
  .transform((data) => ({
    armor: data['armor'],
    armorperlevel: data['armorperlevel'],
    attackdamage: data['attackdamage'],
    attackdamageperlevel: data['attackdamageperlevel'],
    attackrange: data['attackrange'],
    attackspeedoffset: data['attackspeedoffset'],
    attackspeedperlevel: data['attackspeedperlevel'],
    crit: data['crit'],
    critperlevel: data['critperlevel'],
    hp: data['hp'],
    hpperlevel: data['hpperlevel'],
    hpregen: data['hpregen'],
    hpregenperlevel: data['hpregenperlevel'],
    id: data['id'],
    movespeed: data['movespeed'],
    mp: data['mp'],
    mpperlevel: data['mpperlevel'],
    mpregen: data['mpregen'],
    mpregenperlevel: data['mpregenperlevel'],
    name: data['name'],
    spellblock: data['spellblock'],
    spellblockperlevel: data['spellblockperlevel'],
  }));
