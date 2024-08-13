# ValorantTournamentsService

A list of all methods in the `ValorantTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                 |
| :---------------------------------------------------------------------- | :------------------------------------------ |
| [get_valorant_tournaments](#get_valorant_tournaments)                   | List tournaments for the Valorant videogame |
| [get_valorant_tournaments_past](#get_valorant_tournaments_past)         | List past Valorant tournaments              |
| [get_valorant_tournaments_running](#get_valorant_tournaments_running)   | List running Valorant tournaments           |
| [get_valorant_tournaments_upcoming](#get_valorant_tournaments_upcoming) | List upcoming Valorant tournaments          |

## get_valorant_tournaments

List tournaments for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantShortTournaments,
  SearchOverValorantShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverValorantShortTournamentsVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverValorantShortTournaments: FilterOverValorantShortTournaments = {
    beginAt: ['officia in'],
    detailedStats: true,
    endAt: ['mollit e'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['a'],
    name: ['ullamco '],
    prizepool: ['ex cul'],
    serieId: [9],
    slug: ['e2vhv2hg3i'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverValorantShortTournaments: RangeOverValorantShortTournaments = {
    beginAt: ['deser'],
    detailedStats: [true],
    endAt: ['do pro'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['i'],
    name: ['veniam '],
    prizepool: ['tempor Except'],
    serieId: [2],
    slug: ['m2czt'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverValorantShortTournaments: SearchOverValorantShortTournaments = {
    name: 'nisi es',
    prizepool: 'Duis eiusmod ',
    slug: 'roj8g5wbb',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournaments({
    filter: filterOverValorantShortTournaments,
    range: rangeOverValorantShortTournaments,
    sort: [[]],
    search: searchOverValorantShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_valorant_tournaments_past

List past Valorant tournaments

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/past`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantShortTournaments,
  SearchOverValorantShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverValorantShortTournamentsVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverValorantShortTournaments: FilterOverValorantShortTournaments = {
    beginAt: ['officia in'],
    detailedStats: true,
    endAt: ['mollit e'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['a'],
    name: ['ullamco '],
    prizepool: ['ex cul'],
    serieId: [9],
    slug: ['e2vhv2hg3i'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverValorantShortTournaments: RangeOverValorantShortTournaments = {
    beginAt: ['deser'],
    detailedStats: [true],
    endAt: ['do pro'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['i'],
    name: ['veniam '],
    prizepool: ['tempor Except'],
    serieId: [2],
    slug: ['m2czt'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverValorantShortTournaments: SearchOverValorantShortTournaments = {
    name: 'nisi es',
    prizepool: 'Duis eiusmod ',
    slug: 'roj8g5wbb',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournamentsPast({
    filter: filterOverValorantShortTournaments,
    range: rangeOverValorantShortTournaments,
    sort: [[]],
    search: searchOverValorantShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_valorant_tournaments_running

List running Valorant tournaments

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/running`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantShortTournaments,
  SearchOverValorantShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverValorantShortTournamentsVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverValorantShortTournaments: FilterOverValorantShortTournaments = {
    beginAt: ['officia in'],
    detailedStats: true,
    endAt: ['mollit e'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['a'],
    name: ['ullamco '],
    prizepool: ['ex cul'],
    serieId: [9],
    slug: ['e2vhv2hg3i'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverValorantShortTournaments: RangeOverValorantShortTournaments = {
    beginAt: ['deser'],
    detailedStats: [true],
    endAt: ['do pro'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['i'],
    name: ['veniam '],
    prizepool: ['tempor Except'],
    serieId: [2],
    slug: ['m2czt'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverValorantShortTournaments: SearchOverValorantShortTournaments = {
    name: 'nisi es',
    prizepool: 'Duis eiusmod ',
    slug: 'roj8g5wbb',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournamentsRunning({
    filter: filterOverValorantShortTournaments,
    range: rangeOverValorantShortTournaments,
    sort: [[]],
    search: searchOverValorantShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_valorant_tournaments_upcoming

List upcoming Valorant tournaments

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverValorantShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverValorantShortTournaments,
  SearchOverValorantShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverValorantShortTournamentsVideogameTitle = 6;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverValorantShortTournaments: FilterOverValorantShortTournaments = {
    beginAt: ['officia in'],
    detailedStats: true,
    endAt: ['mollit e'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['a'],
    name: ['ullamco '],
    prizepool: ['ex cul'],
    serieId: [9],
    slug: ['e2vhv2hg3i'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverValorantShortTournaments: RangeOverValorantShortTournaments = {
    beginAt: ['deser'],
    detailedStats: [true],
    endAt: ['do pro'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['i'],
    name: ['veniam '],
    prizepool: ['tempor Except'],
    serieId: [2],
    slug: ['m2czt'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverValorantShortTournaments: SearchOverValorantShortTournaments = {
    name: 'nisi es',
    prizepool: 'Duis eiusmod ',
    slug: 'roj8g5wbb',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournamentsUpcoming({
    filter: filterOverValorantShortTournaments,
    range: rangeOverValorantShortTournaments,
    sort: [[]],
    search: searchOverValorantShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
