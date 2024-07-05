# CounterStrikeWeaponsService

A list of all methods in the `CounterStrikeWeaponsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                          |
| :-------------------------------------------------------------------------- | :----------------------------------- |
| [get_csgo_weapons](#get_csgo_weapons)                                       | List weapons                         |
| [get_csgo_weapons_csgoWeaponIdOrSlug](#get_csgo_weapons_csgoweaponidorslug) | Get a single weapon by ID or by slug |

## get_csgo_weapons

List weapons

- HTTP Method: `GET`
- Endpoint: `/csgo/weapons`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoWeapons](../models/FilterOverCsgoWeapons.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoWeapons](../models/RangeOverCsgoWeapons.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoWeapons](../models/SearchOverCsgoWeapons.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`CsgoWeapon[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const csgoWeaponKind = CsgoWeaponKind.grenade;

  const filter: FilterOverCsgoWeapons = {
    ammoClipMax: [3],
    ammoMax: [5],
    cost: [3],
    id: [10],
    killReward: [2],
    kind: [csgoWeaponKind],
    name: ['labore'],
    slug: ['t17509_h'],
  };
  const csgoWeaponKind = CsgoWeaponKind.grenade;

  const range: RangeOverCsgoWeapons = {
    ammoClipMax: [2],
    ammoMax: [2],
    cost: [1],
    id: [8],
    killReward: [2],
    kind: [csgoWeaponKind],
    name: ['Lorem ma'],
    slug: ['5fo8zgst4js'],
  };
  const csgoWeaponKind = CsgoWeaponKind.grenade;

  const search: SearchOverCsgoWeapons = {
    kind: csgoWeaponKind,
    name: 'Excepteur e',
    slug: 'c',
  };
  const page = 1;

  const { data } = await pandascore.counterStrikeWeapons.getCsgoWeapons({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_weapons_csgoWeaponIdOrSlug

Get a single weapon by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/csgo/weapons/{csgo_weapon_id_or_slug}`

**Parameters**

| Name               | Type                                                  | Required | Description         |
| :----------------- | :---------------------------------------------------- | :------- | :------------------ |
| csgoWeaponIdOrSlug | [CsgoWeaponIdOrSlug](../models/CsgoWeaponIdOrSlug.md) | ✅       | A weapon ID or slug |

**Return Type**

`CsgoWeapon`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const csgoWeaponIdOrSlug = 5;

  const { data } = await pandascore.counterStrikeWeapons.getCsgoWeaponsCsgoWeaponIdOrSlug();

  console.log(data);
})();
```
