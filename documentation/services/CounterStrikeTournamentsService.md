# CounterStrikeTournamentsService

A list of all methods in the `CounterStrikeTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                                       |
| :-------------------------------------------------------------- | :------------------------------------------------ |
| [get_csgo_tournaments](#get_csgo_tournaments)                   | List tournaments for the Counter-Strike videogame |
| [get_csgo_tournaments_past](#get_csgo_tournaments_past)         | List past Counter-Strike tournaments              |
| [get_csgo_tournaments_running](#get_csgo_tournaments_running)   | List running Counter-Strike tournaments           |
| [get_csgo_tournaments_upcoming](#get_csgo_tournaments_upcoming) | List upcoming Counter-Strike tournaments          |

## get_csgo_tournaments

List tournaments for the Counter-Strike videogame

- HTTP Method: `GET`
- Endpoint: `/csgo/tournaments`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoShortTournaments](../models/FilterOverCsgoShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoShortTournaments](../models/RangeOverCsgoShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoShortTournaments](../models/SearchOverCsgoShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoShortTournaments,
  SearchOverCsgoShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCsgoShortTournamentsVideogameTitle = 2;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoShortTournaments: FilterOverCsgoShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['do cupidatat a'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['fugiat aliqua t'],
    name: ['nisioccaecat'],
    prizepool: ['et la'],
    serieId: [1],
    slug: ['by'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCsgoShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoShortTournaments: RangeOverCsgoShortTournaments = {
    beginAt: ['ma'],
    detailedStats: [true],
    endAt: ['n'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['ad exe'],
    name: ['ullamco a'],
    prizepool: ['qui pr'],
    serieId: [2],
    slug: ['yst'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoShortTournaments: SearchOverCsgoShortTournaments = {
    name: 'tempor repr',
    prizepool: 'nostrud ullamc',
    slug: '5hi',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeTournaments.getCsgoTournaments({
    filter: filterOverCsgoShortTournaments,
    range: rangeOverCsgoShortTournaments,
    sort: [[]],
    search: searchOverCsgoShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_tournaments_past

List past Counter-Strike tournaments

- HTTP Method: `GET`
- Endpoint: `/csgo/tournaments/past`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoShortTournaments](../models/FilterOverCsgoShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoShortTournaments](../models/RangeOverCsgoShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoShortTournaments](../models/SearchOverCsgoShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoShortTournaments,
  SearchOverCsgoShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCsgoShortTournamentsVideogameTitle = 2;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoShortTournaments: FilterOverCsgoShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['do cupidatat a'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['fugiat aliqua t'],
    name: ['nisioccaecat'],
    prizepool: ['et la'],
    serieId: [1],
    slug: ['by'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCsgoShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoShortTournaments: RangeOverCsgoShortTournaments = {
    beginAt: ['ma'],
    detailedStats: [true],
    endAt: ['n'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['ad exe'],
    name: ['ullamco a'],
    prizepool: ['qui pr'],
    serieId: [2],
    slug: ['yst'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoShortTournaments: SearchOverCsgoShortTournaments = {
    name: 'tempor repr',
    prizepool: 'nostrud ullamc',
    slug: '5hi',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeTournaments.getCsgoTournamentsPast({
    filter: filterOverCsgoShortTournaments,
    range: rangeOverCsgoShortTournaments,
    sort: [[]],
    search: searchOverCsgoShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_tournaments_running

List running Counter-Strike tournaments

- HTTP Method: `GET`
- Endpoint: `/csgo/tournaments/running`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoShortTournaments](../models/FilterOverCsgoShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoShortTournaments](../models/RangeOverCsgoShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoShortTournaments](../models/SearchOverCsgoShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoShortTournaments,
  SearchOverCsgoShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCsgoShortTournamentsVideogameTitle = 2;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoShortTournaments: FilterOverCsgoShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['do cupidatat a'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['fugiat aliqua t'],
    name: ['nisioccaecat'],
    prizepool: ['et la'],
    serieId: [1],
    slug: ['by'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCsgoShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoShortTournaments: RangeOverCsgoShortTournaments = {
    beginAt: ['ma'],
    detailedStats: [true],
    endAt: ['n'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['ad exe'],
    name: ['ullamco a'],
    prizepool: ['qui pr'],
    serieId: [2],
    slug: ['yst'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoShortTournaments: SearchOverCsgoShortTournaments = {
    name: 'tempor repr',
    prizepool: 'nostrud ullamc',
    slug: '5hi',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeTournaments.getCsgoTournamentsRunning({
    filter: filterOverCsgoShortTournaments,
    range: rangeOverCsgoShortTournaments,
    sort: [[]],
    search: searchOverCsgoShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_tournaments_upcoming

List upcoming Counter-Strike tournaments

- HTTP Method: `GET`
- Endpoint: `/csgo/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoShortTournaments](../models/FilterOverCsgoShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoShortTournaments](../models/RangeOverCsgoShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoShortTournaments](../models/SearchOverCsgoShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCsgoShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCsgoShortTournaments,
  SearchOverCsgoShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCsgoShortTournamentsVideogameTitle = 2;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverCsgoShortTournaments: FilterOverCsgoShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['do cupidatat a'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['fugiat aliqua t'],
    name: ['nisioccaecat'],
    prizepool: ['et la'],
    serieId: [1],
    slug: ['by'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCsgoShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverCsgoShortTournaments: RangeOverCsgoShortTournaments = {
    beginAt: ['ma'],
    detailedStats: [true],
    endAt: ['n'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['ad exe'],
    name: ['ullamco a'],
    prizepool: ['qui pr'],
    serieId: [2],
    slug: ['yst'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverCsgoShortTournaments: SearchOverCsgoShortTournaments = {
    name: 'tempor repr',
    prizepool: 'nostrud ullamc',
    slug: '5hi',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeTournaments.getCsgoTournamentsUpcoming({
    filter: filterOverCsgoShortTournaments,
    range: rangeOverCsgoShortTournaments,
    sort: [[]],
    search: searchOverCsgoShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
