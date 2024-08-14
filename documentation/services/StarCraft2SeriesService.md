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

  const filterOverStarcraft2SeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2Series: FilterOverStarcraft2Series = {
    beginAt: ['id commodo dolo'],
    endAt: ['id labore'],
    id: [5],
    leagueId: [1],
    modifiedAt: ['laboris Exce'],
    name: ['utdeserunt c'],
    season: ['labore'],
    slug: ['ci'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2Series: RangeOverStarcraft2Series = {
    beginAt: ['in des'],
    endAt: ['cup'],
    id: [5],
    leagueId: [10],
    modifiedAt: ['nostru'],
    name: ['aliquip'],
    season: ['do consecte'],
    slug: ['4nb7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2Series: SearchOverStarcraft2Series = {
    name: 'occae',
    season: 'esse id rep',
    slug: 'l3b',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2Series({
    filter: filterOverStarcraft2Series,
    range: rangeOverStarcraft2Series,
    sort: [[]],
    search: searchOverStarcraft2Series,
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

  const filterOverStarcraft2SeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2Series: FilterOverStarcraft2Series = {
    beginAt: ['id commodo dolo'],
    endAt: ['id labore'],
    id: [5],
    leagueId: [1],
    modifiedAt: ['laboris Exce'],
    name: ['utdeserunt c'],
    season: ['labore'],
    slug: ['ci'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2Series: RangeOverStarcraft2Series = {
    beginAt: ['in des'],
    endAt: ['cup'],
    id: [5],
    leagueId: [10],
    modifiedAt: ['nostru'],
    name: ['aliquip'],
    season: ['do consecte'],
    slug: ['4nb7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2Series: SearchOverStarcraft2Series = {
    name: 'occae',
    season: 'esse id rep',
    slug: 'l3b',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2SeriesPast({
    filter: filterOverStarcraft2Series,
    range: rangeOverStarcraft2Series,
    sort: [[]],
    search: searchOverStarcraft2Series,
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

  const filterOverStarcraft2SeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2Series: FilterOverStarcraft2Series = {
    beginAt: ['id commodo dolo'],
    endAt: ['id labore'],
    id: [5],
    leagueId: [1],
    modifiedAt: ['laboris Exce'],
    name: ['utdeserunt c'],
    season: ['labore'],
    slug: ['ci'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2Series: RangeOverStarcraft2Series = {
    beginAt: ['in des'],
    endAt: ['cup'],
    id: [5],
    leagueId: [10],
    modifiedAt: ['nostru'],
    name: ['aliquip'],
    season: ['do consecte'],
    slug: ['4nb7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2Series: SearchOverStarcraft2Series = {
    name: 'occae',
    season: 'esse id rep',
    slug: 'l3b',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2SeriesRunning({
    filter: filterOverStarcraft2Series,
    range: rangeOverStarcraft2Series,
    sort: [[]],
    search: searchOverStarcraft2Series,
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

  const filterOverStarcraft2SeriesVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2Series: FilterOverStarcraft2Series = {
    beginAt: ['id commodo dolo'],
    endAt: ['id labore'],
    id: [5],
    leagueId: [1],
    modifiedAt: ['laboris Exce'],
    name: ['utdeserunt c'],
    season: ['labore'],
    slug: ['ci'],
    videogameTitle: [filterOverStarcraft2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2Series: RangeOverStarcraft2Series = {
    beginAt: ['in des'],
    endAt: ['cup'],
    id: [5],
    leagueId: [10],
    modifiedAt: ['nostru'],
    name: ['aliquip'],
    season: ['do consecte'],
    slug: ['4nb7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2Series: SearchOverStarcraft2Series = {
    name: 'occae',
    season: 'esse id rep',
    slug: 'l3b',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Series.getStarcraft2SeriesUpcoming({
    filter: filterOverStarcraft2Series,
    range: rangeOverStarcraft2Series,
    sort: [[]],
    search: searchOverStarcraft2Series,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
