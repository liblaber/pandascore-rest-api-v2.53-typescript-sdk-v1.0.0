# RlTournamentsService

A list of all methods in the `RlTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                      |
| :---------------------------------------------------------- | :----------------------------------------------- |
| [get_rl_tournaments](#get_rl_tournaments)                   | List tournaments for the Rocket League videogame |
| [get_rl_tournaments_past](#get_rl_tournaments_past)         | List past Rocket League tournaments              |
| [get_rl_tournaments_running](#get_rl_tournaments_running)   | List running Rocket League tournaments           |
| [get_rl_tournaments_upcoming](#get_rl_tournaments_upcoming) | List upcoming Rocket League tournaments          |

## get_rl_tournaments

List tournaments for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverRlShortTournaments: FilterOverRlShortTournaments = {
    beginAt: ['proi'],
    detailedStats: true,
    endAt: ['Duis c'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['ad a'],
    name: ['et officia'],
    prizepool: ['aliqua fugiat'],
    serieId: [8],
    slug: ['l0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverRlShortTournaments: RangeOverRlShortTournaments = {
    beginAt: ['ea in'],
    detailedStats: [true],
    endAt: ['eiusmod'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat la'],
    name: ['quis sit '],
    prizepool: ['autelaborum '],
    serieId: [1],
    slug: ['yozf-78_3ou'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverRlShortTournaments: SearchOverRlShortTournaments = {
    name: 'eiusmod anim',
    prizepool: 'culpa ani',
    slug: 'q',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournaments({
    filter: filterOverRlShortTournaments,
    range: rangeOverRlShortTournaments,
    sort: [[]],
    search: searchOverRlShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_rl_tournaments_past

List past Rocket League tournaments

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments/past`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverRlShortTournaments: FilterOverRlShortTournaments = {
    beginAt: ['proi'],
    detailedStats: true,
    endAt: ['Duis c'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['ad a'],
    name: ['et officia'],
    prizepool: ['aliqua fugiat'],
    serieId: [8],
    slug: ['l0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverRlShortTournaments: RangeOverRlShortTournaments = {
    beginAt: ['ea in'],
    detailedStats: [true],
    endAt: ['eiusmod'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat la'],
    name: ['quis sit '],
    prizepool: ['autelaborum '],
    serieId: [1],
    slug: ['yozf-78_3ou'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverRlShortTournaments: SearchOverRlShortTournaments = {
    name: 'eiusmod anim',
    prizepool: 'culpa ani',
    slug: 'q',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournamentsPast({
    filter: filterOverRlShortTournaments,
    range: rangeOverRlShortTournaments,
    sort: [[]],
    search: searchOverRlShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_rl_tournaments_running

List running Rocket League tournaments

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments/running`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverRlShortTournaments: FilterOverRlShortTournaments = {
    beginAt: ['proi'],
    detailedStats: true,
    endAt: ['Duis c'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['ad a'],
    name: ['et officia'],
    prizepool: ['aliqua fugiat'],
    serieId: [8],
    slug: ['l0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverRlShortTournaments: RangeOverRlShortTournaments = {
    beginAt: ['ea in'],
    detailedStats: [true],
    endAt: ['eiusmod'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat la'],
    name: ['quis sit '],
    prizepool: ['autelaborum '],
    serieId: [1],
    slug: ['yozf-78_3ou'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverRlShortTournaments: SearchOverRlShortTournaments = {
    name: 'eiusmod anim',
    prizepool: 'culpa ani',
    slug: 'q',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournamentsRunning({
    filter: filterOverRlShortTournaments,
    range: rangeOverRlShortTournaments,
    sort: [[]],
    search: searchOverRlShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_rl_tournaments_upcoming

List upcoming Rocket League tournaments

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverRlShortTournaments: FilterOverRlShortTournaments = {
    beginAt: ['proi'],
    detailedStats: true,
    endAt: ['Duis c'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['ad a'],
    name: ['et officia'],
    prizepool: ['aliqua fugiat'],
    serieId: [8],
    slug: ['l0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverRlShortTournaments: RangeOverRlShortTournaments = {
    beginAt: ['ea in'],
    detailedStats: [true],
    endAt: ['eiusmod'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat la'],
    name: ['quis sit '],
    prizepool: ['autelaborum '],
    serieId: [1],
    slug: ['yozf-78_3ou'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverRlShortTournaments: SearchOverRlShortTournaments = {
    name: 'eiusmod anim',
    prizepool: 'culpa ani',
    slug: 'q',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournamentsUpcoming({
    filter: filterOverRlShortTournaments,
    range: rangeOverRlShortTournaments,
    sort: [[]],
    search: searchOverRlShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
