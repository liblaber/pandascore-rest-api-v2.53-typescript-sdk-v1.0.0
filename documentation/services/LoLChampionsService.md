# LoLChampionsService

A list of all methods in the `LoLChampionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                            |
| :------------------------------------------------------------------ | :------------------------------------- |
| [get_lol_champions](#get_lol_champions)                             | List champions                         |
| [get_lol_champions_lolChampionId](#get_lol_champions_lolchampionid) | Get a single champion by ID or by slug |

## get_lol_champions

List champions

- HTTP Method: `GET`
- Endpoint: `/lol/champions`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLChampions](../models/FilterOverLoLChampions.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLChampions](../models/RangeOverLoLChampions.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLChampions](../models/SearchOverLoLChampions.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLChampion[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLChampions,
  Page,
  PandascoreClient,
  RangeOverLoLChampions,
  SearchOverLoLChampions,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLChampions = {
    armor: [9.27],
    armorperlevel: [5.72],
    attackdamage: [2.5],
    attackdamageperlevel: [1.11],
    attackrange: [9.19],
    attackspeedoffset: [6.21],
    attackspeedperlevel: [0.21],
    crit: [4.78],
    critperlevel: [0.07],
    hp: [9.22],
    hpperlevel: [3.5],
    hpregen: [8.4],
    hpregenperlevel: [0.17],
    id: [5],
    movespeed: [1.64],
    mp: [6.47],
    mpperlevel: [3.11],
    mpregen: [9.09],
    mpregenperlevel: [3.32],
    name: ['ut non Ut sint '],
    spellblock: [4.66],
    spellblockperlevel: [6.52],
    videogameVersion: [],
  };

  const range: RangeOverLoLChampions = {
    armor: [2.43],
    armorperlevel: [9.24],
    attackdamage: [9],
    attackdamageperlevel: [3.94],
    attackrange: [5.87],
    attackspeedoffset: [8.54],
    attackspeedperlevel: [9.67],
    crit: [6.61],
    critperlevel: [5.44],
    hp: [3.71],
    hpperlevel: [6.6],
    hpregen: [8],
    hpregenperlevel: [7.04],
    id: [9],
    movespeed: [4.7],
    mp: [2.63],
    mpperlevel: [9.97],
    mpregen: [2.29],
    mpregenperlevel: [0.49],
    name: ['labore e'],
    spellblock: [3.35],
    spellblockperlevel: [5.17],
  };

  const search: SearchOverLoLChampions = {
    name: 'dolor officia c',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLChampions.getLolChampions({
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

## get_lol_champions_lolChampionId

Get a single champion by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/lol/champions/{lol_champion_id}`

**Parameters**

| Name          | Type   | Required | Description   |
| :------------ | :----- | :------- | :------------ |
| lolChampionId | number | ✅       | A champion ID |

**Return Type**

`LoLChampion`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.loLChampions.getLolChampionsLolChampionId(4);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
