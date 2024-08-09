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
import {
  FilterOverStarcraftBroodWarSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarSeries,
  SearchOverStarcraftBroodWarSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['sit anim '],
    endAt: ['eu voluptat'],
    id: [1],
    leagueId: [5],
    modifiedAt: ['culpa laborum L'],
    name: ['nisi commo'],
    season: ['Duis ex no'],
    slug: ['szd'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['Ut ea '],
    endAt: ['sunt a'],
    id: [6],
    leagueId: [7],
    modifiedAt: ['eiusmod volupta'],
    name: ['officia Ex'],
    season: ['deserunt Lo'],
    slug: ['89hpad2lb'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'ad pariatur ad',
    season: 'occaecat se',
    slug: 'wi',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarSeries.getStarcraftBroodWarSeries({
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
import {
  FilterOverStarcraftBroodWarSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarSeries,
  SearchOverStarcraftBroodWarSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['sit anim '],
    endAt: ['eu voluptat'],
    id: [1],
    leagueId: [5],
    modifiedAt: ['culpa laborum L'],
    name: ['nisi commo'],
    season: ['Duis ex no'],
    slug: ['szd'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['Ut ea '],
    endAt: ['sunt a'],
    id: [6],
    leagueId: [7],
    modifiedAt: ['eiusmod volupta'],
    name: ['officia Ex'],
    season: ['deserunt Lo'],
    slug: ['89hpad2lb'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'ad pariatur ad',
    season: 'occaecat se',
    slug: 'wi',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarSeries.getStarcraftBroodWarSeriesPast({
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
import {
  FilterOverStarcraftBroodWarSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarSeries,
  SearchOverStarcraftBroodWarSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['sit anim '],
    endAt: ['eu voluptat'],
    id: [1],
    leagueId: [5],
    modifiedAt: ['culpa laborum L'],
    name: ['nisi commo'],
    season: ['Duis ex no'],
    slug: ['szd'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['Ut ea '],
    endAt: ['sunt a'],
    id: [6],
    leagueId: [7],
    modifiedAt: ['eiusmod volupta'],
    name: ['officia Ex'],
    season: ['deserunt Lo'],
    slug: ['89hpad2lb'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'ad pariatur ad',
    season: 'occaecat se',
    slug: 'wi',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarSeries.getStarcraftBroodWarSeriesRunning({
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
import {
  FilterOverStarcraftBroodWarSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarSeries,
  SearchOverStarcraftBroodWarSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraftBroodWarSeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarSeries = {
    beginAt: ['sit anim '],
    endAt: ['eu voluptat'],
    id: [1],
    leagueId: [5],
    modifiedAt: ['culpa laborum L'],
    name: ['nisi commo'],
    season: ['Duis ex no'],
    slug: ['szd'],
    videogameTitle: [filterOverStarcraftBroodWarSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarSeries = {
    beginAt: ['Ut ea '],
    endAt: ['sunt a'],
    id: [6],
    leagueId: [7],
    modifiedAt: ['eiusmod volupta'],
    name: ['officia Ex'],
    season: ['deserunt Lo'],
    slug: ['89hpad2lb'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarSeries = {
    name: 'ad pariatur ad',
    season: 'occaecat se',
    slug: 'wi',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarSeries.getStarcraftBroodWarSeriesUpcoming({
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

<!-- This file was generated by liblab | https://liblab.com/ -->
