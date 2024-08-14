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

  const filterOverFifaSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverFifaSeries: FilterOverFifaSeries = {
    beginAt: ['pariat'],
    endAt: ['n'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['elit '],
    name: ['commo'],
    season: ['cillum a'],
    slug: ['mj-4az6h8u'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverFifaSeries: RangeOverFifaSeries = {
    beginAt: ['qui nu'],
    endAt: ['nulla elit '],
    id: [6],
    leagueId: [8],
    modifiedAt: ['qui consequat'],
    name: ['nulla'],
    season: ['occaecat enim'],
    slug: ['dw'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverFifaSeries: SearchOverFifaSeries = {
    name: 'sed do',
    season: 'cillum d',
    slug: 'ou',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeries({
    filter: filterOverFifaSeries,
    range: rangeOverFifaSeries,
    sort: [[]],
    search: searchOverFifaSeries,
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

  const filterOverFifaSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverFifaSeries: FilterOverFifaSeries = {
    beginAt: ['pariat'],
    endAt: ['n'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['elit '],
    name: ['commo'],
    season: ['cillum a'],
    slug: ['mj-4az6h8u'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverFifaSeries: RangeOverFifaSeries = {
    beginAt: ['qui nu'],
    endAt: ['nulla elit '],
    id: [6],
    leagueId: [8],
    modifiedAt: ['qui consequat'],
    name: ['nulla'],
    season: ['occaecat enim'],
    slug: ['dw'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverFifaSeries: SearchOverFifaSeries = {
    name: 'sed do',
    season: 'cillum d',
    slug: 'ou',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeriesPast({
    filter: filterOverFifaSeries,
    range: rangeOverFifaSeries,
    sort: [[]],
    search: searchOverFifaSeries,
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

  const filterOverFifaSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverFifaSeries: FilterOverFifaSeries = {
    beginAt: ['pariat'],
    endAt: ['n'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['elit '],
    name: ['commo'],
    season: ['cillum a'],
    slug: ['mj-4az6h8u'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverFifaSeries: RangeOverFifaSeries = {
    beginAt: ['qui nu'],
    endAt: ['nulla elit '],
    id: [6],
    leagueId: [8],
    modifiedAt: ['qui consequat'],
    name: ['nulla'],
    season: ['occaecat enim'],
    slug: ['dw'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverFifaSeries: SearchOverFifaSeries = {
    name: 'sed do',
    season: 'cillum d',
    slug: 'ou',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeriesRunning({
    filter: filterOverFifaSeries,
    range: rangeOverFifaSeries,
    sort: [[]],
    search: searchOverFifaSeries,
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

  const filterOverFifaSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverFifaSeries: FilterOverFifaSeries = {
    beginAt: ['pariat'],
    endAt: ['n'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['elit '],
    name: ['commo'],
    season: ['cillum a'],
    slug: ['mj-4az6h8u'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverFifaSeries: RangeOverFifaSeries = {
    beginAt: ['qui nu'],
    endAt: ['nulla elit '],
    id: [6],
    leagueId: [8],
    modifiedAt: ['qui consequat'],
    name: ['nulla'],
    season: ['occaecat enim'],
    slug: ['dw'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverFifaSeries: SearchOverFifaSeries = {
    name: 'sed do',
    season: 'cillum d',
    slug: 'ou',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcSeries.getFifaSeriesUpcoming({
    filter: filterOverFifaSeries,
    range: rangeOverFifaSeries,
    sort: [[]],
    search: searchOverFifaSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
