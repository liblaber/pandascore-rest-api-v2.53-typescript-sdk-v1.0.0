# Dota2TournamentsService

A list of all methods in the `Dota2TournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                               |
| :---------------------------------------------------------------- | :---------------------------------------- |
| [get_dota2_tournaments](#get_dota2_tournaments)                   | List tournaments for the Dota 2 videogame |
| [get_dota2_tournaments_past](#get_dota2_tournaments_past)         | List past Dota 2 tournaments              |
| [get_dota2_tournaments_running](#get_dota2_tournaments_running)   | List running Dota 2 tournaments           |
| [get_dota2_tournaments_upcoming](#get_dota2_tournaments_upcoming) | List upcoming Dota 2 tournaments          |

## get_dota2_tournaments

List tournaments for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/tournaments`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2ShortTournaments](../models/FilterOverDota2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2ShortTournaments](../models/RangeOverDota2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2ShortTournaments](../models/SearchOverDota2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2ShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2ShortTournaments,
  SearchOverDota2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverDota2ShortTournamentsVideogameTitle = 9;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverDota2ShortTournaments = {
    beginAt: ['aut'],
    detailedStats: true,
    endAt: ['nulla'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['nisi d'],
    name: ['labore in nost'],
    prizepool: ['non ullamco'],
    serieId: [10],
    slug: ['jean08v_6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverDota2ShortTournaments = {
    beginAt: ['ad anim'],
    detailedStats: [true],
    endAt: ['do'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['nulla proid'],
    name: ['ullamco do'],
    prizepool: ['incididunt si'],
    serieId: [1],
    slug: ['ykbufo7d7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverDota2ShortTournaments = {
    name: 'tempor exer',
    prizepool: 'veniam culpa a',
    slug: 'v5_r1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2Tournaments({
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

## get_dota2_tournaments_past

List past Dota 2 tournaments

- HTTP Method: `GET`
- Endpoint: `/dota2/tournaments/past`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2ShortTournaments](../models/FilterOverDota2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2ShortTournaments](../models/RangeOverDota2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2ShortTournaments](../models/SearchOverDota2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2ShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2ShortTournaments,
  SearchOverDota2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverDota2ShortTournamentsVideogameTitle = 9;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverDota2ShortTournaments = {
    beginAt: ['aut'],
    detailedStats: true,
    endAt: ['nulla'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['nisi d'],
    name: ['labore in nost'],
    prizepool: ['non ullamco'],
    serieId: [10],
    slug: ['jean08v_6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverDota2ShortTournaments = {
    beginAt: ['ad anim'],
    detailedStats: [true],
    endAt: ['do'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['nulla proid'],
    name: ['ullamco do'],
    prizepool: ['incididunt si'],
    serieId: [1],
    slug: ['ykbufo7d7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverDota2ShortTournaments = {
    name: 'tempor exer',
    prizepool: 'veniam culpa a',
    slug: 'v5_r1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2TournamentsPast({
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

## get_dota2_tournaments_running

List running Dota 2 tournaments

- HTTP Method: `GET`
- Endpoint: `/dota2/tournaments/running`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2ShortTournaments](../models/FilterOverDota2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2ShortTournaments](../models/RangeOverDota2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2ShortTournaments](../models/SearchOverDota2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2ShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2ShortTournaments,
  SearchOverDota2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverDota2ShortTournamentsVideogameTitle = 9;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverDota2ShortTournaments = {
    beginAt: ['aut'],
    detailedStats: true,
    endAt: ['nulla'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['nisi d'],
    name: ['labore in nost'],
    prizepool: ['non ullamco'],
    serieId: [10],
    slug: ['jean08v_6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverDota2ShortTournaments = {
    beginAt: ['ad anim'],
    detailedStats: [true],
    endAt: ['do'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['nulla proid'],
    name: ['ullamco do'],
    prizepool: ['incididunt si'],
    serieId: [1],
    slug: ['ykbufo7d7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverDota2ShortTournaments = {
    name: 'tempor exer',
    prizepool: 'veniam culpa a',
    slug: 'v5_r1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2TournamentsRunning({
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

## get_dota2_tournaments_upcoming

List upcoming Dota 2 tournaments

- HTTP Method: `GET`
- Endpoint: `/dota2/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2ShortTournaments](../models/FilterOverDota2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2ShortTournaments](../models/RangeOverDota2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2ShortTournaments](../models/SearchOverDota2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2ShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverDota2ShortTournaments,
  SearchOverDota2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverDota2ShortTournamentsVideogameTitle = 9;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverDota2ShortTournaments = {
    beginAt: ['aut'],
    detailedStats: true,
    endAt: ['nulla'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['nisi d'],
    name: ['labore in nost'],
    prizepool: ['non ullamco'],
    serieId: [10],
    slug: ['jean08v_6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverDota2ShortTournaments = {
    beginAt: ['ad anim'],
    detailedStats: [true],
    endAt: ['do'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['nulla proid'],
    name: ['ullamco do'],
    prizepool: ['incididunt si'],
    serieId: [1],
    slug: ['ykbufo7d7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverDota2ShortTournaments = {
    name: 'tempor exer',
    prizepool: 'veniam culpa a',
    slug: 'v5_r1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2TournamentsUpcoming({
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
