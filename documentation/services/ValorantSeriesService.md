# ValorantSeriesService

A list of all methods in the `ValorantSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                            |
| :------------------------------------------------------------ | :------------------------------------- |
| [get_valorant_series](#get_valorant_series)                   | List series for the Valorant videogame |
| [get_valorant_series_past](#get_valorant_series_past)         | List past Valorant series              |
| [get_valorant_series_running](#get_valorant_series_running)   | List running Valorant series           |
| [get_valorant_series_upcoming](#get_valorant_series_upcoming) | List upcoming Valorant series          |

## get_valorant_series

List series for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/series`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantSeries = {
    beginAt: ['vo'],
    endAt: ['officia'],
    id: [4],
    leagueId: [4],
    modifiedAt: ['Exce'],
    name: ['veniam '],
    season: ['qui est a'],
    slug: ['a-__fpigd'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantSeries = {
    beginAt: ['nisi r'],
    endAt: ['esse do'],
    id: [2],
    leagueId: [2],
    modifiedAt: ['sun'],
    name: ['dolore in in'],
    season: ['labore do dolo'],
    slug: ['a046lpfr'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverValorantSeries = {
    name: 'doeiu',
    season: 'veniam ',
    slug: '1-0pexfqf',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeries({
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

## get_valorant_series_past

List past Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/past`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantSeries = {
    beginAt: ['vo'],
    endAt: ['officia'],
    id: [4],
    leagueId: [4],
    modifiedAt: ['Exce'],
    name: ['veniam '],
    season: ['qui est a'],
    slug: ['a-__fpigd'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantSeries = {
    beginAt: ['nisi r'],
    endAt: ['esse do'],
    id: [2],
    leagueId: [2],
    modifiedAt: ['sun'],
    name: ['dolore in in'],
    season: ['labore do dolo'],
    slug: ['a046lpfr'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverValorantSeries = {
    name: 'doeiu',
    season: 'veniam ',
    slug: '1-0pexfqf',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeriesPast({
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

## get_valorant_series_running

List running Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/running`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantSeries = {
    beginAt: ['vo'],
    endAt: ['officia'],
    id: [4],
    leagueId: [4],
    modifiedAt: ['Exce'],
    name: ['veniam '],
    season: ['qui est a'],
    slug: ['a-__fpigd'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantSeries = {
    beginAt: ['nisi r'],
    endAt: ['esse do'],
    id: [2],
    leagueId: [2],
    modifiedAt: ['sun'],
    name: ['dolore in in'],
    season: ['labore do dolo'],
    slug: ['a046lpfr'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverValorantSeries = {
    name: 'doeiu',
    season: 'veniam ',
    slug: '1-0pexfqf',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeriesRunning({
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

## get_valorant_series_upcoming

List upcoming Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/upcoming`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantSeries](../models/FilterOverValorantSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantSeries](../models/RangeOverValorantSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantSeries](../models/SearchOverValorantSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverValorantSeriesVideogameTitle = 1;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantSeries = {
    beginAt: ['vo'],
    endAt: ['officia'],
    id: [4],
    leagueId: [4],
    modifiedAt: ['Exce'],
    name: ['veniam '],
    season: ['qui est a'],
    slug: ['a-__fpigd'],
    videogameTitle: [filterOverValorantSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantSeries = {
    beginAt: ['nisi r'],
    endAt: ['esse do'],
    id: [2],
    leagueId: [2],
    modifiedAt: ['sun'],
    name: ['dolore in in'],
    season: ['labore do dolo'],
    slug: ['a046lpfr'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverValorantSeries = {
    name: 'doeiu',
    season: 'veniam ',
    slug: '1-0pexfqf',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantSeries.getValorantSeriesUpcoming({
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

<!-- This file was generated by liblab | https://liblab.com/ -->
