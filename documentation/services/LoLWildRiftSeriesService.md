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

  const filterOverLolWildRiftSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverLolWildRiftSeries: FilterOverLolWildRiftSeries = {
    beginAt: ['labo'],
    endAt: ['co'],
    id: [5],
    leagueId: [2],
    modifiedAt: ['in labor'],
    name: ['velit'],
    season: ['fugiat '],
    slug: ['hph-bv'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverLolWildRiftSeries: RangeOverLolWildRiftSeries = {
    beginAt: ['ex'],
    endAt: ['ad qui aut'],
    id: [3],
    leagueId: [5],
    modifiedAt: ['ma'],
    name: ['ut de'],
    season: ['nostr'],
    slug: ['6os7g3o0bh7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverLolWildRiftSeries: SearchOverLolWildRiftSeries = {
    name: 'ea nulla proi',
    season: 'culpa pariat',
    slug: '_tw34do',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeries({
    filter: filterOverLolWildRiftSeries,
    range: rangeOverLolWildRiftSeries,
    sort: [[]],
    search: searchOverLolWildRiftSeries,
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

  const filterOverLolWildRiftSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverLolWildRiftSeries: FilterOverLolWildRiftSeries = {
    beginAt: ['labo'],
    endAt: ['co'],
    id: [5],
    leagueId: [2],
    modifiedAt: ['in labor'],
    name: ['velit'],
    season: ['fugiat '],
    slug: ['hph-bv'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverLolWildRiftSeries: RangeOverLolWildRiftSeries = {
    beginAt: ['ex'],
    endAt: ['ad qui aut'],
    id: [3],
    leagueId: [5],
    modifiedAt: ['ma'],
    name: ['ut de'],
    season: ['nostr'],
    slug: ['6os7g3o0bh7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverLolWildRiftSeries: SearchOverLolWildRiftSeries = {
    name: 'ea nulla proi',
    season: 'culpa pariat',
    slug: '_tw34do',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeriesPast({
    filter: filterOverLolWildRiftSeries,
    range: rangeOverLolWildRiftSeries,
    sort: [[]],
    search: searchOverLolWildRiftSeries,
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

  const filterOverLolWildRiftSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverLolWildRiftSeries: FilterOverLolWildRiftSeries = {
    beginAt: ['labo'],
    endAt: ['co'],
    id: [5],
    leagueId: [2],
    modifiedAt: ['in labor'],
    name: ['velit'],
    season: ['fugiat '],
    slug: ['hph-bv'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverLolWildRiftSeries: RangeOverLolWildRiftSeries = {
    beginAt: ['ex'],
    endAt: ['ad qui aut'],
    id: [3],
    leagueId: [5],
    modifiedAt: ['ma'],
    name: ['ut de'],
    season: ['nostr'],
    slug: ['6os7g3o0bh7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverLolWildRiftSeries: SearchOverLolWildRiftSeries = {
    name: 'ea nulla proi',
    season: 'culpa pariat',
    slug: '_tw34do',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeriesRunning({
    filter: filterOverLolWildRiftSeries,
    range: rangeOverLolWildRiftSeries,
    sort: [[]],
    search: searchOverLolWildRiftSeries,
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

  const filterOverLolWildRiftSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverLolWildRiftSeries: FilterOverLolWildRiftSeries = {
    beginAt: ['labo'],
    endAt: ['co'],
    id: [5],
    leagueId: [2],
    modifiedAt: ['in labor'],
    name: ['velit'],
    season: ['fugiat '],
    slug: ['hph-bv'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverLolWildRiftSeries: RangeOverLolWildRiftSeries = {
    beginAt: ['ex'],
    endAt: ['ad qui aut'],
    id: [3],
    leagueId: [5],
    modifiedAt: ['ma'],
    name: ['ut de'],
    season: ['nostr'],
    slug: ['6os7g3o0bh7'],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
    year: [123],
  };
  const opponentType12 = OpponentType.PLAYER;

  const searchOverLolWildRiftSeries: SearchOverLolWildRiftSeries = {
    name: 'ea nulla proi',
    season: 'culpa pariat',
    slug: '_tw34do',
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftSeries.getLolWildRiftSeriesUpcoming({
    filter: filterOverLolWildRiftSeries,
    range: rangeOverLolWildRiftSeries,
    sort: [[]],
    search: searchOverLolWildRiftSeries,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
