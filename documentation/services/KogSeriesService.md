# KogSeriesService

A list of all methods in the `KogSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                 |
| :-------------------------------------------------- | :------------------------------------------ |
| [get_kog_series](#get_kog_series)                   | List series for the King of Glory videogame |
| [get_kog_series_past](#get_kog_series_past)         | List past King of Glory series              |
| [get_kog_series_running](#get_kog_series_running)   | List running King of Glory series           |
| [get_kog_series_upcoming](#get_kog_series_upcoming) | List upcoming King of Glory series          |

## get_kog_series

List series for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/series`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogSeries,
  SearchOverKogSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverKogSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogSeries = {
    beginAt: ['sit'],
    endAt: ['voluptate '],
    id: [4],
    leagueId: [10],
    modifiedAt: ['est proide'],
    name: ['amet r'],
    season: ['in ven'],
    slug: ['_jz9a-1ou_'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogSeries = {
    beginAt: ['la'],
    endAt: ['m'],
    id: [6],
    leagueId: [10],
    modifiedAt: ['culpa dolo'],
    name: ['sint pariatur'],
    season: ['consectetur '],
    slug: ['c_qiyh6i'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogSeries = {
    name: 'dolor',
    season: 'sintminim deser',
    slug: 'yv',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeries({
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

## get_kog_series_past

List past King of Glory series

- HTTP Method: `GET`
- Endpoint: `/kog/series/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogSeries,
  SearchOverKogSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverKogSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogSeries = {
    beginAt: ['sit'],
    endAt: ['voluptate '],
    id: [4],
    leagueId: [10],
    modifiedAt: ['est proide'],
    name: ['amet r'],
    season: ['in ven'],
    slug: ['_jz9a-1ou_'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogSeries = {
    beginAt: ['la'],
    endAt: ['m'],
    id: [6],
    leagueId: [10],
    modifiedAt: ['culpa dolo'],
    name: ['sint pariatur'],
    season: ['consectetur '],
    slug: ['c_qiyh6i'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogSeries = {
    name: 'dolor',
    season: 'sintminim deser',
    slug: 'yv',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeriesPast({
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

## get_kog_series_running

List running King of Glory series

- HTTP Method: `GET`
- Endpoint: `/kog/series/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogSeries,
  SearchOverKogSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverKogSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogSeries = {
    beginAt: ['sit'],
    endAt: ['voluptate '],
    id: [4],
    leagueId: [10],
    modifiedAt: ['est proide'],
    name: ['amet r'],
    season: ['in ven'],
    slug: ['_jz9a-1ou_'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogSeries = {
    beginAt: ['la'],
    endAt: ['m'],
    id: [6],
    leagueId: [10],
    modifiedAt: ['culpa dolo'],
    name: ['sint pariatur'],
    season: ['consectetur '],
    slug: ['c_qiyh6i'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogSeries = {
    name: 'dolor',
    season: 'sintminim deser',
    slug: 'yv',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeriesRunning({
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

## get_kog_series_upcoming

List upcoming King of Glory series

- HTTP Method: `GET`
- Endpoint: `/kog/series/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogSeries,
  SearchOverKogSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverKogSeriesVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogSeries = {
    beginAt: ['sit'],
    endAt: ['voluptate '],
    id: [4],
    leagueId: [10],
    modifiedAt: ['est proide'],
    name: ['amet r'],
    season: ['in ven'],
    slug: ['_jz9a-1ou_'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogSeries = {
    beginAt: ['la'],
    endAt: ['m'],
    id: [6],
    leagueId: [10],
    modifiedAt: ['culpa dolo'],
    name: ['sint pariatur'],
    season: ['consectetur '],
    slug: ['c_qiyh6i'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogSeries = {
    name: 'dolor',
    season: 'sintminim deser',
    slug: 'yv',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeriesUpcoming({
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
