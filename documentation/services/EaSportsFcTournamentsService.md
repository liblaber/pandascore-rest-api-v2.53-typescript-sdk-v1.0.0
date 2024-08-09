# EaSportsFcTournamentsService

A list of all methods in the `EaSportsFcTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                                     |
| :-------------------------------------------------------------- | :---------------------------------------------- |
| [get_fifa_tournaments](#get_fifa_tournaments)                   | List tournaments for the EA Sports FC videogame |
| [get_fifa_tournaments_past](#get_fifa_tournaments_past)         | List past EA Sports FC tournaments              |
| [get_fifa_tournaments_running](#get_fifa_tournaments_running)   | List running EA Sports FC tournaments           |
| [get_fifa_tournaments_upcoming](#get_fifa_tournaments_upcoming) | List upcoming EA Sports FC tournaments          |

## get_fifa_tournaments

List tournaments for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaShortTournaments,
  SearchOverFifaShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverFifaShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['do'],
    detailedStats: true,
    endAt: ['adipisicing '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['t'],
    name: ['culpa'],
    prizepool: ['do aute ip'],
    serieId: [3],
    slug: ['iphstt7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['cons'],
    detailedStats: [true],
    endAt: ['cill'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['ut'],
    name: ['autesed ut'],
    prizepool: ['consequat s'],
    serieId: [8],
    slug: ['sqgbs9gtj-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaShortTournaments = {
    name: 'elit ven',
    prizepool: 'fugiat',
    slug: 'kfp4-f',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcTournaments.getFifaTournaments({
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

## get_fifa_tournaments_past

List past EA Sports FC tournaments

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments/past`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaShortTournaments,
  SearchOverFifaShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverFifaShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['do'],
    detailedStats: true,
    endAt: ['adipisicing '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['t'],
    name: ['culpa'],
    prizepool: ['do aute ip'],
    serieId: [3],
    slug: ['iphstt7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['cons'],
    detailedStats: [true],
    endAt: ['cill'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['ut'],
    name: ['autesed ut'],
    prizepool: ['consequat s'],
    serieId: [8],
    slug: ['sqgbs9gtj-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaShortTournaments = {
    name: 'elit ven',
    prizepool: 'fugiat',
    slug: 'kfp4-f',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcTournaments.getFifaTournamentsPast({
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

## get_fifa_tournaments_running

List running EA Sports FC tournaments

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments/running`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaShortTournaments,
  SearchOverFifaShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverFifaShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['do'],
    detailedStats: true,
    endAt: ['adipisicing '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['t'],
    name: ['culpa'],
    prizepool: ['do aute ip'],
    serieId: [3],
    slug: ['iphstt7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['cons'],
    detailedStats: [true],
    endAt: ['cill'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['ut'],
    name: ['autesed ut'],
    prizepool: ['consequat s'],
    serieId: [8],
    slug: ['sqgbs9gtj-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaShortTournaments = {
    name: 'elit ven',
    prizepool: 'fugiat',
    slug: 'kfp4-f',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcTournaments.getFifaTournamentsRunning({
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

## get_fifa_tournaments_upcoming

List upcoming EA Sports FC tournaments

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverFifaShortTournaments,
  SearchOverFifaShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverFifaShortTournamentsVideogameTitle = 6;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['do'],
    detailedStats: true,
    endAt: ['adipisicing '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['t'],
    name: ['culpa'],
    prizepool: ['do aute ip'],
    serieId: [3],
    slug: ['iphstt7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['cons'],
    detailedStats: [true],
    endAt: ['cill'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['ut'],
    name: ['autesed ut'],
    prizepool: ['consequat s'],
    serieId: [8],
    slug: ['sqgbs9gtj-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverFifaShortTournaments = {
    name: 'elit ven',
    prizepool: 'fugiat',
    slug: 'kfp4-f',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcTournaments.getFifaTournamentsUpcoming({
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
