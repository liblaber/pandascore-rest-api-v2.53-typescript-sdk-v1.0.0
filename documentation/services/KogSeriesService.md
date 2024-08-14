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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogSeries: FilterOverKogSeries = {
    beginAt: ['ex'],
    endAt: ['in sit no'],
    id: [8],
    leagueId: [9],
    modifiedAt: ['veniam'],
    name: ['aliquip eiu'],
    season: ['nulla'],
    slug: ['_p3_cuw5'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogSeries: RangeOverKogSeries = {
    beginAt: ['i'],
    endAt: ['ut'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['minim id p'],
    name: ['volupta'],
    season: ['officia'],
    slug: ['nl'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogSeries: SearchOverKogSeries = {
    name: 'aliqu',
    season: 'dolor ipsum ',
    slug: '-n',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeries({
    filter: filterOverKogSeries,
    range: rangeOverKogSeries,
    sort: [[]],
    search: searchOverKogSeries,
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogSeries: FilterOverKogSeries = {
    beginAt: ['ex'],
    endAt: ['in sit no'],
    id: [8],
    leagueId: [9],
    modifiedAt: ['veniam'],
    name: ['aliquip eiu'],
    season: ['nulla'],
    slug: ['_p3_cuw5'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogSeries: RangeOverKogSeries = {
    beginAt: ['i'],
    endAt: ['ut'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['minim id p'],
    name: ['volupta'],
    season: ['officia'],
    slug: ['nl'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogSeries: SearchOverKogSeries = {
    name: 'aliqu',
    season: 'dolor ipsum ',
    slug: '-n',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeriesPast({
    filter: filterOverKogSeries,
    range: rangeOverKogSeries,
    sort: [[]],
    search: searchOverKogSeries,
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogSeries: FilterOverKogSeries = {
    beginAt: ['ex'],
    endAt: ['in sit no'],
    id: [8],
    leagueId: [9],
    modifiedAt: ['veniam'],
    name: ['aliquip eiu'],
    season: ['nulla'],
    slug: ['_p3_cuw5'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogSeries: RangeOverKogSeries = {
    beginAt: ['i'],
    endAt: ['ut'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['minim id p'],
    name: ['volupta'],
    season: ['officia'],
    slug: ['nl'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogSeries: SearchOverKogSeries = {
    name: 'aliqu',
    season: 'dolor ipsum ',
    slug: '-n',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeriesRunning({
    filter: filterOverKogSeries,
    range: rangeOverKogSeries,
    sort: [[]],
    search: searchOverKogSeries,
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogSeries: FilterOverKogSeries = {
    beginAt: ['ex'],
    endAt: ['in sit no'],
    id: [8],
    leagueId: [9],
    modifiedAt: ['veniam'],
    name: ['aliquip eiu'],
    season: ['nulla'],
    slug: ['_p3_cuw5'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogSeries: RangeOverKogSeries = {
    beginAt: ['i'],
    endAt: ['ut'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['minim id p'],
    name: ['volupta'],
    season: ['officia'],
    slug: ['nl'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogSeries: SearchOverKogSeries = {
    name: 'aliqu',
    season: 'dolor ipsum ',
    slug: '-n',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogSeries.getKogSeriesUpcoming({
    filter: filterOverKogSeries,
    range: rangeOverKogSeries,
    sort: [[]],
    search: searchOverKogSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
