# EaSportsFcSeriesService

A list of all methods in the `EaSportsFcSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                |
| :---------------------------------------------------- | :----------------------------------------- |
| [get_fifa_series](#get_fifa_series)                   | List series for the EA Sports FC videogame |
| [get_fifa_series_past](#get_fifa_series_past)         | List past EA Sports FC series              |
| [get_fifa_series_running](#get_fifa_series_running)   | List running EA Sports FC series           |
| [get_fifa_series_upcoming](#get_fifa_series_upcoming) | List upcoming EA Sports FC series          |

## get_fifa_series

List series for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/series`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaSeries,
  SearchOverFifaSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverFifaSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaSeries = {
    beginAt: ['veniam mi'],
    endAt: ['ut '],
    id: [6],
    leagueId: [10],
    modifiedAt: ['ipsum rep'],
    name: ['officia dese'],
    season: ['laboris Ut dolo'],
    slug: ['ipfkj'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaSeries = {
    beginAt: ['mi'],
    endAt: ['ut'],
    id: [9],
    leagueId: [6],
    modifiedAt: ['ess'],
    name: ['nulla'],
    season: ['commodo dolor'],
    slug: ['fj-s'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaSeries = {
    name: 'in eu',
    season: 'dolor voluptat',
    slug: 'em',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeries({
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

## get_fifa_series_past

List past EA Sports FC series

- HTTP Method: `GET`
- Endpoint: `/fifa/series/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaSeries,
  SearchOverFifaSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverFifaSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaSeries = {
    beginAt: ['veniam mi'],
    endAt: ['ut '],
    id: [6],
    leagueId: [10],
    modifiedAt: ['ipsum rep'],
    name: ['officia dese'],
    season: ['laboris Ut dolo'],
    slug: ['ipfkj'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaSeries = {
    beginAt: ['mi'],
    endAt: ['ut'],
    id: [9],
    leagueId: [6],
    modifiedAt: ['ess'],
    name: ['nulla'],
    season: ['commodo dolor'],
    slug: ['fj-s'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaSeries = {
    name: 'in eu',
    season: 'dolor voluptat',
    slug: 'em',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeriesPast({
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

## get_fifa_series_running

List running EA Sports FC series

- HTTP Method: `GET`
- Endpoint: `/fifa/series/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaSeries,
  SearchOverFifaSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverFifaSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaSeries = {
    beginAt: ['veniam mi'],
    endAt: ['ut '],
    id: [6],
    leagueId: [10],
    modifiedAt: ['ipsum rep'],
    name: ['officia dese'],
    season: ['laboris Ut dolo'],
    slug: ['ipfkj'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaSeries = {
    beginAt: ['mi'],
    endAt: ['ut'],
    id: [9],
    leagueId: [6],
    modifiedAt: ['ess'],
    name: ['nulla'],
    season: ['commodo dolor'],
    slug: ['fj-s'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaSeries = {
    name: 'in eu',
    season: 'dolor voluptat',
    slug: 'em',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeriesRunning({
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

## get_fifa_series_upcoming

List upcoming EA Sports FC series

- HTTP Method: `GET`
- Endpoint: `/fifa/series/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaSeries,
  SearchOverFifaSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverFifaSeriesVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaSeries = {
    beginAt: ['veniam mi'],
    endAt: ['ut '],
    id: [6],
    leagueId: [10],
    modifiedAt: ['ipsum rep'],
    name: ['officia dese'],
    season: ['laboris Ut dolo'],
    slug: ['ipfkj'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaSeries = {
    beginAt: ['mi'],
    endAt: ['ut'],
    id: [9],
    leagueId: [6],
    modifiedAt: ['ess'],
    name: ['nulla'],
    season: ['commodo dolor'],
    slug: ['fj-s'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaSeries = {
    name: 'in eu',
    season: 'dolor voluptat',
    slug: 'em',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeriesUpcoming({
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
