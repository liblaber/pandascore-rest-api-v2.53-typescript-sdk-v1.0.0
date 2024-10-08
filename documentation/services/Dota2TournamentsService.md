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

  const filterOverDota2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2ShortTournaments: FilterOverDota2ShortTournaments = {
    beginAt: ['elit laboris'],
    detailedStats: true,
    endAt: ['anim sunt'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['lab'],
    name: ['ea sunt pro'],
    prizepool: ['incidid'],
    serieId: [10],
    slug: ['sh2x1_ti7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2ShortTournaments: RangeOverDota2ShortTournaments = {
    beginAt: ['dolor en'],
    detailedStats: [true],
    endAt: ['quis amet an'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['in '],
    name: ['aute qui'],
    prizepool: ['mollit et'],
    serieId: [8],
    slug: ['i6'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2ShortTournaments: SearchOverDota2ShortTournaments = {
    name: 'minim tempor de',
    prizepool: 'Duis laborum ',
    slug: '8xfo7sds7',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2Tournaments({
    filter: filterOverDota2ShortTournaments,
    range: rangeOverDota2ShortTournaments,
    sort: [[]],
    search: searchOverDota2ShortTournaments,
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

  const filterOverDota2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2ShortTournaments: FilterOverDota2ShortTournaments = {
    beginAt: ['elit laboris'],
    detailedStats: true,
    endAt: ['anim sunt'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['lab'],
    name: ['ea sunt pro'],
    prizepool: ['incidid'],
    serieId: [10],
    slug: ['sh2x1_ti7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2ShortTournaments: RangeOverDota2ShortTournaments = {
    beginAt: ['dolor en'],
    detailedStats: [true],
    endAt: ['quis amet an'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['in '],
    name: ['aute qui'],
    prizepool: ['mollit et'],
    serieId: [8],
    slug: ['i6'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2ShortTournaments: SearchOverDota2ShortTournaments = {
    name: 'minim tempor de',
    prizepool: 'Duis laborum ',
    slug: '8xfo7sds7',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2TournamentsPast({
    filter: filterOverDota2ShortTournaments,
    range: rangeOverDota2ShortTournaments,
    sort: [[]],
    search: searchOverDota2ShortTournaments,
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

  const filterOverDota2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2ShortTournaments: FilterOverDota2ShortTournaments = {
    beginAt: ['elit laboris'],
    detailedStats: true,
    endAt: ['anim sunt'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['lab'],
    name: ['ea sunt pro'],
    prizepool: ['incidid'],
    serieId: [10],
    slug: ['sh2x1_ti7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2ShortTournaments: RangeOverDota2ShortTournaments = {
    beginAt: ['dolor en'],
    detailedStats: [true],
    endAt: ['quis amet an'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['in '],
    name: ['aute qui'],
    prizepool: ['mollit et'],
    serieId: [8],
    slug: ['i6'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2ShortTournaments: SearchOverDota2ShortTournaments = {
    name: 'minim tempor de',
    prizepool: 'Duis laborum ',
    slug: '8xfo7sds7',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2TournamentsRunning({
    filter: filterOverDota2ShortTournaments,
    range: rangeOverDota2ShortTournaments,
    sort: [[]],
    search: searchOverDota2ShortTournaments,
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

  const filterOverDota2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverDota2ShortTournaments: FilterOverDota2ShortTournaments = {
    beginAt: ['elit laboris'],
    detailedStats: true,
    endAt: ['anim sunt'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['lab'],
    name: ['ea sunt pro'],
    prizepool: ['incidid'],
    serieId: [10],
    slug: ['sh2x1_ti7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverDota2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverDota2ShortTournaments: RangeOverDota2ShortTournaments = {
    beginAt: ['dolor en'],
    detailedStats: [true],
    endAt: ['quis amet an'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['in '],
    name: ['aute qui'],
    prizepool: ['mollit et'],
    serieId: [8],
    slug: ['i6'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverDota2ShortTournaments: SearchOverDota2ShortTournaments = {
    name: 'minim tempor de',
    prizepool: 'Duis laborum ',
    slug: '8xfo7sds7',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Tournaments.getDota2TournamentsUpcoming({
    filter: filterOverDota2ShortTournaments,
    range: rangeOverDota2ShortTournaments,
    sort: [[]],
    search: searchOverDota2ShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
