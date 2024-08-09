# PubgTournamentsService

A list of all methods in the `PubgTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                             |
| :-------------------------------------------------------------- | :-------------------------------------- |
| [get_pubg_tournaments](#get_pubg_tournaments)                   | List tournaments for the PUBG videogame |
| [get_pubg_tournaments_past](#get_pubg_tournaments_past)         | List past PUBG tournaments              |
| [get_pubg_tournaments_running](#get_pubg_tournaments_running)   | List running PUBG tournaments           |
| [get_pubg_tournaments_upcoming](#get_pubg_tournaments_upcoming) | List upcoming PUBG tournaments          |

## get_pubg_tournaments

List tournaments for the PUBG videogame

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverPubgShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverPubgShortTournaments,
  SearchOverPubgShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverPubgShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['qui'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolor et nisi'],
    name: ['nisi d'],
    prizepool: ['ut in ex '],
    serieId: [4],
    slug: ['0dh6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['aliqua magna i'],
    detailedStats: [true],
    endAt: ['qui magna o'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['nisi deser'],
    name: ['est n'],
    prizepool: ['veniam eiusmod'],
    serieId: [8],
    slug: ['ix'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverPubgShortTournaments = {
    name: 'nisiqui sit',
    prizepool: 'dolor o',
    slug: 'w3ghtl',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgTournaments.getPubgTournaments({
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

## get_pubg_tournaments_past

List past PUBG tournaments

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments/past`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverPubgShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverPubgShortTournaments,
  SearchOverPubgShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverPubgShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['qui'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolor et nisi'],
    name: ['nisi d'],
    prizepool: ['ut in ex '],
    serieId: [4],
    slug: ['0dh6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['aliqua magna i'],
    detailedStats: [true],
    endAt: ['qui magna o'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['nisi deser'],
    name: ['est n'],
    prizepool: ['veniam eiusmod'],
    serieId: [8],
    slug: ['ix'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverPubgShortTournaments = {
    name: 'nisiqui sit',
    prizepool: 'dolor o',
    slug: 'w3ghtl',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgTournaments.getPubgTournamentsPast({
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

## get_pubg_tournaments_running

List running PUBG tournaments

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments/running`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverPubgShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverPubgShortTournaments,
  SearchOverPubgShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverPubgShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['qui'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolor et nisi'],
    name: ['nisi d'],
    prizepool: ['ut in ex '],
    serieId: [4],
    slug: ['0dh6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['aliqua magna i'],
    detailedStats: [true],
    endAt: ['qui magna o'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['nisi deser'],
    name: ['est n'],
    prizepool: ['veniam eiusmod'],
    serieId: [8],
    slug: ['ix'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverPubgShortTournaments = {
    name: 'nisiqui sit',
    prizepool: 'dolor o',
    slug: 'w3ghtl',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgTournaments.getPubgTournamentsRunning({
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

## get_pubg_tournaments_upcoming

List upcoming PUBG tournaments

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverPubgShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverPubgShortTournaments,
  SearchOverPubgShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverPubgShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['volupt'],
    detailedStats: true,
    endAt: ['qui'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolor et nisi'],
    name: ['nisi d'],
    prizepool: ['ut in ex '],
    serieId: [4],
    slug: ['0dh6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['aliqua magna i'],
    detailedStats: [true],
    endAt: ['qui magna o'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['nisi deser'],
    name: ['est n'],
    prizepool: ['veniam eiusmod'],
    serieId: [8],
    slug: ['ix'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverPubgShortTournaments = {
    name: 'nisiqui sit',
    prizepool: 'dolor o',
    slug: 'w3ghtl',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgTournaments.getPubgTournamentsUpcoming({
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
