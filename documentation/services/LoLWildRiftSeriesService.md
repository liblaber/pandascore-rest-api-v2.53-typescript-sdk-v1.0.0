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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['nisi occaec'],
    endAt: ['exercit'],
    id: [6],
    leagueId: [2],
    modifiedAt: ['e'],
    name: ['Excepteur'],
    season: ['officia cillu'],
    slug: ['w8j9ax8'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['dolor'],
    endAt: ['adipisicin'],
    id: [1],
    leagueId: [9],
    modifiedAt: ['magna id en'],
    name: ['et sint'],
    season: ['commodo '],
    slug: ['0e'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftSeries = {
    name: 'id sunt do',
    season: 'dolore',
    slug: '1i1_gk_mq',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftSeries.getLolWildRiftSeries({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['nisi occaec'],
    endAt: ['exercit'],
    id: [6],
    leagueId: [2],
    modifiedAt: ['e'],
    name: ['Excepteur'],
    season: ['officia cillu'],
    slug: ['w8j9ax8'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['dolor'],
    endAt: ['adipisicin'],
    id: [1],
    leagueId: [9],
    modifiedAt: ['magna id en'],
    name: ['et sint'],
    season: ['commodo '],
    slug: ['0e'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftSeries = {
    name: 'id sunt do',
    season: 'dolore',
    slug: '1i1_gk_mq',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftSeries.getLolWildRiftSeriesPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['nisi occaec'],
    endAt: ['exercit'],
    id: [6],
    leagueId: [2],
    modifiedAt: ['e'],
    name: ['Excepteur'],
    season: ['officia cillu'],
    slug: ['w8j9ax8'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['dolor'],
    endAt: ['adipisicin'],
    id: [1],
    leagueId: [9],
    modifiedAt: ['magna id en'],
    name: ['et sint'],
    season: ['commodo '],
    slug: ['0e'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftSeries = {
    name: 'id sunt do',
    season: 'dolore',
    slug: '1i1_gk_mq',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftSeries.getLolWildRiftSeriesRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverLolWildRiftSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftSeries = {
    beginAt: ['nisi occaec'],
    endAt: ['exercit'],
    id: [6],
    leagueId: [2],
    modifiedAt: ['e'],
    name: ['Excepteur'],
    season: ['officia cillu'],
    slug: ['w8j9ax8'],
    videogameTitle: [filterOverLolWildRiftSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftSeries = {
    beginAt: ['dolor'],
    endAt: ['adipisicin'],
    id: [1],
    leagueId: [9],
    modifiedAt: ['magna id en'],
    name: ['et sint'],
    season: ['commodo '],
    slug: ['0e'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftSeries = {
    name: 'id sunt do',
    season: 'dolore',
    slug: '1i1_gk_mq',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftSeries.getLolWildRiftSeriesUpcoming({
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
