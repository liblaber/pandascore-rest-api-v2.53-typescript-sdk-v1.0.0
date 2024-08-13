# CounterStrikeSeriesService

A list of all methods in the `CounterStrikeSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                  |
| :---------------------------------------------------- | :------------------------------------------- |
| [get_csgo_series](#get_csgo_series)                   | List series for the Counter-Strike videogame |
| [get_csgo_series_past](#get_csgo_series_past)         | List past Counter-Strike series              |
| [get_csgo_series_running](#get_csgo_series_running)   | List running Counter-Strike series           |
| [get_csgo_series_upcoming](#get_csgo_series_upcoming) | List upcoming Counter-Strike series          |

## get_csgo_series

List series for the Counter-Strike videogame

- HTTP Method: `GET`
- Endpoint: `/csgo/series`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoSeries](../models/FilterOverCsgoSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoSeries](../models/RangeOverCsgoSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoSeries](../models/SearchOverCsgoSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoSeries,
  SearchOverCsgoSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoSeries: FilterOverCsgoSeries = {
    beginAt: ['consectet'],
    endAt: ['ut Ut dolo'],
    id: [10],
    leagueId: [3],
    modifiedAt: ['do commodo in '],
    name: ['ut sed mag'],
    season: ['deserunt no'],
    slug: ['xn5ho'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoSeries: RangeOverCsgoSeries = {
    beginAt: ['ipsum tempo'],
    endAt: ['ad '],
    id: [9],
    leagueId: [10],
    modifiedAt: ['mini'],
    name: ['quis '],
    season: ['est ea aliqu'],
    slug: ['v9v6xpow'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoSeries: SearchOverCsgoSeries = {
    name: 'in mollit offic',
    season: 'nostrud elit',
    slug: 'n-l-8j',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeries({
    filter: filterOverCsgoSeries,
    range: rangeOverCsgoSeries,
    sort: [[]],
    search: searchOverCsgoSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_series_past

List past Counter-Strike series

- HTTP Method: `GET`
- Endpoint: `/csgo/series/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoSeries](../models/FilterOverCsgoSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoSeries](../models/RangeOverCsgoSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoSeries](../models/SearchOverCsgoSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoSeries,
  SearchOverCsgoSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoSeries: FilterOverCsgoSeries = {
    beginAt: ['consectet'],
    endAt: ['ut Ut dolo'],
    id: [10],
    leagueId: [3],
    modifiedAt: ['do commodo in '],
    name: ['ut sed mag'],
    season: ['deserunt no'],
    slug: ['xn5ho'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoSeries: RangeOverCsgoSeries = {
    beginAt: ['ipsum tempo'],
    endAt: ['ad '],
    id: [9],
    leagueId: [10],
    modifiedAt: ['mini'],
    name: ['quis '],
    season: ['est ea aliqu'],
    slug: ['v9v6xpow'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoSeries: SearchOverCsgoSeries = {
    name: 'in mollit offic',
    season: 'nostrud elit',
    slug: 'n-l-8j',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeriesPast({
    filter: filterOverCsgoSeries,
    range: rangeOverCsgoSeries,
    sort: [[]],
    search: searchOverCsgoSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_series_running

List running Counter-Strike series

- HTTP Method: `GET`
- Endpoint: `/csgo/series/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoSeries](../models/FilterOverCsgoSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoSeries](../models/RangeOverCsgoSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoSeries](../models/SearchOverCsgoSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoSeries,
  SearchOverCsgoSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoSeries: FilterOverCsgoSeries = {
    beginAt: ['consectet'],
    endAt: ['ut Ut dolo'],
    id: [10],
    leagueId: [3],
    modifiedAt: ['do commodo in '],
    name: ['ut sed mag'],
    season: ['deserunt no'],
    slug: ['xn5ho'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoSeries: RangeOverCsgoSeries = {
    beginAt: ['ipsum tempo'],
    endAt: ['ad '],
    id: [9],
    leagueId: [10],
    modifiedAt: ['mini'],
    name: ['quis '],
    season: ['est ea aliqu'],
    slug: ['v9v6xpow'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoSeries: SearchOverCsgoSeries = {
    name: 'in mollit offic',
    season: 'nostrud elit',
    slug: 'n-l-8j',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeriesRunning({
    filter: filterOverCsgoSeries,
    range: rangeOverCsgoSeries,
    sort: [[]],
    search: searchOverCsgoSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_series_upcoming

List upcoming Counter-Strike series

- HTTP Method: `GET`
- Endpoint: `/csgo/series/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoSeries](../models/FilterOverCsgoSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoSeries](../models/RangeOverCsgoSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoSeries](../models/SearchOverCsgoSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoSeries,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoSeries,
  SearchOverCsgoSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoSeries: FilterOverCsgoSeries = {
    beginAt: ['consectet'],
    endAt: ['ut Ut dolo'],
    id: [10],
    leagueId: [3],
    modifiedAt: ['do commodo in '],
    name: ['ut sed mag'],
    season: ['deserunt no'],
    slug: ['xn5ho'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoSeries: RangeOverCsgoSeries = {
    beginAt: ['ipsum tempo'],
    endAt: ['ad '],
    id: [9],
    leagueId: [10],
    modifiedAt: ['mini'],
    name: ['quis '],
    season: ['est ea aliqu'],
    slug: ['v9v6xpow'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoSeries: SearchOverCsgoSeries = {
    name: 'in mollit offic',
    season: 'nostrud elit',
    slug: 'n-l-8j',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeriesUpcoming({
    filter: filterOverCsgoSeries,
    range: rangeOverCsgoSeries,
    sort: [[]],
    search: searchOverCsgoSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
