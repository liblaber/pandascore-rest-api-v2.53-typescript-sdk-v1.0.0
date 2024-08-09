# LoLWildRiftSeriesService

A list of all methods in the `LoLWildRiftSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                 |
| :---------------------------------------------------------------------- | :------------------------------------------ |
| [get_lol_wild_rift_series](#get_lol_wild_rift_series)                   | List series for the LoL Wild Rift videogame |
| [get_lol_wild_rift_series_past](#get_lol_wild_rift_series_past)         | List past LoL Wild Rift series              |
| [get_lol_wild_rift_series_running](#get_lol_wild_rift_series_running)   | List running LoL Wild Rift series           |
| [get_lol_wild_rift_series_upcoming](#get_lol_wild_rift_series_upcoming) | List upcoming LoL Wild Rift series          |

## get_lol_wild_rift_series

List series for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/series`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftSeries](../models/FilterOverLolWildRiftSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftSeries](../models/RangeOverLolWildRiftSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftSeries](../models/SearchOverLolWildRiftSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftSeries,
  SearchOverLolWildRiftSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['s'],
    endAt: ['do fugia'],
    id: [9],
    leagueId: [1],
    modifiedAt: ['nulla cu'],
    name: ['sed Ut proiden'],
    season: ['sint ir'],
    slug: ['yugzjq'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['nisi ea '],
    endAt: ['in labor'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['ullamc'],
    name: ['fugiat '],
    season: ['sedenim i'],
    slug: ['f6e9ww8ig'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftSeries = {
    name: 'in es',
    season: 'laboris laboru',
    slug: 'lb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeries({
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

## get_lol_wild_rift_series_past

List past LoL Wild Rift series

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/series/past`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftSeries](../models/FilterOverLolWildRiftSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftSeries](../models/RangeOverLolWildRiftSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftSeries](../models/SearchOverLolWildRiftSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftSeries,
  SearchOverLolWildRiftSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['s'],
    endAt: ['do fugia'],
    id: [9],
    leagueId: [1],
    modifiedAt: ['nulla cu'],
    name: ['sed Ut proiden'],
    season: ['sint ir'],
    slug: ['yugzjq'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['nisi ea '],
    endAt: ['in labor'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['ullamc'],
    name: ['fugiat '],
    season: ['sedenim i'],
    slug: ['f6e9ww8ig'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftSeries = {
    name: 'in es',
    season: 'laboris laboru',
    slug: 'lb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeriesPast({
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

## get_lol_wild_rift_series_running

List running LoL Wild Rift series

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/series/running`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftSeries](../models/FilterOverLolWildRiftSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftSeries](../models/RangeOverLolWildRiftSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftSeries](../models/SearchOverLolWildRiftSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftSeries,
  SearchOverLolWildRiftSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['s'],
    endAt: ['do fugia'],
    id: [9],
    leagueId: [1],
    modifiedAt: ['nulla cu'],
    name: ['sed Ut proiden'],
    season: ['sint ir'],
    slug: ['yugzjq'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['nisi ea '],
    endAt: ['in labor'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['ullamc'],
    name: ['fugiat '],
    season: ['sedenim i'],
    slug: ['f6e9ww8ig'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftSeries = {
    name: 'in es',
    season: 'laboris laboru',
    slug: 'lb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeriesRunning({
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

## get_lol_wild_rift_series_upcoming

List upcoming LoL Wild Rift series

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/series/upcoming`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftSeries](../models/FilterOverLolWildRiftSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftSeries](../models/RangeOverLolWildRiftSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftSeries](../models/SearchOverLolWildRiftSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftSeries,
  SearchOverLolWildRiftSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['s'],
    endAt: ['do fugia'],
    id: [9],
    leagueId: [1],
    modifiedAt: ['nulla cu'],
    name: ['sed Ut proiden'],
    season: ['sint ir'],
    slug: ['yugzjq'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['nisi ea '],
    endAt: ['in labor'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['ullamc'],
    name: ['fugiat '],
    season: ['sedenim i'],
    slug: ['f6e9ww8ig'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftSeries = {
    name: 'in es',
    season: 'laboris laboru',
    slug: 'lb',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeriesUpcoming({
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
