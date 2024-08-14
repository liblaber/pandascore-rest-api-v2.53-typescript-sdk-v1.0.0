# Dota2SeriesService

A list of all methods in the `Dota2SeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                          |
| :------------------------------------------------------ | :----------------------------------- |
| [get_dota2_series](#get_dota2_series)                   | List series for the Dota 2 videogame |
| [get_dota2_series_past](#get_dota2_series_past)         | List past Dota 2 series              |
| [get_dota2_series_running](#get_dota2_series_running)   | List running Dota 2 series           |
| [get_dota2_series_upcoming](#get_dota2_series_upcoming) | List upcoming Dota 2 series          |

## get_dota2_series

List series for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/series`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Series](../models/FilterOverDota2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Series](../models/RangeOverDota2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Series](../models/SearchOverDota2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Series,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2Series,
  SearchOverDota2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverDota2SeriesVideogameTitle = 9;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2Series: FilterOverDota2Series = {
    beginAt: ['cillum d'],
    endAt: ['laboris'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['null'],
    name: ['dolore'],
    season: ['ut qui '],
    slug: ['e7cx9f3y'],
    videogameTitle: [filterOverDota2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2Series: RangeOverDota2Series = {
    beginAt: ['exercitation'],
    endAt: ['ex'],
    id: [4],
    leagueId: [10],
    modifiedAt: ['incididunt '],
    name: ['dolor elit co'],
    season: ['exercitat'],
    slug: ['6wkd46'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2Series: SearchOverDota2Series = {
    name: 'dolore ut en',
    season: 'autesed',
    slug: '1jo-8',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Series.getDota2Series({
    filter: filterOverDota2Series,
    range: rangeOverDota2Series,
    sort: [[]],
    search: searchOverDota2Series,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_series_past

List past Dota 2 series

- HTTP Method: `GET`
- Endpoint: `/dota2/series/past`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Series](../models/FilterOverDota2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Series](../models/RangeOverDota2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Series](../models/SearchOverDota2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Series,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2Series,
  SearchOverDota2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverDota2SeriesVideogameTitle = 9;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2Series: FilterOverDota2Series = {
    beginAt: ['cillum d'],
    endAt: ['laboris'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['null'],
    name: ['dolore'],
    season: ['ut qui '],
    slug: ['e7cx9f3y'],
    videogameTitle: [filterOverDota2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2Series: RangeOverDota2Series = {
    beginAt: ['exercitation'],
    endAt: ['ex'],
    id: [4],
    leagueId: [10],
    modifiedAt: ['incididunt '],
    name: ['dolor elit co'],
    season: ['exercitat'],
    slug: ['6wkd46'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2Series: SearchOverDota2Series = {
    name: 'dolore ut en',
    season: 'autesed',
    slug: '1jo-8',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Series.getDota2SeriesPast({
    filter: filterOverDota2Series,
    range: rangeOverDota2Series,
    sort: [[]],
    search: searchOverDota2Series,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_series_running

List running Dota 2 series

- HTTP Method: `GET`
- Endpoint: `/dota2/series/running`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Series](../models/FilterOverDota2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Series](../models/RangeOverDota2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Series](../models/SearchOverDota2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Series,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2Series,
  SearchOverDota2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverDota2SeriesVideogameTitle = 9;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2Series: FilterOverDota2Series = {
    beginAt: ['cillum d'],
    endAt: ['laboris'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['null'],
    name: ['dolore'],
    season: ['ut qui '],
    slug: ['e7cx9f3y'],
    videogameTitle: [filterOverDota2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2Series: RangeOverDota2Series = {
    beginAt: ['exercitation'],
    endAt: ['ex'],
    id: [4],
    leagueId: [10],
    modifiedAt: ['incididunt '],
    name: ['dolor elit co'],
    season: ['exercitat'],
    slug: ['6wkd46'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2Series: SearchOverDota2Series = {
    name: 'dolore ut en',
    season: 'autesed',
    slug: '1jo-8',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Series.getDota2SeriesRunning({
    filter: filterOverDota2Series,
    range: rangeOverDota2Series,
    sort: [[]],
    search: searchOverDota2Series,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_series_upcoming

List upcoming Dota 2 series

- HTTP Method: `GET`
- Endpoint: `/dota2/series/upcoming`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Series](../models/FilterOverDota2Series.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Series](../models/RangeOverDota2Series.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Series](../models/SearchOverDota2Series.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Series,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2Series,
  SearchOverDota2Series,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverDota2SeriesVideogameTitle = 9;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2Series: FilterOverDota2Series = {
    beginAt: ['cillum d'],
    endAt: ['laboris'],
    id: [5],
    leagueId: [3],
    modifiedAt: ['null'],
    name: ['dolore'],
    season: ['ut qui '],
    slug: ['e7cx9f3y'],
    videogameTitle: [filterOverDota2SeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2Series: RangeOverDota2Series = {
    beginAt: ['exercitation'],
    endAt: ['ex'],
    id: [4],
    leagueId: [10],
    modifiedAt: ['incididunt '],
    name: ['dolor elit co'],
    season: ['exercitat'],
    slug: ['6wkd46'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2Series: SearchOverDota2Series = {
    name: 'dolore ut en',
    season: 'autesed',
    slug: '1jo-8',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Series.getDota2SeriesUpcoming({
    filter: filterOverDota2Series,
    range: rangeOverDota2Series,
    sort: [[]],
    search: searchOverDota2Series,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
