# R6SiegeSeriesService

A list of all methods in the `R6SiegeSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                     |
| :---------------------------------------------------------- | :---------------------------------------------- |
| [get_r6siege_series](#get_r6siege_series)                   | List series for the Rainbow Six Siege videogame |
| [get_r6siege_series_past](#get_r6siege_series_past)         | List past Rainbow Six Siege series              |
| [get_r6siege_series_running](#get_r6siege_series_running)   | List running Rainbow Six Siege series           |
| [get_r6siege_series_upcoming](#get_r6siege_series_upcoming) | List upcoming Rainbow Six Siege series          |

## get_r6siege_series

List series for the Rainbow Six Siege videogame

- HTTP Method: `GET`
- Endpoint: `/r6siege/series`

**Parameters**

| Name    | Type                                                            | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeSeries](../models/FilterOverR6SiegeSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeSeries](../models/RangeOverR6SiegeSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeSeries](../models/SearchOverR6SiegeSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverR6SiegeSeriesVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverR6SiegeSeries = {
    beginAt: ['Ut'],
    endAt: ['velit veniam'],
    id: [10],
    leagueId: [10],
    modifiedAt: ['est minim eu Lo'],
    name: ['sedut qui ma'],
    season: ['ut sunt culpa'],
    slug: ['bv9nvys'],
    videogameTitle: [filterOverR6SiegeSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverR6SiegeSeries = {
    beginAt: ['repreh'],
    endAt: ['ex'],
    id: [9],
    leagueId: [4],
    modifiedAt: ['elit et anim'],
    name: ['culpa o'],
    season: ['cillum aute ali'],
    slug: ['sqp'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverR6SiegeSeries = {
    name: 'irure in',
    season: 'ut pariatu',
    slug: 'ey3',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeSeries.getR6siegeSeries({
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

## get_r6siege_series_past

List past Rainbow Six Siege series

- HTTP Method: `GET`
- Endpoint: `/r6siege/series/past`

**Parameters**

| Name    | Type                                                            | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeSeries](../models/FilterOverR6SiegeSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeSeries](../models/RangeOverR6SiegeSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeSeries](../models/SearchOverR6SiegeSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverR6SiegeSeriesVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverR6SiegeSeries = {
    beginAt: ['Ut'],
    endAt: ['velit veniam'],
    id: [10],
    leagueId: [10],
    modifiedAt: ['est minim eu Lo'],
    name: ['sedut qui ma'],
    season: ['ut sunt culpa'],
    slug: ['bv9nvys'],
    videogameTitle: [filterOverR6SiegeSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverR6SiegeSeries = {
    beginAt: ['repreh'],
    endAt: ['ex'],
    id: [9],
    leagueId: [4],
    modifiedAt: ['elit et anim'],
    name: ['culpa o'],
    season: ['cillum aute ali'],
    slug: ['sqp'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverR6SiegeSeries = {
    name: 'irure in',
    season: 'ut pariatu',
    slug: 'ey3',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeSeries.getR6siegeSeriesPast({
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

## get_r6siege_series_running

List running Rainbow Six Siege series

- HTTP Method: `GET`
- Endpoint: `/r6siege/series/running`

**Parameters**

| Name    | Type                                                            | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeSeries](../models/FilterOverR6SiegeSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeSeries](../models/RangeOverR6SiegeSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeSeries](../models/SearchOverR6SiegeSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverR6SiegeSeriesVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverR6SiegeSeries = {
    beginAt: ['Ut'],
    endAt: ['velit veniam'],
    id: [10],
    leagueId: [10],
    modifiedAt: ['est minim eu Lo'],
    name: ['sedut qui ma'],
    season: ['ut sunt culpa'],
    slug: ['bv9nvys'],
    videogameTitle: [filterOverR6SiegeSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverR6SiegeSeries = {
    beginAt: ['repreh'],
    endAt: ['ex'],
    id: [9],
    leagueId: [4],
    modifiedAt: ['elit et anim'],
    name: ['culpa o'],
    season: ['cillum aute ali'],
    slug: ['sqp'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverR6SiegeSeries = {
    name: 'irure in',
    season: 'ut pariatu',
    slug: 'ey3',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeSeries.getR6siegeSeriesRunning({
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

## get_r6siege_series_upcoming

List upcoming Rainbow Six Siege series

- HTTP Method: `GET`
- Endpoint: `/r6siege/series/upcoming`

**Parameters**

| Name    | Type                                                            | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeSeries](../models/FilterOverR6SiegeSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeSeries](../models/RangeOverR6SiegeSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeSeries](../models/SearchOverR6SiegeSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverR6SiegeSeriesVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverR6SiegeSeries = {
    beginAt: ['Ut'],
    endAt: ['velit veniam'],
    id: [10],
    leagueId: [10],
    modifiedAt: ['est minim eu Lo'],
    name: ['sedut qui ma'],
    season: ['ut sunt culpa'],
    slug: ['bv9nvys'],
    videogameTitle: [filterOverR6SiegeSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverR6SiegeSeries = {
    beginAt: ['repreh'],
    endAt: ['ex'],
    id: [9],
    leagueId: [4],
    modifiedAt: ['elit et anim'],
    name: ['culpa o'],
    season: ['cillum aute ali'],
    slug: ['sqp'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverR6SiegeSeries = {
    name: 'irure in',
    season: 'ut pariatu',
    slug: 'ey3',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeSeries.getR6siegeSeriesUpcoming({
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
