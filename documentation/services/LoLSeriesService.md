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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 9;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nisi amet'],
    endAt: ['reprehen'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['Ut '],
    name: ['sintmoll'],
    season: ['ad aliqua in'],
    slug: ['1br98fc'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['sint co'],
    endAt: ['tempor esse co'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['E'],
    name: ['eliti'],
    season: ['labore exercita'],
    slug: ['93mxp18t'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'mollit p',
    season: 'exerc',
    slug: 'wm55',
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 9;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nisi amet'],
    endAt: ['reprehen'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['Ut '],
    name: ['sintmoll'],
    season: ['ad aliqua in'],
    slug: ['1br98fc'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['sint co'],
    endAt: ['tempor esse co'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['E'],
    name: ['eliti'],
    season: ['labore exercita'],
    slug: ['93mxp18t'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'mollit p',
    season: 'exerc',
    slug: 'wm55',
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 9;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nisi amet'],
    endAt: ['reprehen'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['Ut '],
    name: ['sintmoll'],
    season: ['ad aliqua in'],
    slug: ['1br98fc'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['sint co'],
    endAt: ['tempor esse co'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['E'],
    name: ['eliti'],
    season: ['labore exercita'],
    slug: ['93mxp18t'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'mollit p',
    season: 'exerc',
    slug: 'wm55',
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 9;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nisi amet'],
    endAt: ['reprehen'],
    id: [7],
    leagueId: [2],
    modifiedAt: ['Ut '],
    name: ['sintmoll'],
    season: ['ad aliqua in'],
    slug: ['1br98fc'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['sint co'],
    endAt: ['tempor esse co'],
    id: [7],
    leagueId: [3],
    modifiedAt: ['E'],
    name: ['eliti'],
    season: ['labore exercita'],
    slug: ['93mxp18t'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'mollit p',
    season: 'exerc',
    slug: 'wm55',
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
