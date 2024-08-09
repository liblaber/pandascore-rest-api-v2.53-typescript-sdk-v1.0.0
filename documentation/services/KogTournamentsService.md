# KogTournamentsService

A list of all methods in the `KogTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                      |
| :------------------------------------------------------------ | :----------------------------------------------- |
| [get_kog_tournaments](#get_kog_tournaments)                   | List tournaments for the King of Glory videogame |
| [get_kog_tournaments_past](#get_kog_tournaments_past)         | List past King of Glory tournaments              |
| [get_kog_tournaments_running](#get_kog_tournaments_running)   | List running King of Glory tournaments           |
| [get_kog_tournaments_upcoming](#get_kog_tournaments_upcoming) | List upcoming King of Glory tournaments          |

## get_kog_tournaments

List tournaments for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['fugiat'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['cupidatat Lorem'],
    name: ['dolore est dese'],
    prizepool: ['reprehe'],
    serieId: [2],
    slug: ['-s34rbc8a54'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['non fugiat u'],
    detailedStats: [true],
    endAt: ['te'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['id Excepteur'],
    name: ['voluptate'],
    prizepool: ['et la'],
    serieId: [3],
    slug: ['4-a5a4va7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogShortTournaments = {
    name: 'reprehenderi',
    prizepool: 'aliquip offi',
    slug: '6e5nwqm35w',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournaments({
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

## get_kog_tournaments_past

List past King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/past`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['fugiat'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['cupidatat Lorem'],
    name: ['dolore est dese'],
    prizepool: ['reprehe'],
    serieId: [2],
    slug: ['-s34rbc8a54'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['non fugiat u'],
    detailedStats: [true],
    endAt: ['te'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['id Excepteur'],
    name: ['voluptate'],
    prizepool: ['et la'],
    serieId: [3],
    slug: ['4-a5a4va7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogShortTournaments = {
    name: 'reprehenderi',
    prizepool: 'aliquip offi',
    slug: '6e5nwqm35w',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournamentsPast({
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

## get_kog_tournaments_running

List running King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/running`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['fugiat'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['cupidatat Lorem'],
    name: ['dolore est dese'],
    prizepool: ['reprehe'],
    serieId: [2],
    slug: ['-s34rbc8a54'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['non fugiat u'],
    detailedStats: [true],
    endAt: ['te'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['id Excepteur'],
    name: ['voluptate'],
    prizepool: ['et la'],
    serieId: [3],
    slug: ['4-a5a4va7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogShortTournaments = {
    name: 'reprehenderi',
    prizepool: 'aliquip offi',
    slug: '6e5nwqm35w',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournamentsRunning({
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

## get_kog_tournaments_upcoming

List upcoming King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['fugiat'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['cupidatat Lorem'],
    name: ['dolore est dese'],
    prizepool: ['reprehe'],
    serieId: [2],
    slug: ['-s34rbc8a54'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['non fugiat u'],
    detailedStats: [true],
    endAt: ['te'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['id Excepteur'],
    name: ['voluptate'],
    prizepool: ['et la'],
    serieId: [3],
    slug: ['4-a5a4va7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverKogShortTournaments = {
    name: 'reprehenderi',
    prizepool: 'aliquip offi',
    slug: '6e5nwqm35w',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournamentsUpcoming({
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
