# RlSeriesService

A list of all methods in the `RlSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                                 |
| :------------------------------------------------ | :------------------------------------------ |
| [get_rl_series](#get_rl_series)                   | List series for the Rocket League videogame |
| [get_rl_series_past](#get_rl_series_past)         | List past Rocket League series              |
| [get_rl_series_running](#get_rl_series_running)   | List running Rocket League series           |
| [get_rl_series_upcoming](#get_rl_series_upcoming) | List upcoming Rocket League series          |

## get_rl_series

List series for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/series`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlSeries](../models/FilterOverRlSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlSeries](../models/RangeOverRlSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlSeries](../models/SearchOverRlSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlSeries,
  SearchOverRlSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverRlSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlSeries = {
    beginAt: ['adipisi'],
    endAt: ['non E'],
    id: [6],
    leagueId: [3],
    modifiedAt: ['in'],
    name: ['tempor qui'],
    season: ['adipi'],
    slug: ['ctgc57ji3dr'],
    videogameTitle: [filterOverRlSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlSeries = {
    beginAt: ['in a'],
    endAt: ['dolor'],
    id: [9],
    leagueId: [8],
    modifiedAt: ['re'],
    name: ['veniam mini'],
    season: ['Utdolor'],
    slug: ['xk0rm-s8'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlSeries = {
    name: 'velit culpa',
    season: 'elit sed co',
    slug: '-xdo',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlSeries.getRlSeries({
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

## get_rl_series_past

List past Rocket League series

- HTTP Method: `GET`
- Endpoint: `/rl/series/past`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlSeries](../models/FilterOverRlSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlSeries](../models/RangeOverRlSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlSeries](../models/SearchOverRlSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlSeries,
  SearchOverRlSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverRlSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlSeries = {
    beginAt: ['adipisi'],
    endAt: ['non E'],
    id: [6],
    leagueId: [3],
    modifiedAt: ['in'],
    name: ['tempor qui'],
    season: ['adipi'],
    slug: ['ctgc57ji3dr'],
    videogameTitle: [filterOverRlSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlSeries = {
    beginAt: ['in a'],
    endAt: ['dolor'],
    id: [9],
    leagueId: [8],
    modifiedAt: ['re'],
    name: ['veniam mini'],
    season: ['Utdolor'],
    slug: ['xk0rm-s8'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlSeries = {
    name: 'velit culpa',
    season: 'elit sed co',
    slug: '-xdo',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlSeries.getRlSeriesPast({
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

## get_rl_series_running

List running Rocket League series

- HTTP Method: `GET`
- Endpoint: `/rl/series/running`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlSeries](../models/FilterOverRlSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlSeries](../models/RangeOverRlSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlSeries](../models/SearchOverRlSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlSeries,
  SearchOverRlSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverRlSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlSeries = {
    beginAt: ['adipisi'],
    endAt: ['non E'],
    id: [6],
    leagueId: [3],
    modifiedAt: ['in'],
    name: ['tempor qui'],
    season: ['adipi'],
    slug: ['ctgc57ji3dr'],
    videogameTitle: [filterOverRlSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlSeries = {
    beginAt: ['in a'],
    endAt: ['dolor'],
    id: [9],
    leagueId: [8],
    modifiedAt: ['re'],
    name: ['veniam mini'],
    season: ['Utdolor'],
    slug: ['xk0rm-s8'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlSeries = {
    name: 'velit culpa',
    season: 'elit sed co',
    slug: '-xdo',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlSeries.getRlSeriesRunning({
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

## get_rl_series_upcoming

List upcoming Rocket League series

- HTTP Method: `GET`
- Endpoint: `/rl/series/upcoming`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlSeries](../models/FilterOverRlSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlSeries](../models/RangeOverRlSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlSeries](../models/SearchOverRlSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlSeries,
  SearchOverRlSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverRlSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlSeries = {
    beginAt: ['adipisi'],
    endAt: ['non E'],
    id: [6],
    leagueId: [3],
    modifiedAt: ['in'],
    name: ['tempor qui'],
    season: ['adipi'],
    slug: ['ctgc57ji3dr'],
    videogameTitle: [filterOverRlSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlSeries = {
    beginAt: ['in a'],
    endAt: ['dolor'],
    id: [9],
    leagueId: [8],
    modifiedAt: ['re'],
    name: ['veniam mini'],
    season: ['Utdolor'],
    slug: ['xk0rm-s8'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlSeries = {
    name: 'velit culpa',
    season: 'elit sed co',
    slug: '-xdo',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlSeries.getRlSeriesUpcoming({
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
