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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 5;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwSeries = {
    beginAt: ['deserunt'],
    endAt: ['dolore'],
    id: [8],
    leagueId: [3],
    modifiedAt: ['non in '],
    name: ['ut consectetu'],
    season: ['incidi'],
    slug: ['0s_31dv1'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwSeries = {
    beginAt: ['Exce'],
    endAt: ['t'],
    id: [1],
    leagueId: [2],
    modifiedAt: ['nostrud i'],
    name: ['sed enim do'],
    season: ['culpa laborum '],
    slug: ['98'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverOwSeries = {
    name: 'ut qui',
    season: 'eiusmod',
    slug: 'van0',
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 5;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwSeries = {
    beginAt: ['deserunt'],
    endAt: ['dolore'],
    id: [8],
    leagueId: [3],
    modifiedAt: ['non in '],
    name: ['ut consectetu'],
    season: ['incidi'],
    slug: ['0s_31dv1'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwSeries = {
    beginAt: ['Exce'],
    endAt: ['t'],
    id: [1],
    leagueId: [2],
    modifiedAt: ['nostrud i'],
    name: ['sed enim do'],
    season: ['culpa laborum '],
    slug: ['98'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverOwSeries = {
    name: 'ut qui',
    season: 'eiusmod',
    slug: 'van0',
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 5;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwSeries = {
    beginAt: ['deserunt'],
    endAt: ['dolore'],
    id: [8],
    leagueId: [3],
    modifiedAt: ['non in '],
    name: ['ut consectetu'],
    season: ['incidi'],
    slug: ['0s_31dv1'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwSeries = {
    beginAt: ['Exce'],
    endAt: ['t'],
    id: [1],
    leagueId: [2],
    modifiedAt: ['nostrud i'],
    name: ['sed enim do'],
    season: ['culpa laborum '],
    slug: ['98'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverOwSeries = {
    name: 'ut qui',
    season: 'eiusmod',
    slug: 'van0',
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverOwSeriesVideogameTitle = 5;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwSeries = {
    beginAt: ['deserunt'],
    endAt: ['dolore'],
    id: [8],
    leagueId: [3],
    modifiedAt: ['non in '],
    name: ['ut consectetu'],
    season: ['incidi'],
    slug: ['0s_31dv1'],
    videogameTitle: [filterOverOwSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwSeries = {
    beginAt: ['Exce'],
    endAt: ['t'],
    id: [1],
    leagueId: [2],
    modifiedAt: ['nostrud i'],
    name: ['sed enim do'],
    season: ['culpa laborum '],
    slug: ['98'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverOwSeries = {
    name: 'ut qui',
    season: 'eiusmod',
    slug: 'van0',
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
