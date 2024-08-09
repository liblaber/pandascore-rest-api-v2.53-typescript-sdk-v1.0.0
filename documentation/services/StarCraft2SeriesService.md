# StarCraft2SeriesService

A list of all methods in the `StarCraft2SeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                               |
| :------------------------------------------------------------------ | :---------------------------------------- |
| [get_starcraft_2_series](#get_starcraft_2_series)                   | List series for the StarCraft 2 videogame |
| [get_starcraft_2_series_past](#get_starcraft_2_series_past)         | List past StarCraft 2 series              |
| [get_starcraft_2_series_running](#get_starcraft_2_series_running)   | List running StarCraft 2 series           |
| [get_starcraft_2_series_upcoming](#get_starcraft_2_series_upcoming) | List upcoming StarCraft 2 series          |

## get_starcraft_2_series

List series for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/series`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Series](../models/FilterOverStarcraft2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Series](../models/RangeOverStarcraft2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Series](../models/SearchOverStarcraft2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Series,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2Series,
  SearchOverStarcraft2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraft2SeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraft2Series = {
    beginAt: ['fugiat'],
    endAt: ['aute'],
    id: [1],
    leagueId: [7],
    modifiedAt: ['quis aut'],
    name: ['cupidatat'],
    season: ['aute Lorem ut'],
    slug: ['txrjjfci1u'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraft2Series = {
    beginAt: ['in null'],
    endAt: ['ut irure'],
    id: [3],
    leagueId: [2],
    modifiedAt: ['pariatur '],
    name: ['amete'],
    season: ['proident'],
    slug: ['q'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraft2Series = {
    name: 'anim pa',
    season: 'quis sit',
    slug: 'toalhb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2Series({
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

## get_starcraft_2_series_past

List past StarCraft 2 series

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/series/past`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Series](../models/FilterOverStarcraft2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Series](../models/RangeOverStarcraft2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Series](../models/SearchOverStarcraft2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Series,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2Series,
  SearchOverStarcraft2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraft2SeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraft2Series = {
    beginAt: ['fugiat'],
    endAt: ['aute'],
    id: [1],
    leagueId: [7],
    modifiedAt: ['quis aut'],
    name: ['cupidatat'],
    season: ['aute Lorem ut'],
    slug: ['txrjjfci1u'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraft2Series = {
    beginAt: ['in null'],
    endAt: ['ut irure'],
    id: [3],
    leagueId: [2],
    modifiedAt: ['pariatur '],
    name: ['amete'],
    season: ['proident'],
    slug: ['q'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraft2Series = {
    name: 'anim pa',
    season: 'quis sit',
    slug: 'toalhb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2SeriesPast({
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

## get_starcraft_2_series_running

List running StarCraft 2 series

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/series/running`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Series](../models/FilterOverStarcraft2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Series](../models/RangeOverStarcraft2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Series](../models/SearchOverStarcraft2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Series,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2Series,
  SearchOverStarcraft2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraft2SeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraft2Series = {
    beginAt: ['fugiat'],
    endAt: ['aute'],
    id: [1],
    leagueId: [7],
    modifiedAt: ['quis aut'],
    name: ['cupidatat'],
    season: ['aute Lorem ut'],
    slug: ['txrjjfci1u'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraft2Series = {
    beginAt: ['in null'],
    endAt: ['ut irure'],
    id: [3],
    leagueId: [2],
    modifiedAt: ['pariatur '],
    name: ['amete'],
    season: ['proident'],
    slug: ['q'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraft2Series = {
    name: 'anim pa',
    season: 'quis sit',
    slug: 'toalhb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2SeriesRunning({
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

## get_starcraft_2_series_upcoming

List upcoming StarCraft 2 series

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/series/upcoming`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Series](../models/FilterOverStarcraft2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Series](../models/RangeOverStarcraft2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Series](../models/SearchOverStarcraft2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Series,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2Series,
  SearchOverStarcraft2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverStarcraft2SeriesVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraft2Series = {
    beginAt: ['fugiat'],
    endAt: ['aute'],
    id: [1],
    leagueId: [7],
    modifiedAt: ['quis aut'],
    name: ['cupidatat'],
    season: ['aute Lorem ut'],
    slug: ['txrjjfci1u'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraft2Series = {
    beginAt: ['in null'],
    endAt: ['ut irure'],
    id: [3],
    leagueId: [2],
    modifiedAt: ['pariatur '],
    name: ['amete'],
    season: ['proident'],
    slug: ['q'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraft2Series = {
    name: 'anim pa',
    season: 'quis sit',
    slug: 'toalhb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2SeriesUpcoming({
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
