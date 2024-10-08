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
import { FilterOverLoLItems, Page, PandascoreClient, RangeOverLoLItems, SearchOverLoLItems } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLItems: FilterOverLoLItems = {
    flatArmorMod: [5],
    flatCritChanceMod: [1],
    flatHpPoolMod: [1],
    flatHpRegenMod: [7],
    flatMagicDamageMod: [8],
    flatMovementSpeedMod: [2],
    flatMpPoolMod: [6],
    flatMpRegenMod: [8],
    flatPhysicalDamageMod: [6],
    flatSpellBlockMod: [3],
    goldBase: [5],
    goldPurchasable: true,
    goldSell: [7],
    goldTotal: [4],
    id: [4],
    name: ['eiusmod'],
    percentAttackSpeedMod: [2],
    percentLifeStealMod: [9],
    percentMovementSpeedMod: [10],
    trinket: true,
    videogameVersion: [],
  };

  const rangeOverLoLItems: RangeOverLoLItems = {
    flatArmorMod: [8],
    flatCritChanceMod: [10],
    flatHpPoolMod: [10],
    flatHpRegenMod: [8],
    flatMagicDamageMod: [10],
    flatMovementSpeedMod: [3],
    flatMpPoolMod: [9],
    flatMpRegenMod: [2],
    flatPhysicalDamageMod: [10],
    flatSpellBlockMod: [6],
    goldBase: [10],
    goldPurchasable: [true],
    goldSell: [3],
    goldTotal: [6],
    id: [5],
    name: ['in aliquip'],
    percentAttackSpeedMod: [8],
    percentLifeStealMod: [8],
    percentMovementSpeedMod: [1],
  };

  const searchOverLoLItems: SearchOverLoLItems = {
    name: 'adipis',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLItems.getLolItems({
    filter: filterOverLoLItems,
    range: rangeOverLoLItems,
    sort: [[]],
    search: searchOverLoLItems,
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.loLItems.getLolItemsLolItemId(3);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
