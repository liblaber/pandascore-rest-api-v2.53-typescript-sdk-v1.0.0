# LoLSeriesService

A list of all methods in the `LoLSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                     |
| :-------------------------------------------------- | :---------------------------------------------- |
| [get_lol_series](#get_lol_series)                   | List series for the League of Legends videogame |
| [get_lol_series_past](#get_lol_series_past)         | List past League of Legends series              |
| [get_lol_series_running](#get_lol_series_running)   | List running League of Legends series           |
| [get_lol_series_upcoming](#get_lol_series_upcoming) | List upcoming League of Legends series          |

## get_lol_series

List series for the League of Legends videogame

- HTTP Method: `GET`
- Endpoint: `/lol/series`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLSeries](../models/FilterOverLoLSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLSeries](../models/RangeOverLoLSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLSeries](../models/SearchOverLoLSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLSeries,
  SearchOverLoLSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLSeries = {
    beginAt: ['officia'],
    endAt: ['Lor'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['Excepteur cill'],
    name: ['commodo'],
    season: ['deserunt'],
    slug: ['1g8'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLSeries = {
    beginAt: ['in'],
    endAt: ['non o'],
    id: [4],
    leagueId: [8],
    modifiedAt: ['cill'],
    name: ['reprehender'],
    season: ['commodo'],
    slug: ['nynl12'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLSeries = {
    name: 'enimqui',
    season: 'cupidatat nos',
    slug: 'swsuk5uu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLSeries.getLolSeries({
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

## get_lol_series_past

List past League of Legends series

- HTTP Method: `GET`
- Endpoint: `/lol/series/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLSeries](../models/FilterOverLoLSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLSeries](../models/RangeOverLoLSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLSeries](../models/SearchOverLoLSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLSeries,
  SearchOverLoLSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLSeries = {
    beginAt: ['officia'],
    endAt: ['Lor'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['Excepteur cill'],
    name: ['commodo'],
    season: ['deserunt'],
    slug: ['1g8'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLSeries = {
    beginAt: ['in'],
    endAt: ['non o'],
    id: [4],
    leagueId: [8],
    modifiedAt: ['cill'],
    name: ['reprehender'],
    season: ['commodo'],
    slug: ['nynl12'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLSeries = {
    name: 'enimqui',
    season: 'cupidatat nos',
    slug: 'swsuk5uu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLSeries.getLolSeriesPast({
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

## get_lol_series_running

List running League of Legends series

- HTTP Method: `GET`
- Endpoint: `/lol/series/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLSeries](../models/FilterOverLoLSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLSeries](../models/RangeOverLoLSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLSeries](../models/SearchOverLoLSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLSeries,
  SearchOverLoLSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLSeries = {
    beginAt: ['officia'],
    endAt: ['Lor'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['Excepteur cill'],
    name: ['commodo'],
    season: ['deserunt'],
    slug: ['1g8'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLSeries = {
    beginAt: ['in'],
    endAt: ['non o'],
    id: [4],
    leagueId: [8],
    modifiedAt: ['cill'],
    name: ['reprehender'],
    season: ['commodo'],
    slug: ['nynl12'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLSeries = {
    name: 'enimqui',
    season: 'cupidatat nos',
    slug: 'swsuk5uu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLSeries.getLolSeriesRunning({
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

## get_lol_series_upcoming

List upcoming League of Legends series

- HTTP Method: `GET`
- Endpoint: `/lol/series/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLSeries](../models/FilterOverLoLSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLSeries](../models/RangeOverLoLSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLSeries](../models/SearchOverLoLSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLSeries,
  SearchOverLoLSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 5;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLSeries = {
    beginAt: ['officia'],
    endAt: ['Lor'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['Excepteur cill'],
    name: ['commodo'],
    season: ['deserunt'],
    slug: ['1g8'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLSeries = {
    beginAt: ['in'],
    endAt: ['non o'],
    id: [4],
    leagueId: [8],
    modifiedAt: ['cill'],
    name: ['reprehender'],
    season: ['commodo'],
    slug: ['nynl12'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLSeries = {
    name: 'enimqui',
    season: 'cupidatat nos',
    slug: 'swsuk5uu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLSeries.getLolSeriesUpcoming({
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
