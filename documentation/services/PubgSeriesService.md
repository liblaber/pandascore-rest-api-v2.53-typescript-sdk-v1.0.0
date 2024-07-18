# PubgSeriesService

A list of all methods in the `PubgSeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                        |
| :---------------------------------------------------- | :--------------------------------- |
| [get_pubg_series](#get_pubg_series)                   | List series for the PUBG videogame |
| [get_pubg_series_past](#get_pubg_series_past)         | List past PUBG series              |
| [get_pubg_series_running](#get_pubg_series_running)   | List running PUBG series           |
| [get_pubg_series_upcoming](#get_pubg_series_upcoming) | List upcoming PUBG series          |

## get_pubg_series

List series for the PUBG videogame

- HTTP Method: `GET`
- Endpoint: `/pubg/series`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgSeries](../models/FilterOverPubgSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgSeries](../models/RangeOverPubgSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgSeries](../models/SearchOverPubgSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverPubgSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgSeries = {
    beginAt: ['ex'],
    endAt: ['Lorem '],
    id: [5],
    leagueId: [5],
    modifiedAt: ['do'],
    name: ['nisi culpa'],
    season: ['ut ea i'],
    slug: ['ohs'],
    videogameTitle: [filterOverPubgSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgSeries = {
    beginAt: ['c'],
    endAt: ['amet elit et i'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['fugiat id'],
    name: ['in enim '],
    season: ['occaecat n'],
    slug: ['z7v95uzd6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverPubgSeries = {
    name: 'nostrud ipsu',
    season: 'velit',
    slug: 'gu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgSeries.getPubgSeries({
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

## get_pubg_series_past

List past PUBG series

- HTTP Method: `GET`
- Endpoint: `/pubg/series/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgSeries](../models/FilterOverPubgSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgSeries](../models/RangeOverPubgSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgSeries](../models/SearchOverPubgSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverPubgSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgSeries = {
    beginAt: ['ex'],
    endAt: ['Lorem '],
    id: [5],
    leagueId: [5],
    modifiedAt: ['do'],
    name: ['nisi culpa'],
    season: ['ut ea i'],
    slug: ['ohs'],
    videogameTitle: [filterOverPubgSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgSeries = {
    beginAt: ['c'],
    endAt: ['amet elit et i'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['fugiat id'],
    name: ['in enim '],
    season: ['occaecat n'],
    slug: ['z7v95uzd6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverPubgSeries = {
    name: 'nostrud ipsu',
    season: 'velit',
    slug: 'gu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgSeries.getPubgSeriesPast({
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

## get_pubg_series_running

List running PUBG series

- HTTP Method: `GET`
- Endpoint: `/pubg/series/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgSeries](../models/FilterOverPubgSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgSeries](../models/RangeOverPubgSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgSeries](../models/SearchOverPubgSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverPubgSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgSeries = {
    beginAt: ['ex'],
    endAt: ['Lorem '],
    id: [5],
    leagueId: [5],
    modifiedAt: ['do'],
    name: ['nisi culpa'],
    season: ['ut ea i'],
    slug: ['ohs'],
    videogameTitle: [filterOverPubgSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgSeries = {
    beginAt: ['c'],
    endAt: ['amet elit et i'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['fugiat id'],
    name: ['in enim '],
    season: ['occaecat n'],
    slug: ['z7v95uzd6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverPubgSeries = {
    name: 'nostrud ipsu',
    season: 'velit',
    slug: 'gu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgSeries.getPubgSeriesRunning({
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

## get_pubg_series_upcoming

List upcoming PUBG series

- HTTP Method: `GET`
- Endpoint: `/pubg/series/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgSeries](../models/FilterOverPubgSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgSeries](../models/RangeOverPubgSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgSeries](../models/SearchOverPubgSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverPubgSeriesVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgSeries = {
    beginAt: ['ex'],
    endAt: ['Lorem '],
    id: [5],
    leagueId: [5],
    modifiedAt: ['do'],
    name: ['nisi culpa'],
    season: ['ut ea i'],
    slug: ['ohs'],
    videogameTitle: [filterOverPubgSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 7;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgSeries = {
    beginAt: ['c'],
    endAt: ['amet elit et i'],
    id: [2],
    leagueId: [4],
    modifiedAt: ['fugiat id'],
    name: ['in enim '],
    season: ['occaecat n'],
    slug: ['z7v95uzd6'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverPubgSeries = {
    name: 'nostrud ipsu',
    season: 'velit',
    slug: 'gu',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgSeries.getPubgSeriesUpcoming({
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
