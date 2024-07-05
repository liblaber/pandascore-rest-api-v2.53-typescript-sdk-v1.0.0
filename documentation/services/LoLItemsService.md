# LoLItemsService

A list of all methods in the `LoLItemsService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                        |
| :-------------------------------------------------- | :--------------------------------- |
| [get_lol_items](#get_lol_items)                     | List items                         |
| [get_lol_items_lolItemId](#get_lol_items_lolitemid) | Get a single item by ID or by slug |

## get_lol_items

List items

- HTTP Method: `GET`
- Endpoint: `/lol/items`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLItems](../models/FilterOverLoLItems.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLItems](../models/RangeOverLoLItems.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLItems](../models/SearchOverLoLItems.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLItem[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLItems = {
    flatArmorMod: [5],
    flatCritChanceMod: [123],
    flatHpPoolMod: [7],
    flatHpRegenMod: [123],
    flatMagicDamageMod: [4],
    flatMovementSpeedMod: [1],
    flatMpPoolMod: [2],
    flatMpRegenMod: [2],
    flatPhysicalDamageMod: [3],
    flatSpellBlockMod: [3],
    goldBase: [10],
    goldPurchasable: true,
    goldSell: [6],
    goldTotal: [7],
    id: [8],
    name: ['dolor'],
    percentAttackSpeedMod: [8],
    percentLifeStealMod: [8],
    percentMovementSpeedMod: [3],
    trinket: true,
    videogameVersion: [],
  };

  const range: RangeOverLoLItems = {
    flatArmorMod: [6],
    flatCritChanceMod: [123],
    flatHpPoolMod: [9],
    flatHpRegenMod: [123],
    flatMagicDamageMod: [8],
    flatMovementSpeedMod: [5],
    flatMpPoolMod: [123],
    flatMpRegenMod: [4],
    flatPhysicalDamageMod: [3],
    flatSpellBlockMod: [9],
    goldBase: [4],
    goldPurchasable: [true],
    goldSell: [1],
    goldTotal: [4],
    id: [2],
    name: ['veniam nulla a'],
    percentAttackSpeedMod: [10],
    percentLifeStealMod: [123],
    percentMovementSpeedMod: [8],
  };

  const search: SearchOverLoLItems = {
    name: 'do ame',
  };
  const page = 1;

  const { data } = await pandascore.loLItems.getLolItems({
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

## get_lol_items_lolItemId

Get a single item by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/lol/items/{lol_item_id}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| lolItemId | number | ✅       | An item ID  |

**Return Type**

`LoLItem`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.loLItems.getLolItemsLolItemId(6);

  console.log(data);
})();
```
