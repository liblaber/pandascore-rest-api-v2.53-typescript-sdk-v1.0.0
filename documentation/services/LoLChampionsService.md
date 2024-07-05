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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLChampions = {
    armor: [4.14],
    armorperlevel: [5.85],
    attackdamage: [4.28],
    attackdamageperlevel: [9.04],
    attackrange: [1.54],
    attackspeedoffset: [1.18],
    attackspeedperlevel: [8.04],
    crit: [1.77],
    critperlevel: [8.46],
    hp: [8.89],
    hpperlevel: [0.13],
    hpregen: [1.31],
    hpregenperlevel: [9.83],
    id: [1],
    movespeed: [2.63],
    mp: [4.42],
    mpperlevel: [0.78],
    mpregen: [0.3],
    mpregenperlevel: [5.2],
    name: ['dolor'],
    spellblock: [3.92],
    spellblockperlevel: [0.08],
    videogameVersion: [],
  };

  const range: RangeOverLoLChampions = {
    armor: [0.39],
    armorperlevel: [2.61],
    attackdamage: [4.35],
    attackdamageperlevel: [3.22],
    attackrange: [0.42],
    attackspeedoffset: [0.97],
    attackspeedperlevel: [9.44],
    crit: [5.17],
    critperlevel: [6.01],
    hp: [9.14],
    hpperlevel: [7.14],
    hpregen: [2.23],
    hpregenperlevel: [0.78],
    id: [3],
    movespeed: [6.49],
    mp: [3.89],
    mpperlevel: [7.92],
    mpregen: [2.58],
    mpregenperlevel: [2.57],
    name: ['labore'],
    spellblock: [1.18],
    spellblockperlevel: [2.93],
  };

  const search: SearchOverLoLChampions = {
    name: 'dolor sunt eu',
  };
  const page = 1;

  const { data } = await pandascore.loLChampions.getLolChampions({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.loLChampions.getLolChampionsLolChampionId(7);

  console.log(data);
})();
```
