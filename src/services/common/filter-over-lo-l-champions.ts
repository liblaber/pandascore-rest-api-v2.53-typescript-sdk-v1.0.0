import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLoLChampions = z.object({
  armor: z.array(z.number()).min(1).optional(),
  armorperlevel: z.array(z.number()).min(1).optional(),
  attackdamage: z.array(z.number()).min(1).optional(),
  attackdamageperlevel: z.array(z.number()).min(1).optional(),
  attackrange: z.array(z.number()).min(1).optional(),
  attackspeedoffset: z.array(z.number()).min(1).optional(),
  attackspeedperlevel: z.array(z.number()).min(1).optional(),
  crit: z.array(z.number()).min(1).optional(),
  critperlevel: z.array(z.number()).min(1).optional(),
  hp: z.array(z.number()).min(1).optional(),
  hpperlevel: z.array(z.number()).min(1).optional(),
  hpregen: z.array(z.number()).min(1).optional(),
  hpregenperlevel: z.array(z.number()).min(1).optional(),
  id: z.array(z.number()).min(1).optional(),
  movespeed: z.array(z.number()).min(1).optional(),
  mp: z.array(z.number()).min(1).optional(),
  mpperlevel: z.array(z.number()).min(1).optional(),
  mpregen: z.array(z.number()).min(1).optional(),
  mpregenperlevel: z.array(z.number()).min(1).optional(),
  name: z.array(z.string()).min(1).optional(),
  spellblock: z.array(z.number()).min(1).optional(),
  spellblockperlevel: z.array(z.number()).min(1).optional(),
  videogameVersion: z.any().optional(),
});

/**
 *
 * @typedef  {FilterOverLoLChampions} filterOverLoLChampions
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
 * @property {any} - Filter by the names of videogame versions, all versions using `filter[videogame_version]=all`, or by the latest version using `filter[videogame_version]=latest`
 */
export type FilterOverLoLChampions = z.infer<typeof filterOverLoLChampions>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLChampionsResponse = z
  .object({
    armor: z.array(z.number()).min(1).optional(),
    armorperlevel: z.array(z.number()).min(1).optional(),
    attackdamage: z.array(z.number()).min(1).optional(),
    attackdamageperlevel: z.array(z.number()).min(1).optional(),
    attackrange: z.array(z.number()).min(1).optional(),
    attackspeedoffset: z.array(z.number()).min(1).optional(),
    attackspeedperlevel: z.array(z.number()).min(1).optional(),
    crit: z.array(z.number()).min(1).optional(),
    critperlevel: z.array(z.number()).min(1).optional(),
    hp: z.array(z.number()).min(1).optional(),
    hpperlevel: z.array(z.number()).min(1).optional(),
    hpregen: z.array(z.number()).min(1).optional(),
    hpregenperlevel: z.array(z.number()).min(1).optional(),
    id: z.array(z.number()).min(1).optional(),
    movespeed: z.array(z.number()).min(1).optional(),
    mp: z.array(z.number()).min(1).optional(),
    mpperlevel: z.array(z.number()).min(1).optional(),
    mpregen: z.array(z.number()).min(1).optional(),
    mpregenperlevel: z.array(z.number()).min(1).optional(),
    name: z.array(z.string()).min(1).optional(),
    spellblock: z.array(z.number()).min(1).optional(),
    spellblockperlevel: z.array(z.number()).min(1).optional(),
    videogame_version: z.any().optional(),
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
    videogameVersion: data['videogame_version'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLChampionsRequest = z
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
    videogameVersion: z.any().nullish(),
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
    videogame_version: data['videogameVersion'],
  }));
