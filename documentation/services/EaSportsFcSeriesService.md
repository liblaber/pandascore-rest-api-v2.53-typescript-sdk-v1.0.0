# EaSportsFcSeriesService

A list of all methods in the `EaSportsFcSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                |
| :---------------------------------------------------- | :----------------------------------------- |
| [get_fifa_series](#get_fifa_series)                   | List series for the EA Sports FC videogame |
| [get_fifa_series_past](#get_fifa_series_past)         | List past EA Sports FC series              |
| [get_fifa_series_running](#get_fifa_series_running)   | List running EA Sports FC series           |
| [get_fifa_series_upcoming](#get_fifa_series_upcoming) | List upcoming EA Sports FC series          |

## get_fifa_series

List series for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/series`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverFifaSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaSeries = {
    beginAt: ['in velit'],
    endAt: ['ea '],
    id: [7],
    leagueId: [8],
    modifiedAt: ['laborum'],
    name: ['ut incid'],
    season: ['aute qui'],
    slug: ['z57q3bycg8r'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaSeries = {
    beginAt: ['n'],
    endAt: ['non ex quis d'],
    id: [6],
    leagueId: [8],
    modifiedAt: ['culpa '],
    name: ['culpa pariatu'],
    season: ['Lorem nisi '],
    slug: ['qmjfjn'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverFifaSeries = {
    name: 'exerc',
    season: 'ipsum commodo',
    slug: 'u',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcSeries.getFifaSeries({
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

## get_fifa_series_past

List past EA Sports FC series

- HTTP Method: `GET`
- Endpoint: `/fifa/series/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverFifaSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaSeries = {
    beginAt: ['in velit'],
    endAt: ['ea '],
    id: [7],
    leagueId: [8],
    modifiedAt: ['laborum'],
    name: ['ut incid'],
    season: ['aute qui'],
    slug: ['z57q3bycg8r'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaSeries = {
    beginAt: ['n'],
    endAt: ['non ex quis d'],
    id: [6],
    leagueId: [8],
    modifiedAt: ['culpa '],
    name: ['culpa pariatu'],
    season: ['Lorem nisi '],
    slug: ['qmjfjn'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverFifaSeries = {
    name: 'exerc',
    season: 'ipsum commodo',
    slug: 'u',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcSeries.getFifaSeriesPast({
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

## get_fifa_series_running

List running EA Sports FC series

- HTTP Method: `GET`
- Endpoint: `/fifa/series/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverFifaSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaSeries = {
    beginAt: ['in velit'],
    endAt: ['ea '],
    id: [7],
    leagueId: [8],
    modifiedAt: ['laborum'],
    name: ['ut incid'],
    season: ['aute qui'],
    slug: ['z57q3bycg8r'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaSeries = {
    beginAt: ['n'],
    endAt: ['non ex quis d'],
    id: [6],
    leagueId: [8],
    modifiedAt: ['culpa '],
    name: ['culpa pariatu'],
    season: ['Lorem nisi '],
    slug: ['qmjfjn'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverFifaSeries = {
    name: 'exerc',
    season: 'ipsum commodo',
    slug: 'u',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcSeries.getFifaSeriesRunning({
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

## get_fifa_series_upcoming

List upcoming EA Sports FC series

- HTTP Method: `GET`
- Endpoint: `/fifa/series/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaSeries](../models/FilterOverFifaSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaSeries](../models/RangeOverFifaSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaSeries](../models/SearchOverFifaSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverFifaSeriesVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaSeries = {
    beginAt: ['in velit'],
    endAt: ['ea '],
    id: [7],
    leagueId: [8],
    modifiedAt: ['laborum'],
    name: ['ut incid'],
    season: ['aute qui'],
    slug: ['z57q3bycg8r'],
    videogameTitle: [filterOverFifaSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaSeries = {
    beginAt: ['n'],
    endAt: ['non ex quis d'],
    id: [6],
    leagueId: [8],
    modifiedAt: ['culpa '],
    name: ['culpa pariatu'],
    season: ['Lorem nisi '],
    slug: ['qmjfjn'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverFifaSeries = {
    name: 'exerc',
    season: 'ipsum commodo',
    slug: 'u',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcSeries.getFifaSeriesUpcoming({
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
