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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 1;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['qui ut non'],
    endAt: ['id nulla'],
    id: [2],
    leagueId: [3],
    modifiedAt: ['Lorem Ut '],
    name: ['est Duis qui ip'],
    season: ['ad et'],
    slug: ['ifahqslh'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['con'],
    endAt: ['con'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['ad'],
    name: ['in an'],
    season: ['aliqua sit'],
    slug: ['4w4'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'fugiat o',
    season: 'labore in ',
    slug: '7lfo_8w',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeries({
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 1;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['qui ut non'],
    endAt: ['id nulla'],
    id: [2],
    leagueId: [3],
    modifiedAt: ['Lorem Ut '],
    name: ['est Duis qui ip'],
    season: ['ad et'],
    slug: ['ifahqslh'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['con'],
    endAt: ['con'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['ad'],
    name: ['in an'],
    season: ['aliqua sit'],
    slug: ['4w4'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'fugiat o',
    season: 'labore in ',
    slug: '7lfo_8w',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeriesPast({
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 1;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['qui ut non'],
    endAt: ['id nulla'],
    id: [2],
    leagueId: [3],
    modifiedAt: ['Lorem Ut '],
    name: ['est Duis qui ip'],
    season: ['ad et'],
    slug: ['ifahqslh'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['con'],
    endAt: ['con'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['ad'],
    name: ['in an'],
    season: ['aliqua sit'],
    slug: ['4w4'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'fugiat o',
    season: 'labore in ',
    slug: '7lfo_8w',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeriesRunning({
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 1;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['qui ut non'],
    endAt: ['id nulla'],
    id: [2],
    leagueId: [3],
    modifiedAt: ['Lorem Ut '],
    name: ['est Duis qui ip'],
    season: ['ad et'],
    slug: ['ifahqslh'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['con'],
    endAt: ['con'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['ad'],
    name: ['in an'],
    season: ['aliqua sit'],
    slug: ['4w4'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'fugiat o',
    season: 'labore in ',
    slug: '7lfo_8w',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeSeries.getCsgoSeriesUpcoming({
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
