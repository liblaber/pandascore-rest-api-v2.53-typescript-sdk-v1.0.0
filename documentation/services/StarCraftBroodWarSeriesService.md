# StarCraftBroodWarSeriesService

A list of all methods in the `StarCraftBroodWarSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                             | Description                                       |
| :---------------------------------------------------------------------------------- | :------------------------------------------------ |
| [get_starcraft_brood_war_series](#get_starcraft_brood_war_series)                   | List series for the StarCraft Brood War videogame |
| [get_starcraft_brood_war_series_past](#get_starcraft_brood_war_series_past)         | List past StarCraft Brood War series              |
| [get_starcraft_brood_war_series_running](#get_starcraft_brood_war_series_running)   | List running StarCraft Brood War series           |
| [get_starcraft_brood_war_series_upcoming](#get_starcraft_brood_war_series_upcoming) | List upcoming StarCraft Brood War series          |

## get_starcraft_brood_war_series

List series for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/series`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarSeries](../models/FilterOverStarcraftBroodWarSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarSeries](../models/RangeOverStarcraftBroodWarSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarSeries](../models/SearchOverStarcraftBroodWarSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['ullamco n'],
    endAt: ['ut Lorem '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['conse'],
    name: ['Lorem'],
    season: ['ex dolore in e'],
    slug: ['-ta9rx5k'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['cul'],
    endAt: ['nostrud au'],
    id: [7],
    leagueId: [10],
    modifiedAt: ['temp'],
    name: ['quisnisi'],
    season: ['sed Ut con'],
    slug: ['k4l0n3rc'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'anim i',
    season: 'aute labore',
    slug: 'a-k0',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraftBroodWarSeries.getStarcraftBroodWarSeries({
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

## get_starcraft_brood_war_series_past

List past StarCraft Brood War series

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/series/past`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarSeries](../models/FilterOverStarcraftBroodWarSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarSeries](../models/RangeOverStarcraftBroodWarSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarSeries](../models/SearchOverStarcraftBroodWarSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['ullamco n'],
    endAt: ['ut Lorem '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['conse'],
    name: ['Lorem'],
    season: ['ex dolore in e'],
    slug: ['-ta9rx5k'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['cul'],
    endAt: ['nostrud au'],
    id: [7],
    leagueId: [10],
    modifiedAt: ['temp'],
    name: ['quisnisi'],
    season: ['sed Ut con'],
    slug: ['k4l0n3rc'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'anim i',
    season: 'aute labore',
    slug: 'a-k0',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraftBroodWarSeries.getStarcraftBroodWarSeriesPast({
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

## get_starcraft_brood_war_series_running

List running StarCraft Brood War series

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/series/running`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarSeries](../models/FilterOverStarcraftBroodWarSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarSeries](../models/RangeOverStarcraftBroodWarSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarSeries](../models/SearchOverStarcraftBroodWarSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['ullamco n'],
    endAt: ['ut Lorem '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['conse'],
    name: ['Lorem'],
    season: ['ex dolore in e'],
    slug: ['-ta9rx5k'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['cul'],
    endAt: ['nostrud au'],
    id: [7],
    leagueId: [10],
    modifiedAt: ['temp'],
    name: ['quisnisi'],
    season: ['sed Ut con'],
    slug: ['k4l0n3rc'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'anim i',
    season: 'aute labore',
    slug: 'a-k0',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraftBroodWarSeries.getStarcraftBroodWarSeriesRunning({
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

## get_starcraft_brood_war_series_upcoming

List upcoming StarCraft Brood War series

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/series/upcoming`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarSeries](../models/FilterOverStarcraftBroodWarSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarSeries](../models/RangeOverStarcraftBroodWarSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarSeries](../models/SearchOverStarcraftBroodWarSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['ullamco n'],
    endAt: ['ut Lorem '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['conse'],
    name: ['Lorem'],
    season: ['ex dolore in e'],
    slug: ['-ta9rx5k'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['cul'],
    endAt: ['nostrud au'],
    id: [7],
    leagueId: [10],
    modifiedAt: ['temp'],
    name: ['quisnisi'],
    season: ['sed Ut con'],
    slug: ['k4l0n3rc'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'anim i',
    season: 'aute labore',
    slug: 'a-k0',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraftBroodWarSeries.getStarcraftBroodWarSeriesUpcoming({
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
