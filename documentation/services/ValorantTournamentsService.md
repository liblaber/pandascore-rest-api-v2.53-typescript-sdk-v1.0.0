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
  OpponentId,
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

  const filterOverValorantShortTournamentsVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['adipisicing'],
    detailedStats: true,
    endAt: ['volu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['enim'],
    name: ['proident cu'],
    prizepool: ['Duis p'],
    serieId: [1],
    slug: ['om'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['ipsum'],
    detailedStats: [true],
    endAt: ['Duis eiusmod'],
    hasBracket: [true],
    id: [5],
    modifiedAt: ['ut con'],
    name: ['tempor'],
    prizepool: ['ea in nulla'],
    serieId: [5],
    slug: ['rjdw3284qxi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantShortTournaments = {
    name: 'dolor nulla ',
    prizepool: 'commo',
    slug: 't8dey24',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournaments({
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
  OpponentId,
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

  const filterOverValorantShortTournamentsVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['adipisicing'],
    detailedStats: true,
    endAt: ['volu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['enim'],
    name: ['proident cu'],
    prizepool: ['Duis p'],
    serieId: [1],
    slug: ['om'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['ipsum'],
    detailedStats: [true],
    endAt: ['Duis eiusmod'],
    hasBracket: [true],
    id: [5],
    modifiedAt: ['ut con'],
    name: ['tempor'],
    prizepool: ['ea in nulla'],
    serieId: [5],
    slug: ['rjdw3284qxi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantShortTournaments = {
    name: 'dolor nulla ',
    prizepool: 'commo',
    slug: 't8dey24',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournamentsPast({
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
  OpponentId,
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

  const filterOverValorantShortTournamentsVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['adipisicing'],
    detailedStats: true,
    endAt: ['volu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['enim'],
    name: ['proident cu'],
    prizepool: ['Duis p'],
    serieId: [1],
    slug: ['om'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['ipsum'],
    detailedStats: [true],
    endAt: ['Duis eiusmod'],
    hasBracket: [true],
    id: [5],
    modifiedAt: ['ut con'],
    name: ['tempor'],
    prizepool: ['ea in nulla'],
    serieId: [5],
    slug: ['rjdw3284qxi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantShortTournaments = {
    name: 'dolor nulla ',
    prizepool: 'commo',
    slug: 't8dey24',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournamentsRunning({
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
  OpponentId,
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

  const filterOverValorantShortTournamentsVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['adipisicing'],
    detailedStats: true,
    endAt: ['volu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['enim'],
    name: ['proident cu'],
    prizepool: ['Duis p'],
    serieId: [1],
    slug: ['om'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['ipsum'],
    detailedStats: [true],
    endAt: ['Duis eiusmod'],
    hasBracket: [true],
    id: [5],
    modifiedAt: ['ut con'],
    name: ['tempor'],
    prizepool: ['ea in nulla'],
    serieId: [5],
    slug: ['rjdw3284qxi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverValorantShortTournaments = {
    name: 'dolor nulla ',
    prizepool: 'commo',
    slug: 't8dey24',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantTournaments.getValorantTournamentsUpcoming({
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
