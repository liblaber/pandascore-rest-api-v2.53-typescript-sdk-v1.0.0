# ValorantWeaponsService

A list of all methods in the `ValorantWeaponsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                         | Description                     |
| :------------------------------------------------------------------------------ | :------------------------------ |
| [get_valorant_weapons](#get_valorant_weapons)                                   | List weapons                    |
| [get_valorant_weapons_valorantWeaponId](#get_valorant_weapons_valorantweaponid) | Get a Valorant weapon by its ID |

## get_valorant_weapons

List weapons

- HTTP Method: `GET`
- Endpoint: `/valorant/weapons`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantWeapons](../models/FilterOverValorantWeapons.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantWeapons](../models/RangeOverValorantWeapons.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantWeapons](../models/SearchOverValorantWeapons.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ValorantWeapon[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverValorantWeapons = {
    creds: [7.49],
    id: [3],
    name: ['consecte'],
    videogameVersion: [],
  };

  const range: RangeOverValorantWeapons = {
    creds: [1.12],
    id: [10],
    name: ['in deserunt '],
  };

  const search: SearchOverValorantWeapons = {
    name: 'euaute',
  };
  const page = 1;

  const { data } = await pandascore.valorantWeapons.getValorantWeapons({
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

## get_valorant_weapons_valorantWeaponId

Get a Valorant weapon by its ID

- HTTP Method: `GET`
- Endpoint: `/valorant/weapons/{valorant_weapon_id}`

**Parameters**

| Name             | Type   | Required | Description               |
| :--------------- | :----- | :------- | :------------------------ |
| valorantWeaponId | number | ✅       | ID of the Valorant weapon |

**Return Type**

`ValorantWeapon`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.valorantWeapons.getValorantWeaponsValorantWeaponId(10);

  console.log(data);
})();
```
