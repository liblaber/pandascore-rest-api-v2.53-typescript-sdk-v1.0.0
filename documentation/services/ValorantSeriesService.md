# ValorantSeriesService

A list of all methods in the `ValorantSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                            |
| :------------------------------------------------------------ | :------------------------------------- |
| [get_valorant_series](#get_valorant_series)                   | List series for the Valorant videogame |
| [get_valorant_series_past](#get_valorant_series_past)         | List past Valorant series              |
| [get_valorant_series_running](#get_valorant_series_running)   | List running Valorant series           |
| [get_valorant_series_upcoming](#get_valorant_series_upcoming) | List upcoming Valorant series          |

## get_valorant_series

List series for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/series`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantSeries,
  SearchOverValorantSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantSeries = {
    beginAt: ['sunt do'],
    endAt: ['non '],
    id: [1],
    leagueId: [8],
    modifiedAt: ['fugiat'],
    name: ['Excepteur temp'],
    season: ['nulla sunt '],
    slug: ['x3g1'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantSeries = {
    beginAt: ['aute sint'],
    endAt: ['anim co'],
    id: [2],
    leagueId: [9],
    modifiedAt: ['c'],
    name: ['utdolore '],
    season: ['occaecat dolor'],
    slug: ['7o--6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantSeries = {
    name: 'dodolor dolor',
    season: 'est tempor',
    slug: '-t5ut',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeries({
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

## get_valorant_series_past

List past Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/past`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantSeries,
  SearchOverValorantSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantSeries = {
    beginAt: ['sunt do'],
    endAt: ['non '],
    id: [1],
    leagueId: [8],
    modifiedAt: ['fugiat'],
    name: ['Excepteur temp'],
    season: ['nulla sunt '],
    slug: ['x3g1'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantSeries = {
    beginAt: ['aute sint'],
    endAt: ['anim co'],
    id: [2],
    leagueId: [9],
    modifiedAt: ['c'],
    name: ['utdolore '],
    season: ['occaecat dolor'],
    slug: ['7o--6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantSeries = {
    name: 'dodolor dolor',
    season: 'est tempor',
    slug: '-t5ut',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeriesPast({
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

## get_valorant_series_running

List running Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/running`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantSeries,
  SearchOverValorantSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantSeries = {
    beginAt: ['sunt do'],
    endAt: ['non '],
    id: [1],
    leagueId: [8],
    modifiedAt: ['fugiat'],
    name: ['Excepteur temp'],
    season: ['nulla sunt '],
    slug: ['x3g1'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantSeries = {
    beginAt: ['aute sint'],
    endAt: ['anim co'],
    id: [2],
    leagueId: [9],
    modifiedAt: ['c'],
    name: ['utdolore '],
    season: ['occaecat dolor'],
    slug: ['7o--6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantSeries = {
    name: 'dodolor dolor',
    season: 'est tempor',
    slug: '-t5ut',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeriesRunning({
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

## get_valorant_series_upcoming

List upcoming Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/upcoming`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantSeries,
  SearchOverValorantSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantSeries = {
    beginAt: ['sunt do'],
    endAt: ['non '],
    id: [1],
    leagueId: [8],
    modifiedAt: ['fugiat'],
    name: ['Excepteur temp'],
    season: ['nulla sunt '],
    slug: ['x3g1'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantSeries = {
    beginAt: ['aute sint'],
    endAt: ['anim co'],
    id: [2],
    leagueId: [9],
    modifiedAt: ['c'],
    name: ['utdolore '],
    season: ['occaecat dolor'],
    slug: ['7o--6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantSeries = {
    name: 'dodolor dolor',
    season: 'est tempor',
    slug: '-t5ut',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeriesUpcoming({
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
