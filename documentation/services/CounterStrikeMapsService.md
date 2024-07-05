# CounterStrikeMapsService

A list of all methods in the `CounterStrikeMapsService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                       |
| :-------------------------------------------------- | :-------------------------------- |
| [get_csgo_maps](#get_csgo_maps)                     | List maps                         |
| [get_csgo_maps_csgoMapId](#get_csgo_maps_csgomapid) | Get a single map by ID or by slug |

## get_csgo_maps

List maps

- HTTP Method: `GET`
- Endpoint: `/csgo/maps`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoMaps](../models/FilterOverCsgoMaps.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoMaps](../models/RangeOverCsgoMaps.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoMaps](../models/SearchOverCsgoMaps.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`CsgoMap[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverCsgoMaps = {
    id: [6],
    name: ['eu velit i'],
    slug: ['efy'],
  };

  const range: RangeOverCsgoMaps = {
    id: [5],
    name: ['ad ex fugi'],
    slug: ['iy4ot'],
  };

  const search: SearchOverCsgoMaps = {
    name: 'id dolore e',
    slug: 'lz',
  };
  const page = 1;

  const { data } = await pandascore.counterStrikeMaps.getCsgoMaps({
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

## get_csgo_maps_csgoMapId

Get a single map by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/csgo/maps/{csgo_map_id}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| csgoMapId | number | ✅       | A map ID    |

**Return Type**

`CsgoMap`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.counterStrikeMaps.getCsgoMapsCsgoMapId(6);

  console.log(data);
})();
```
