# KogSeriesService

A list of all methods in the `KogSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                 |
| :-------------------------------------------------- | :------------------------------------------ |
| [get_kog_series](#get_kog_series)                   | List series for the King of Glory videogame |
| [get_kog_series_past](#get_kog_series_past)         | List past King of Glory series              |
| [get_kog_series_running](#get_kog_series_running)   | List running King of Glory series           |
| [get_kog_series_upcoming](#get_kog_series_upcoming) | List upcoming King of Glory series          |

## get_kog_series

List series for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/series`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogSeries = {
    beginAt: ['in ea'],
    endAt: ['anim ni'],
    id: [8],
    leagueId: [7],
    modifiedAt: ['ex si'],
    name: ['occaecat '],
    season: ['exercitati'],
    slug: ['tv1m2z7x'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogSeries = {
    beginAt: ['id quis d'],
    endAt: ['eiusmod '],
    id: [2],
    leagueId: [7],
    modifiedAt: ['in pa'],
    name: ['eiusm'],
    season: ['minim ven'],
    slug: ['d'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverKogSeries = {
    name: 'do es',
    season: 'reprehe',
    slug: '-r_n0xviux',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogSeries.getKogSeries({
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

## get_kog_series_past

List past King of Glory series

- HTTP Method: `GET`
- Endpoint: `/kog/series/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogSeries = {
    beginAt: ['in ea'],
    endAt: ['anim ni'],
    id: [8],
    leagueId: [7],
    modifiedAt: ['ex si'],
    name: ['occaecat '],
    season: ['exercitati'],
    slug: ['tv1m2z7x'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogSeries = {
    beginAt: ['id quis d'],
    endAt: ['eiusmod '],
    id: [2],
    leagueId: [7],
    modifiedAt: ['in pa'],
    name: ['eiusm'],
    season: ['minim ven'],
    slug: ['d'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverKogSeries = {
    name: 'do es',
    season: 'reprehe',
    slug: '-r_n0xviux',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogSeries.getKogSeriesPast({
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

## get_kog_series_running

List running King of Glory series

- HTTP Method: `GET`
- Endpoint: `/kog/series/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogSeries = {
    beginAt: ['in ea'],
    endAt: ['anim ni'],
    id: [8],
    leagueId: [7],
    modifiedAt: ['ex si'],
    name: ['occaecat '],
    season: ['exercitati'],
    slug: ['tv1m2z7x'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogSeries = {
    beginAt: ['id quis d'],
    endAt: ['eiusmod '],
    id: [2],
    leagueId: [7],
    modifiedAt: ['in pa'],
    name: ['eiusm'],
    season: ['minim ven'],
    slug: ['d'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverKogSeries = {
    name: 'do es',
    season: 'reprehe',
    slug: '-r_n0xviux',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogSeries.getKogSeriesRunning({
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

## get_kog_series_upcoming

List upcoming King of Glory series

- HTTP Method: `GET`
- Endpoint: `/kog/series/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogSeries](../models/FilterOverKogSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogSeries](../models/RangeOverKogSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogSeries](../models/SearchOverKogSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverKogSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogSeries = {
    beginAt: ['in ea'],
    endAt: ['anim ni'],
    id: [8],
    leagueId: [7],
    modifiedAt: ['ex si'],
    name: ['occaecat '],
    season: ['exercitati'],
    slug: ['tv1m2z7x'],
    videogameTitle: [filterOverKogSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogSeries = {
    beginAt: ['id quis d'],
    endAt: ['eiusmod '],
    id: [2],
    leagueId: [7],
    modifiedAt: ['in pa'],
    name: ['eiusm'],
    season: ['minim ven'],
    slug: ['d'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverKogSeries = {
    name: 'do es',
    season: 'reprehe',
    slug: '-r_n0xviux',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogSeries.getKogSeriesUpcoming({
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
