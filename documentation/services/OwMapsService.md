# OwMapsService

A list of all methods in the `OwMapsService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                       |
| :------------------------------------------------------ | :-------------------------------- |
| [get_ow_maps](#get_ow_maps)                             | List maps                         |
| [get_ow_maps_owMapIdOrSlug](#get_ow_maps_owmapidorslug) | Get a single map by ID or by slug |

## get_ow_maps

List maps

- HTTP Method: `GET`
- Endpoint: `/ow/maps`

**Parameters**

| Name    | Type                                              | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMaps](../models/FilterOverOwMaps.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMaps](../models/RangeOverOwMaps.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMaps](../models/SearchOverOwMaps.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`OwMap[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const owMapGameMode = OwMapGameMode.Assault;

  const filter: FilterOverOwMaps = {
    gameMode: [owMapGameMode],
    id: [10],
    name: ['in cupidatat '],
    slug: ['nmjxuipz'],
  };
  const owMapGameMode = OwMapGameMode.Assault;

  const range: RangeOverOwMaps = {
    gameMode: [owMapGameMode],
    id: [6],
    name: ['inaliquip'],
    slug: ['e_5n5q'],
  };
  const owMapGameMode = OwMapGameMode.Assault;

  const search: SearchOverOwMaps = {
    gameMode: owMapGameMode,
    name: 'et deser',
    slug: 'r',
  };
  const page = 1;

  const { data } = await pandascore.owMaps.getOwMaps({
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

## get_ow_maps_owMapIdOrSlug

Get a single map by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/ow/maps/{ow_map_id_or_slug}`

**Parameters**

| Name          | Type                                        | Required | Description      |
| :------------ | :------------------------------------------ | :------- | :--------------- |
| owMapIdOrSlug | [OwMapIdOrSlug](../models/OwMapIdOrSlug.md) | ✅       | A map ID or slug |

**Return Type**

`OwMap`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const owMapIdOrSlug = 4;

  const { data } = await pandascore.owMaps.getOwMapsOwMapIdOrSlug();

  console.log(data);
})();
```
