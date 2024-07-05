# ValorantMapsService

A list of all methods in the `ValorantMapsService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                  |
| :------------------------------------------------------------------ | :--------------------------- |
| [get_valorant_maps](#get_valorant_maps)                             | List maps                    |
| [get_valorant_maps_valorantMapId](#get_valorant_maps_valorantmapid) | Get a Valorant map by its ID |

## get_valorant_maps

List maps

- HTTP Method: `GET`
- Endpoint: `/valorant/maps`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantMaps](../models/FilterOverValorantMaps.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantMaps](../models/RangeOverValorantMaps.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantMaps](../models/SearchOverValorantMaps.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ValorantMap[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverValorantMaps = {
    id: [6],
    name: ['deserunt culp'],
    slug: ['wlhqoayuz'],
    videogameVersion: [],
  };

  const range: RangeOverValorantMaps = {
    id: [3],
    name: ['dolore'],
    slug: ['j5q8'],
  };

  const search: SearchOverValorantMaps = {
    name: 'in elit',
    slug: 'o6-aq',
  };
  const page = 1;

  const { data } = await pandascore.valorantMaps.getValorantMaps({
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

## get_valorant_maps_valorantMapId

Get a Valorant map by its ID

- HTTP Method: `GET`
- Endpoint: `/valorant/maps/{valorant_map_id}`

**Parameters**

| Name          | Type   | Required | Description            |
| :------------ | :----- | :------- | :--------------------- |
| valorantMapId | number | ✅       | ID of the Valorant map |

**Return Type**

`ValorantMap`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.valorantMaps.getValorantMapsValorantMapId(6);

  console.log(data);
})();
```
