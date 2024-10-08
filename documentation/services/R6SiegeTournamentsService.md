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

  const filterOverR6SiegeShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverR6SiegeShortTournaments: FilterOverR6SiegeShortTournaments = {
    beginAt: ['dolore esse'],
    detailedStats: true,
    endAt: ['aliquip'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['aliqua fu'],
    name: ['quisullamc'],
    prizepool: ['nulla'],
    serieId: [3],
    slug: ['8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverR6SiegeShortTournaments: RangeOverR6SiegeShortTournaments = {
    beginAt: ['veniam '],
    detailedStats: [true],
    endAt: ['adipis'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['dolore eli'],
    name: ['exercitat'],
    prizepool: ['indolor eiu'],
    serieId: [9],
    slug: ['owgd'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverR6SiegeShortTournaments: SearchOverR6SiegeShortTournaments = {
    name: 'ullam',
    prizepool: 'incididun',
    slug: '6ix7vd2l-ow',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournaments({
    filter: filterOverR6SiegeShortTournaments,
    range: rangeOverR6SiegeShortTournaments,
    sort: [[]],
    search: searchOverR6SiegeShortTournaments,
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

  const filterOverR6SiegeShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverR6SiegeShortTournaments: FilterOverR6SiegeShortTournaments = {
    beginAt: ['dolore esse'],
    detailedStats: true,
    endAt: ['aliquip'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['aliqua fu'],
    name: ['quisullamc'],
    prizepool: ['nulla'],
    serieId: [3],
    slug: ['8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverR6SiegeShortTournaments: RangeOverR6SiegeShortTournaments = {
    beginAt: ['veniam '],
    detailedStats: [true],
    endAt: ['adipis'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['dolore eli'],
    name: ['exercitat'],
    prizepool: ['indolor eiu'],
    serieId: [9],
    slug: ['owgd'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverR6SiegeShortTournaments: SearchOverR6SiegeShortTournaments = {
    name: 'ullam',
    prizepool: 'incididun',
    slug: '6ix7vd2l-ow',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournamentsPast({
    filter: filterOverR6SiegeShortTournaments,
    range: rangeOverR6SiegeShortTournaments,
    sort: [[]],
    search: searchOverR6SiegeShortTournaments,
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

  const filterOverR6SiegeShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverR6SiegeShortTournaments: FilterOverR6SiegeShortTournaments = {
    beginAt: ['dolore esse'],
    detailedStats: true,
    endAt: ['aliquip'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['aliqua fu'],
    name: ['quisullamc'],
    prizepool: ['nulla'],
    serieId: [3],
    slug: ['8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverR6SiegeShortTournaments: RangeOverR6SiegeShortTournaments = {
    beginAt: ['veniam '],
    detailedStats: [true],
    endAt: ['adipis'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['dolore eli'],
    name: ['exercitat'],
    prizepool: ['indolor eiu'],
    serieId: [9],
    slug: ['owgd'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverR6SiegeShortTournaments: SearchOverR6SiegeShortTournaments = {
    name: 'ullam',
    prizepool: 'incididun',
    slug: '6ix7vd2l-ow',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournamentsRunning({
    filter: filterOverR6SiegeShortTournaments,
    range: rangeOverR6SiegeShortTournaments,
    sort: [[]],
    search: searchOverR6SiegeShortTournaments,
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

  const filterOverR6SiegeShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverR6SiegeShortTournaments: FilterOverR6SiegeShortTournaments = {
    beginAt: ['dolore esse'],
    detailedStats: true,
    endAt: ['aliquip'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['aliqua fu'],
    name: ['quisullamc'],
    prizepool: ['nulla'],
    serieId: [3],
    slug: ['8'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverR6SiegeShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverR6SiegeShortTournaments: RangeOverR6SiegeShortTournaments = {
    beginAt: ['veniam '],
    detailedStats: [true],
    endAt: ['adipis'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['dolore eli'],
    name: ['exercitat'],
    prizepool: ['indolor eiu'],
    serieId: [9],
    slug: ['owgd'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverR6SiegeShortTournaments: SearchOverR6SiegeShortTournaments = {
    name: 'ullam',
    prizepool: 'incididun',
    slug: '6ix7vd2l-ow',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeTournaments.getR6siegeTournamentsUpcoming({
    filter: filterOverR6SiegeShortTournaments,
    range: rangeOverR6SiegeShortTournaments,
    sort: [[]],
    search: searchOverR6SiegeShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
