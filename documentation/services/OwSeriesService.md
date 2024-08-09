# OwSeriesService

A list of all methods in the `OwSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                             |
| :------------------------------------------------ | :-------------------------------------- |
| [get_ow_series](#get_ow_series)                   | List series for the Overwatch videogame |
| [get_ow_series_past](#get_ow_series_past)         | List past Overwatch series              |
| [get_ow_series_running](#get_ow_series_running)   | List running Overwatch series           |
| [get_ow_series_upcoming](#get_ow_series_upcoming) | List upcoming Overwatch series          |

## get_ow_series

List series for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/series`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwSeries](../models/FilterOverOwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwSeries](../models/RangeOverOwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwSeries](../models/SearchOverOwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverOwSeries,
  SearchOverOwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverOwSeries = {
    beginAt: ['pariatur s'],
    endAt: ['aliquip ex'],
    id: [4],
    leagueId: [5],
    modifiedAt: ['Duis dolor'],
    name: ['elit est pro'],
    season: ['eiusm'],
    slug: ['bfo-pk33at'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverOwSeries = {
    beginAt: ['nulla non l'],
    endAt: ['irure'],
    id: [1],
    leagueId: [8],
    modifiedAt: ['consequat l'],
    name: ['cillu'],
    season: ['culpa eiusmod e'],
    slug: ['qys2k1'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverOwSeries = {
    name: 'dolore et ',
    season: 'ex enim',
    slug: 'a2c8ox87',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owSeries.getOwSeries({
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

## get_ow_series_past

List past Overwatch series

- HTTP Method: `GET`
- Endpoint: `/ow/series/past`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwSeries](../models/FilterOverOwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwSeries](../models/RangeOverOwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwSeries](../models/SearchOverOwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverOwSeries,
  SearchOverOwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverOwSeries = {
    beginAt: ['pariatur s'],
    endAt: ['aliquip ex'],
    id: [4],
    leagueId: [5],
    modifiedAt: ['Duis dolor'],
    name: ['elit est pro'],
    season: ['eiusm'],
    slug: ['bfo-pk33at'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverOwSeries = {
    beginAt: ['nulla non l'],
    endAt: ['irure'],
    id: [1],
    leagueId: [8],
    modifiedAt: ['consequat l'],
    name: ['cillu'],
    season: ['culpa eiusmod e'],
    slug: ['qys2k1'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverOwSeries = {
    name: 'dolore et ',
    season: 'ex enim',
    slug: 'a2c8ox87',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owSeries.getOwSeriesPast({
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

## get_ow_series_running

List running Overwatch series

- HTTP Method: `GET`
- Endpoint: `/ow/series/running`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwSeries](../models/FilterOverOwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwSeries](../models/RangeOverOwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwSeries](../models/SearchOverOwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverOwSeries,
  SearchOverOwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverOwSeries = {
    beginAt: ['pariatur s'],
    endAt: ['aliquip ex'],
    id: [4],
    leagueId: [5],
    modifiedAt: ['Duis dolor'],
    name: ['elit est pro'],
    season: ['eiusm'],
    slug: ['bfo-pk33at'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverOwSeries = {
    beginAt: ['nulla non l'],
    endAt: ['irure'],
    id: [1],
    leagueId: [8],
    modifiedAt: ['consequat l'],
    name: ['cillu'],
    season: ['culpa eiusmod e'],
    slug: ['qys2k1'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverOwSeries = {
    name: 'dolore et ',
    season: 'ex enim',
    slug: 'a2c8ox87',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owSeries.getOwSeriesRunning({
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

## get_ow_series_upcoming

List upcoming Overwatch series

- HTTP Method: `GET`
- Endpoint: `/ow/series/upcoming`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwSeries](../models/FilterOverOwSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwSeries](../models/RangeOverOwSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwSeries](../models/SearchOverOwSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverOwSeries,
  SearchOverOwSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverOwSeries = {
    beginAt: ['pariatur s'],
    endAt: ['aliquip ex'],
    id: [4],
    leagueId: [5],
    modifiedAt: ['Duis dolor'],
    name: ['elit est pro'],
    season: ['eiusm'],
    slug: ['bfo-pk33at'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverOwSeries = {
    beginAt: ['nulla non l'],
    endAt: ['irure'],
    id: [1],
    leagueId: [8],
    modifiedAt: ['consequat l'],
    name: ['cillu'],
    season: ['culpa eiusmod e'],
    slug: ['qys2k1'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverOwSeries = {
    name: 'dolore et ',
    season: 'ex enim',
    slug: 'a2c8ox87',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owSeries.getOwSeriesUpcoming({
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
