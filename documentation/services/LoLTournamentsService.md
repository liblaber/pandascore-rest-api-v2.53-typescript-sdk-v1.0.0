# LoLTournamentsService

A list of all methods in the `LoLTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                          |
| :------------------------------------------------------------ | :--------------------------------------------------- |
| [get_lol_tournaments](#get_lol_tournaments)                   | List tournaments for the League of Legends videogame |
| [get_lol_tournaments_past](#get_lol_tournaments_past)         | List past League of Legends tournaments              |
| [get_lol_tournaments_running](#get_lol_tournaments_running)   | List running League of Legends tournaments           |
| [get_lol_tournaments_upcoming](#get_lol_tournaments_upcoming) | List upcoming League of Legends tournaments          |

## get_lol_tournaments

List tournaments for the League of Legends videogame

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLShortTournaments,
  SearchOverLoLShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLoLShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['non sit mo'],
    detailedStats: true,
    endAt: ['dolore l'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['tempor null'],
    name: ['non d'],
    prizepool: ['incididunt'],
    serieId: [3],
    slug: ['rjuwbjwty6h'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['culpa a'],
    detailedStats: [true],
    endAt: ['voluptate'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['amet ullamco'],
    name: ['et ullam'],
    prizepool: ['minim sed no'],
    serieId: [10],
    slug: ['pm-kxnydn8i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLShortTournaments = {
    name: 'magna i',
    prizepool: 'pariat',
    slug: '6',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLTournaments.getLolTournaments({
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

## get_lol_tournaments_past

List past League of Legends tournaments

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/past`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLShortTournaments,
  SearchOverLoLShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLoLShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['non sit mo'],
    detailedStats: true,
    endAt: ['dolore l'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['tempor null'],
    name: ['non d'],
    prizepool: ['incididunt'],
    serieId: [3],
    slug: ['rjuwbjwty6h'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['culpa a'],
    detailedStats: [true],
    endAt: ['voluptate'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['amet ullamco'],
    name: ['et ullam'],
    prizepool: ['minim sed no'],
    serieId: [10],
    slug: ['pm-kxnydn8i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLShortTournaments = {
    name: 'magna i',
    prizepool: 'pariat',
    slug: '6',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLTournaments.getLolTournamentsPast({
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

## get_lol_tournaments_running

List running League of Legends tournaments

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/running`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLShortTournaments,
  SearchOverLoLShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLoLShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['non sit mo'],
    detailedStats: true,
    endAt: ['dolore l'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['tempor null'],
    name: ['non d'],
    prizepool: ['incididunt'],
    serieId: [3],
    slug: ['rjuwbjwty6h'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['culpa a'],
    detailedStats: [true],
    endAt: ['voluptate'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['amet ullamco'],
    name: ['et ullam'],
    prizepool: ['minim sed no'],
    serieId: [10],
    slug: ['pm-kxnydn8i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLShortTournaments = {
    name: 'magna i',
    prizepool: 'pariat',
    slug: '6',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLTournaments.getLolTournamentsRunning({
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

## get_lol_tournaments_upcoming

List upcoming League of Legends tournaments

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLoLShortTournaments,
  SearchOverLoLShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLoLShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['non sit mo'],
    detailedStats: true,
    endAt: ['dolore l'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['tempor null'],
    name: ['non d'],
    prizepool: ['incididunt'],
    serieId: [3],
    slug: ['rjuwbjwty6h'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['culpa a'],
    detailedStats: [true],
    endAt: ['voluptate'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['amet ullamco'],
    name: ['et ullam'],
    prizepool: ['minim sed no'],
    serieId: [10],
    slug: ['pm-kxnydn8i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLoLShortTournaments = {
    name: 'magna i',
    prizepool: 'pariat',
    slug: '6',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLTournaments.getLolTournamentsUpcoming({
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
