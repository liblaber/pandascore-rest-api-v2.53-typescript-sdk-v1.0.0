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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['irure proide'],
    endAt: ['ut'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['deserunt volu'],
    name: ['enim Exce'],
    season: ['cillum v'],
    slug: ['8ogzx'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['consequat'],
    endAt: ['s'],
    id: [4],
    leagueId: [9],
    modifiedAt: ['in'],
    name: ['sit aute mo'],
    season: ['sit Ut dolor'],
    slug: ['l'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'sint Lo',
    season: 'ad oc',
    slug: 'nt-',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.counterStrikeSeries.getCsgoSeries({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['irure proide'],
    endAt: ['ut'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['deserunt volu'],
    name: ['enim Exce'],
    season: ['cillum v'],
    slug: ['8ogzx'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['consequat'],
    endAt: ['s'],
    id: [4],
    leagueId: [9],
    modifiedAt: ['in'],
    name: ['sit aute mo'],
    season: ['sit Ut dolor'],
    slug: ['l'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'sint Lo',
    season: 'ad oc',
    slug: 'nt-',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.counterStrikeSeries.getCsgoSeriesPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['irure proide'],
    endAt: ['ut'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['deserunt volu'],
    name: ['enim Exce'],
    season: ['cillum v'],
    slug: ['8ogzx'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['consequat'],
    endAt: ['s'],
    id: [4],
    leagueId: [9],
    modifiedAt: ['in'],
    name: ['sit aute mo'],
    season: ['sit Ut dolor'],
    slug: ['l'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'sint Lo',
    season: 'ad oc',
    slug: 'nt-',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.counterStrikeSeries.getCsgoSeriesRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverCsgoSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverCsgoSeries = {
    beginAt: ['irure proide'],
    endAt: ['ut'],
    id: [9],
    leagueId: [3],
    modifiedAt: ['deserunt volu'],
    name: ['enim Exce'],
    season: ['cillum v'],
    slug: ['8ogzx'],
    videogameTitle: [filterOverCsgoSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverCsgoSeries = {
    beginAt: ['consequat'],
    endAt: ['s'],
    id: [4],
    leagueId: [9],
    modifiedAt: ['in'],
    name: ['sit aute mo'],
    season: ['sit Ut dolor'],
    slug: ['l'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverCsgoSeries = {
    name: 'sint Lo',
    season: 'ad oc',
    slug: 'nt-',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.counterStrikeSeries.getCsgoSeriesUpcoming({
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
