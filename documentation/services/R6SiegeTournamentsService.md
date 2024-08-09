# R6SiegeTournamentsService

A list of all methods in the `R6SiegeTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description                                          |
| :-------------------------------------------------------------------- | :--------------------------------------------------- |
| [get_r6siege_tournaments](#get_r6siege_tournaments)                   | List tournaments for the Rainbow Six Siege videogame |
| [get_r6siege_tournaments_past](#get_r6siege_tournaments_past)         | List past Rainbow Six Siege tournaments              |
| [get_r6siege_tournaments_running](#get_r6siege_tournaments_running)   | List running Rainbow Six Siege tournaments           |
| [get_r6siege_tournaments_upcoming](#get_r6siege_tournaments_upcoming) | List upcoming Rainbow Six Siege tournaments          |

## get_r6siege_tournaments

List tournaments for the Rainbow Six Siege videogame

- HTTP Method: `GET`
- Endpoint: `/r6siege/tournaments`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeShortTournaments](../models/FilterOverR6SiegeShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeShortTournaments](../models/RangeOverR6SiegeShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeShortTournaments](../models/SearchOverR6SiegeShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverR6SiegeShortTournaments,
  SearchOverR6SiegeShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverR6SiegeShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverR6SiegeShortTournaments = {
    beginAt: ['enim sunt'],
    detailedStats: true,
    endAt: ['esse ut'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['proiden'],
    name: ['elit ut ad of'],
    prizepool: ['ullamco'],
    serieId: [7],
    slug: ['__q0y7_6p8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverR6SiegeShortTournaments = {
    beginAt: ['ea qu'],
    detailedStats: [true],
    endAt: ['laborum in'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['anim'],
    name: ['dolor fu'],
    prizepool: ['eiusmod enim '],
    serieId: [6],
    slug: ['sv5tro'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverR6SiegeShortTournaments = {
    name: 'cupida',
    prizepool: 'commodo cupid',
    slug: '93',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournaments({
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

## get_r6siege_tournaments_past

List past Rainbow Six Siege tournaments

- HTTP Method: `GET`
- Endpoint: `/r6siege/tournaments/past`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeShortTournaments](../models/FilterOverR6SiegeShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeShortTournaments](../models/RangeOverR6SiegeShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeShortTournaments](../models/SearchOverR6SiegeShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverR6SiegeShortTournaments,
  SearchOverR6SiegeShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverR6SiegeShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverR6SiegeShortTournaments = {
    beginAt: ['enim sunt'],
    detailedStats: true,
    endAt: ['esse ut'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['proiden'],
    name: ['elit ut ad of'],
    prizepool: ['ullamco'],
    serieId: [7],
    slug: ['__q0y7_6p8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverR6SiegeShortTournaments = {
    beginAt: ['ea qu'],
    detailedStats: [true],
    endAt: ['laborum in'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['anim'],
    name: ['dolor fu'],
    prizepool: ['eiusmod enim '],
    serieId: [6],
    slug: ['sv5tro'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverR6SiegeShortTournaments = {
    name: 'cupida',
    prizepool: 'commodo cupid',
    slug: '93',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournamentsPast({
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

## get_r6siege_tournaments_running

List running Rainbow Six Siege tournaments

- HTTP Method: `GET`
- Endpoint: `/r6siege/tournaments/running`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeShortTournaments](../models/FilterOverR6SiegeShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeShortTournaments](../models/RangeOverR6SiegeShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeShortTournaments](../models/SearchOverR6SiegeShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverR6SiegeShortTournaments,
  SearchOverR6SiegeShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverR6SiegeShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverR6SiegeShortTournaments = {
    beginAt: ['enim sunt'],
    detailedStats: true,
    endAt: ['esse ut'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['proiden'],
    name: ['elit ut ad of'],
    prizepool: ['ullamco'],
    serieId: [7],
    slug: ['__q0y7_6p8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverR6SiegeShortTournaments = {
    beginAt: ['ea qu'],
    detailedStats: [true],
    endAt: ['laborum in'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['anim'],
    name: ['dolor fu'],
    prizepool: ['eiusmod enim '],
    serieId: [6],
    slug: ['sv5tro'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverR6SiegeShortTournaments = {
    name: 'cupida',
    prizepool: 'commodo cupid',
    slug: '93',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournamentsRunning({
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

## get_r6siege_tournaments_upcoming

List upcoming Rainbow Six Siege tournaments

- HTTP Method: `GET`
- Endpoint: `/r6siege/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeShortTournaments](../models/FilterOverR6SiegeShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeShortTournaments](../models/RangeOverR6SiegeShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeShortTournaments](../models/SearchOverR6SiegeShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverR6SiegeShortTournaments,
  SearchOverR6SiegeShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverR6SiegeShortTournamentsVideogameTitle = 7;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverR6SiegeShortTournaments = {
    beginAt: ['enim sunt'],
    detailedStats: true,
    endAt: ['esse ut'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['proiden'],
    name: ['elit ut ad of'],
    prizepool: ['ullamco'],
    serieId: [7],
    slug: ['__q0y7_6p8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverR6SiegeShortTournaments = {
    beginAt: ['ea qu'],
    detailedStats: [true],
    endAt: ['laborum in'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['anim'],
    name: ['dolor fu'],
    prizepool: ['eiusmod enim '],
    serieId: [6],
    slug: ['sv5tro'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverR6SiegeShortTournaments = {
    name: 'cupida',
    prizepool: 'commodo cupid',
    slug: '93',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournamentsUpcoming({
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
