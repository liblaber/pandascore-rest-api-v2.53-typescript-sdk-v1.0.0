# CodmwSeriesService

A list of all methods in the `CodmwSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                         |
| :------------------------------------------------------ | :---------------------------------- |
| [get_codmw_series](#get_codmw_series)                   | List series for the CODMW videogame |
| [get_codmw_series_past](#get_codmw_series_past)         | List past CODMW series              |
| [get_codmw_series_running](#get_codmw_series_running)   | List running CODMW series           |
| [get_codmw_series_upcoming](#get_codmw_series_upcoming) | List upcoming CODMW series          |

## get_codmw_series

List series for the CODMW videogame

- HTTP Method: `GET`
- Endpoint: `/codmw/series`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwSeries](../models/FilterOverCodmwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwSeries](../models/RangeOverCodmwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwSeries](../models/SearchOverCodmwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwSeries,
  SearchOverCodmwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCodmwSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCodmwSeries: FilterOverCodmwSeries = {
    beginAt: ['aliquip minim d'],
    endAt: ['aute ad ea'],
    id: [3],
    leagueId: [6],
    modifiedAt: ['quis offi'],
    name: ['labor'],
    season: ['veniam qui cons'],
    slug: ['hizoyph83_0'],
    videogameTitle: [filterOverCodmwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCodmwSeries: RangeOverCodmwSeries = {
    beginAt: ['aliq'],
    endAt: ['est dolore eu'],
    id: [10],
    leagueId: [7],
    modifiedAt: ['dolor pro'],
    name: ['anim ex eli'],
    season: ['pariatur '],
    slug: ['ic16v7gnnll'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCodmwSeries: SearchOverCodmwSeries = {
    name: 'qui ul',
    season: 'esse ullam',
    slug: 'c7',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwSeries.getCodmwSeries({
    filter: filterOverCodmwSeries,
    range: rangeOverCodmwSeries,
    sort: [[]],
    search: searchOverCodmwSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_codmw_series_past

List past CODMW series

- HTTP Method: `GET`
- Endpoint: `/codmw/series/past`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwSeries](../models/FilterOverCodmwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwSeries](../models/RangeOverCodmwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwSeries](../models/SearchOverCodmwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwSeries,
  SearchOverCodmwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCodmwSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCodmwSeries: FilterOverCodmwSeries = {
    beginAt: ['aliquip minim d'],
    endAt: ['aute ad ea'],
    id: [3],
    leagueId: [6],
    modifiedAt: ['quis offi'],
    name: ['labor'],
    season: ['veniam qui cons'],
    slug: ['hizoyph83_0'],
    videogameTitle: [filterOverCodmwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCodmwSeries: RangeOverCodmwSeries = {
    beginAt: ['aliq'],
    endAt: ['est dolore eu'],
    id: [10],
    leagueId: [7],
    modifiedAt: ['dolor pro'],
    name: ['anim ex eli'],
    season: ['pariatur '],
    slug: ['ic16v7gnnll'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCodmwSeries: SearchOverCodmwSeries = {
    name: 'qui ul',
    season: 'esse ullam',
    slug: 'c7',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwSeries.getCodmwSeriesPast({
    filter: filterOverCodmwSeries,
    range: rangeOverCodmwSeries,
    sort: [[]],
    search: searchOverCodmwSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_codmw_series_running

List running CODMW series

- HTTP Method: `GET`
- Endpoint: `/codmw/series/running`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwSeries](../models/FilterOverCodmwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwSeries](../models/RangeOverCodmwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwSeries](../models/SearchOverCodmwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwSeries,
  SearchOverCodmwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCodmwSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCodmwSeries: FilterOverCodmwSeries = {
    beginAt: ['aliquip minim d'],
    endAt: ['aute ad ea'],
    id: [3],
    leagueId: [6],
    modifiedAt: ['quis offi'],
    name: ['labor'],
    season: ['veniam qui cons'],
    slug: ['hizoyph83_0'],
    videogameTitle: [filterOverCodmwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCodmwSeries: RangeOverCodmwSeries = {
    beginAt: ['aliq'],
    endAt: ['est dolore eu'],
    id: [10],
    leagueId: [7],
    modifiedAt: ['dolor pro'],
    name: ['anim ex eli'],
    season: ['pariatur '],
    slug: ['ic16v7gnnll'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCodmwSeries: SearchOverCodmwSeries = {
    name: 'qui ul',
    season: 'esse ullam',
    slug: 'c7',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwSeries.getCodmwSeriesRunning({
    filter: filterOverCodmwSeries,
    range: rangeOverCodmwSeries,
    sort: [[]],
    search: searchOverCodmwSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_codmw_series_upcoming

List upcoming CODMW series

- HTTP Method: `GET`
- Endpoint: `/codmw/series/upcoming`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwSeries](../models/FilterOverCodmwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwSeries](../models/RangeOverCodmwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwSeries](../models/SearchOverCodmwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwSeries,
  SearchOverCodmwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCodmwSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCodmwSeries: FilterOverCodmwSeries = {
    beginAt: ['aliquip minim d'],
    endAt: ['aute ad ea'],
    id: [3],
    leagueId: [6],
    modifiedAt: ['quis offi'],
    name: ['labor'],
    season: ['veniam qui cons'],
    slug: ['hizoyph83_0'],
    videogameTitle: [filterOverCodmwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCodmwSeries: RangeOverCodmwSeries = {
    beginAt: ['aliq'],
    endAt: ['est dolore eu'],
    id: [10],
    leagueId: [7],
    modifiedAt: ['dolor pro'],
    name: ['anim ex eli'],
    season: ['pariatur '],
    slug: ['ic16v7gnnll'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCodmwSeries: SearchOverCodmwSeries = {
    name: 'qui ul',
    season: 'esse ullam',
    slug: 'c7',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwSeries.getCodmwSeriesUpcoming({
    filter: filterOverCodmwSeries,
    range: rangeOverCodmwSeries,
    sort: [[]],
    search: searchOverCodmwSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
