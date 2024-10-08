# KogTournamentsService

A list of all methods in the `KogTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                      |
| :------------------------------------------------------------ | :----------------------------------------------- |
| [get_kog_tournaments](#get_kog_tournaments)                   | List tournaments for the King of Glory videogame |
| [get_kog_tournaments_past](#get_kog_tournaments_past)         | List past King of Glory tournaments              |
| [get_kog_tournaments_running](#get_kog_tournaments_running)   | List running King of Glory tournaments           |
| [get_kog_tournaments_upcoming](#get_kog_tournaments_upcoming) | List upcoming King of Glory tournaments          |

## get_kog_tournaments

List tournaments for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogShortTournaments: FilterOverKogShortTournaments = {
    beginAt: ['voluptate i'],
    detailedStats: true,
    endAt: ['Lo'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['adipisici'],
    name: ['deserunt '],
    prizepool: ['incidi'],
    serieId: [8],
    slug: ['jb0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogShortTournaments: RangeOverKogShortTournaments = {
    beginAt: ['do des'],
    detailedStats: [true],
    endAt: ['a'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['ut D'],
    name: ['et ea '],
    prizepool: ['ex et Lo'],
    serieId: [3],
    slug: ['hpq1rop'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogShortTournaments: SearchOverKogShortTournaments = {
    name: 'amet ut ',
    prizepool: 'laborum in v',
    slug: 'csu',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournaments({
    filter: filterOverKogShortTournaments,
    range: rangeOverKogShortTournaments,
    sort: [[]],
    search: searchOverKogShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_kog_tournaments_past

List past King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/past`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogShortTournaments: FilterOverKogShortTournaments = {
    beginAt: ['voluptate i'],
    detailedStats: true,
    endAt: ['Lo'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['adipisici'],
    name: ['deserunt '],
    prizepool: ['incidi'],
    serieId: [8],
    slug: ['jb0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogShortTournaments: RangeOverKogShortTournaments = {
    beginAt: ['do des'],
    detailedStats: [true],
    endAt: ['a'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['ut D'],
    name: ['et ea '],
    prizepool: ['ex et Lo'],
    serieId: [3],
    slug: ['hpq1rop'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogShortTournaments: SearchOverKogShortTournaments = {
    name: 'amet ut ',
    prizepool: 'laborum in v',
    slug: 'csu',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournamentsPast({
    filter: filterOverKogShortTournaments,
    range: rangeOverKogShortTournaments,
    sort: [[]],
    search: searchOverKogShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_kog_tournaments_running

List running King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/running`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogShortTournaments: FilterOverKogShortTournaments = {
    beginAt: ['voluptate i'],
    detailedStats: true,
    endAt: ['Lo'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['adipisici'],
    name: ['deserunt '],
    prizepool: ['incidi'],
    serieId: [8],
    slug: ['jb0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogShortTournaments: RangeOverKogShortTournaments = {
    beginAt: ['do des'],
    detailedStats: [true],
    endAt: ['a'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['ut D'],
    name: ['et ea '],
    prizepool: ['ex et Lo'],
    serieId: [3],
    slug: ['hpq1rop'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogShortTournaments: SearchOverKogShortTournaments = {
    name: 'amet ut ',
    prizepool: 'laborum in v',
    slug: 'csu',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournamentsRunning({
    filter: filterOverKogShortTournaments,
    range: rangeOverKogShortTournaments,
    sort: [[]],
    search: searchOverKogShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_kog_tournaments_upcoming

List upcoming King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverKogShortTournaments,
  SearchOverKogShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverKogShortTournamentsVideogameTitle = 4;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverKogShortTournaments: FilterOverKogShortTournaments = {
    beginAt: ['voluptate i'],
    detailedStats: true,
    endAt: ['Lo'],
    hasBracket: true,
    id: [8],
    liveSupported: true,
    modifiedAt: ['adipisici'],
    name: ['deserunt '],
    prizepool: ['incidi'],
    serieId: [8],
    slug: ['jb0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverKogShortTournaments: RangeOverKogShortTournaments = {
    beginAt: ['do des'],
    detailedStats: [true],
    endAt: ['a'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['ut D'],
    name: ['et ea '],
    prizepool: ['ex et Lo'],
    serieId: [3],
    slug: ['hpq1rop'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverKogShortTournaments: SearchOverKogShortTournaments = {
    name: 'amet ut ',
    prizepool: 'laborum in v',
    slug: 'csu',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogTournaments.getKogTournamentsUpcoming({
    filter: filterOverKogShortTournaments,
    range: rangeOverKogShortTournaments,
    sort: [[]],
    search: searchOverKogShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
