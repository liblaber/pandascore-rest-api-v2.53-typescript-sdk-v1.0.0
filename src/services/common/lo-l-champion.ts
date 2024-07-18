import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLChampion: any = z.lazy(() => {
  return z.object({
    armor: z.number().gte(0),
    armorperlevel: z.number().gte(0),
    attackdamage: z.number().gte(0),
    attackdamageperlevel: z.number().gte(0),
    attackrange: z.number().gte(0),
    attackspeedoffset: z.number().nullable(),
    attackspeedperlevel: z.number().gte(0),
    bigImageUrl: z.string(),
    crit: z.number().gte(0),
    critperlevel: z.number().gte(0),
    hp: z.number().gte(0),
    hpperlevel: z.number().gte(0),
    hpregen: z.number().gte(0),
    hpregenperlevel: z.number().gte(0),
    id: z.number().gte(1),
    imageUrl: z.string(),
    movespeed: z.number().gte(0),
    mp: z.number().gte(0),
    mpperlevel: z.number().gte(0),
    mpregen: z.number().gte(0),
    mpregenperlevel: z.number().gte(0),
    name: z.string(),
    spellblock: z.number().gte(0),
    spellblockperlevel: z.number().gte(0),
    videogameVersions: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {LoLChampion} loLChampion
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type LoLChampion = z.infer<typeof loLChampion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLChampionResponse: any = z.lazy(() => {
  return z
    .object({
      armor: z.number().gte(0),
      armorperlevel: z.number().gte(0),
      attackdamage: z.number().gte(0),
      attackdamageperlevel: z.number().gte(0),
      attackrange: z.number().gte(0),
      attackspeedoffset: z.number().nullable(),
      attackspeedperlevel: z.number().gte(0),
      big_image_url: z.string(),
      crit: z.number().gte(0),
      critperlevel: z.number().gte(0),
      hp: z.number().gte(0),
      hpperlevel: z.number().gte(0),
      hpregen: z.number().gte(0),
      hpregenperlevel: z.number().gte(0),
      id: z.number().gte(1),
      image_url: z.string(),
      movespeed: z.number().gte(0),
      mp: z.number().gte(0),
      mpperlevel: z.number().gte(0),
      mpregen: z.number().gte(0),
      mpregenperlevel: z.number().gte(0),
      name: z.string(),
      spellblock: z.number().gte(0),
      spellblockperlevel: z.number().gte(0),
      videogame_versions: z.array(z.string()),
    })
    .transform((data) => ({
      armor: data['armor'],
      armorperlevel: data['armorperlevel'],
      attackdamage: data['attackdamage'],
      attackdamageperlevel: data['attackdamageperlevel'],
      attackrange: data['attackrange'],
      attackspeedoffset: data['attackspeedoffset'],
      attackspeedperlevel: data['attackspeedperlevel'],
      bigImageUrl: data['big_image_url'],
      crit: data['crit'],
      critperlevel: data['critperlevel'],
      hp: data['hp'],
      hpperlevel: data['hpperlevel'],
      hpregen: data['hpregen'],
      hpregenperlevel: data['hpregenperlevel'],
      id: data['id'],
      imageUrl: data['image_url'],
      movespeed: data['movespeed'],
      mp: data['mp'],
      mpperlevel: data['mpperlevel'],
      mpregen: data['mpregen'],
      mpregenperlevel: data['mpregenperlevel'],
      name: data['name'],
      spellblock: data['spellblock'],
      spellblockperlevel: data['spellblockperlevel'],
      videogameVersions: data['videogame_versions'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLChampionRequest: any = z.lazy(() => {
  return z
    .object({
      armor: z.number().nullish(),
      armorperlevel: z.number().nullish(),
      attackdamage: z.number().nullish(),
      attackdamageperlevel: z.number().nullish(),
      attackrange: z.number().nullish(),
      attackspeedoffset: z.number().nullish(),
      attackspeedperlevel: z.number().nullish(),
      bigImageUrl: z.string().nullish(),
      crit: z.number().nullish(),
      critperlevel: z.number().nullish(),
      hp: z.number().nullish(),
      hpperlevel: z.number().nullish(),
      hpregen: z.number().nullish(),
      hpregenperlevel: z.number().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      movespeed: z.number().nullish(),
      mp: z.number().nullish(),
      mpperlevel: z.number().nullish(),
      mpregen: z.number().nullish(),
      mpregenperlevel: z.number().nullish(),
      name: z.string().nullish(),
      spellblock: z.number().nullish(),
      spellblockperlevel: z.number().nullish(),
      videogameVersions: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      armor: data['armor'],
      armorperlevel: data['armorperlevel'],
      attackdamage: data['attackdamage'],
      attackdamageperlevel: data['attackdamageperlevel'],
      attackrange: data['attackrange'],
      attackspeedoffset: data['attackspeedoffset'],
      attackspeedperlevel: data['attackspeedperlevel'],
      big_image_url: data['bigImageUrl'],
      crit: data['crit'],
      critperlevel: data['critperlevel'],
      hp: data['hp'],
      hpperlevel: data['hpperlevel'],
      hpregen: data['hpregen'],
      hpregenperlevel: data['hpregenperlevel'],
      id: data['id'],
      image_url: data['imageUrl'],
      movespeed: data['movespeed'],
      mp: data['mp'],
      mpperlevel: data['mpperlevel'],
      mpregen: data['mpregen'],
      mpregenperlevel: data['mpregenperlevel'],
      name: data['name'],
      spellblock: data['spellblock'],
      spellblockperlevel: data['spellblockperlevel'],
      videogame_versions: data['videogameVersions'],
    }));
});
