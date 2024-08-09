# CodmwTournamentsService

A list of all methods in the `CodmwTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                              |
| :---------------------------------------------------------------- | :--------------------------------------- |
| [get_codmw_tournaments](#get_codmw_tournaments)                   | List tournaments for the CODMW videogame |
| [get_codmw_tournaments_past](#get_codmw_tournaments_past)         | List past CODMW tournaments              |
| [get_codmw_tournaments_running](#get_codmw_tournaments_running)   | List running CODMW tournaments           |
| [get_codmw_tournaments_upcoming](#get_codmw_tournaments_upcoming) | List upcoming CODMW tournaments          |

## get_codmw_tournaments

List tournaments for the CODMW videogame

- HTTP Method: `GET`
- Endpoint: `/codmw/tournaments`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwShortTournaments](../models/FilterOverCodmwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwShortTournaments](../models/RangeOverCodmwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwShortTournaments](../models/SearchOverCodmwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwShortTournaments,
  SearchOverCodmwShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCodmwShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverCodmwShortTournaments = {
    beginAt: ['ullamco'],
    detailedStats: true,
    endAt: ['do d'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['nisi ut'],
    name: ['cupidatat i'],
    prizepool: ['esse irur'],
    serieId: [6],
    slug: ['p'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCodmwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverCodmwShortTournaments = {
    beginAt: ['minim'],
    detailedStats: [true],
    endAt: ['ve'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['exer'],
    name: ['do proide'],
    prizepool: ['et mollit'],
    serieId: [4],
    slug: ['emgwpjjylc'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverCodmwShortTournaments = {
    name: 'deser',
    prizepool: 'dolor fugiat',
    slug: 'wuovxuis1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwTournaments.getCodmwTournaments({
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

## get_codmw_tournaments_past

List past CODMW tournaments

- HTTP Method: `GET`
- Endpoint: `/codmw/tournaments/past`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwShortTournaments](../models/FilterOverCodmwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwShortTournaments](../models/RangeOverCodmwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwShortTournaments](../models/SearchOverCodmwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwShortTournaments,
  SearchOverCodmwShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCodmwShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverCodmwShortTournaments = {
    beginAt: ['ullamco'],
    detailedStats: true,
    endAt: ['do d'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['nisi ut'],
    name: ['cupidatat i'],
    prizepool: ['esse irur'],
    serieId: [6],
    slug: ['p'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCodmwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverCodmwShortTournaments = {
    beginAt: ['minim'],
    detailedStats: [true],
    endAt: ['ve'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['exer'],
    name: ['do proide'],
    prizepool: ['et mollit'],
    serieId: [4],
    slug: ['emgwpjjylc'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverCodmwShortTournaments = {
    name: 'deser',
    prizepool: 'dolor fugiat',
    slug: 'wuovxuis1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwTournaments.getCodmwTournamentsPast({
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

## get_codmw_tournaments_running

List running CODMW tournaments

- HTTP Method: `GET`
- Endpoint: `/codmw/tournaments/running`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwShortTournaments](../models/FilterOverCodmwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwShortTournaments](../models/RangeOverCodmwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwShortTournaments](../models/SearchOverCodmwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwShortTournaments,
  SearchOverCodmwShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCodmwShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverCodmwShortTournaments = {
    beginAt: ['ullamco'],
    detailedStats: true,
    endAt: ['do d'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['nisi ut'],
    name: ['cupidatat i'],
    prizepool: ['esse irur'],
    serieId: [6],
    slug: ['p'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCodmwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverCodmwShortTournaments = {
    beginAt: ['minim'],
    detailedStats: [true],
    endAt: ['ve'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['exer'],
    name: ['do proide'],
    prizepool: ['et mollit'],
    serieId: [4],
    slug: ['emgwpjjylc'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverCodmwShortTournaments = {
    name: 'deser',
    prizepool: 'dolor fugiat',
    slug: 'wuovxuis1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwTournaments.getCodmwTournamentsRunning({
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

## get_codmw_tournaments_upcoming

List upcoming CODMW tournaments

- HTTP Method: `GET`
- Endpoint: `/codmw/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                            | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwShortTournaments](../models/FilterOverCodmwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwShortTournaments](../models/RangeOverCodmwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwShortTournaments](../models/SearchOverCodmwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverCodmwShortTournaments,
  SearchOverCodmwShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverCodmwShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverCodmwShortTournaments = {
    beginAt: ['ullamco'],
    detailedStats: true,
    endAt: ['do d'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['nisi ut'],
    name: ['cupidatat i'],
    prizepool: ['esse irur'],
    serieId: [6],
    slug: ['p'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverCodmwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverCodmwShortTournaments = {
    beginAt: ['minim'],
    detailedStats: [true],
    endAt: ['ve'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['exer'],
    name: ['do proide'],
    prizepool: ['et mollit'],
    serieId: [4],
    slug: ['emgwpjjylc'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverCodmwShortTournaments = {
    name: 'deser',
    prizepool: 'dolor fugiat',
    slug: 'wuovxuis1',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwTournaments.getCodmwTournamentsUpcoming({
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
