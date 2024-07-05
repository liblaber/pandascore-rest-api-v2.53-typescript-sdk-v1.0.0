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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 4;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nulla pa'],
    endAt: ['aliquip'],
    id: [1],
    leagueId: [1],
    modifiedAt: ['nisi veniam est'],
    name: ['magna reprehen'],
    season: ['veniam '],
    slug: ['x'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['id'],
    endAt: ['do'],
    id: [6],
    leagueId: [9],
    modifiedAt: ['reprehenderit'],
    name: ['cupidatat n'],
    season: ['Utveniam sunt'],
    slug: ['972am'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'in volu',
    season: 'dolor minim id ',
    slug: 'nq6',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLSeries.getLolSeries({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 4;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nulla pa'],
    endAt: ['aliquip'],
    id: [1],
    leagueId: [1],
    modifiedAt: ['nisi veniam est'],
    name: ['magna reprehen'],
    season: ['veniam '],
    slug: ['x'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['id'],
    endAt: ['do'],
    id: [6],
    leagueId: [9],
    modifiedAt: ['reprehenderit'],
    name: ['cupidatat n'],
    season: ['Utveniam sunt'],
    slug: ['972am'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'in volu',
    season: 'dolor minim id ',
    slug: 'nq6',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLSeries.getLolSeriesPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 4;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nulla pa'],
    endAt: ['aliquip'],
    id: [1],
    leagueId: [1],
    modifiedAt: ['nisi veniam est'],
    name: ['magna reprehen'],
    season: ['veniam '],
    slug: ['x'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['id'],
    endAt: ['do'],
    id: [6],
    leagueId: [9],
    modifiedAt: ['reprehenderit'],
    name: ['cupidatat n'],
    season: ['Utveniam sunt'],
    slug: ['972am'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'in volu',
    season: 'dolor minim id ',
    slug: 'nq6',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLSeries.getLolSeriesRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLoLSeriesVideogameTitle = 4;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLSeries = {
    beginAt: ['nulla pa'],
    endAt: ['aliquip'],
    id: [1],
    leagueId: [1],
    modifiedAt: ['nisi veniam est'],
    name: ['magna reprehen'],
    season: ['veniam '],
    slug: ['x'],
    videogameTitle: [filterOverLoLSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLSeries = {
    beginAt: ['id'],
    endAt: ['do'],
    id: [6],
    leagueId: [9],
    modifiedAt: ['reprehenderit'],
    name: ['cupidatat n'],
    season: ['Utveniam sunt'],
    slug: ['972am'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLoLSeries = {
    name: 'in volu',
    season: 'dolor minim id ',
    slug: 'nq6',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLSeries.getLolSeriesUpcoming({
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
