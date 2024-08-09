# LoLWildRiftTournamentsService

A list of all methods in the `LoLWildRiftTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                           | Description                                      |
| :-------------------------------------------------------------------------------- | :----------------------------------------------- |
| [get_lol_wild_rift_tournaments](#get_lol_wild_rift_tournaments)                   | List tournaments for the LoL Wild Rift videogame |
| [get_lol_wild_rift_tournaments_past](#get_lol_wild_rift_tournaments_past)         | List past LoL Wild Rift tournaments              |
| [get_lol_wild_rift_tournaments_running](#get_lol_wild_rift_tournaments_running)   | List running LoL Wild Rift tournaments           |
| [get_lol_wild_rift_tournaments_upcoming](#get_lol_wild_rift_tournaments_upcoming) | List upcoming LoL Wild Rift tournaments          |

## get_lol_wild_rift_tournaments

List tournaments for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftShortTournaments,
  SearchOverLolWildRiftShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['id ea'],
    detailedStats: true,
    endAt: ['laboris'],
    hasBracket: true,
    id: [5],
    liveSupported: true,
    modifiedAt: ['ex sit ali'],
    name: ['reprehen'],
    prizepool: ['consectet'],
    serieId: [10],
    slug: ['pzqd3tmee_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ad sint'],
    detailedStats: [true],
    endAt: ['ut si'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['esse aliqua'],
    name: ['nostrud'],
    prizepool: ['dolor cupidatat'],
    serieId: [4],
    slug: ['v16'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'in voluptate u',
    prizepool: 'nostru',
    slug: 'clwi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftTournaments.getLolWildRiftTournaments({
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

## get_lol_wild_rift_tournaments_past

List past LoL Wild Rift tournaments

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments/past`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftShortTournaments,
  SearchOverLolWildRiftShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['id ea'],
    detailedStats: true,
    endAt: ['laboris'],
    hasBracket: true,
    id: [5],
    liveSupported: true,
    modifiedAt: ['ex sit ali'],
    name: ['reprehen'],
    prizepool: ['consectet'],
    serieId: [10],
    slug: ['pzqd3tmee_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ad sint'],
    detailedStats: [true],
    endAt: ['ut si'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['esse aliqua'],
    name: ['nostrud'],
    prizepool: ['dolor cupidatat'],
    serieId: [4],
    slug: ['v16'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'in voluptate u',
    prizepool: 'nostru',
    slug: 'clwi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftTournaments.getLolWildRiftTournamentsPast({
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

## get_lol_wild_rift_tournaments_running

List running LoL Wild Rift tournaments

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments/running`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftShortTournaments,
  SearchOverLolWildRiftShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['id ea'],
    detailedStats: true,
    endAt: ['laboris'],
    hasBracket: true,
    id: [5],
    liveSupported: true,
    modifiedAt: ['ex sit ali'],
    name: ['reprehen'],
    prizepool: ['consectet'],
    serieId: [10],
    slug: ['pzqd3tmee_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ad sint'],
    detailedStats: [true],
    endAt: ['ut si'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['esse aliqua'],
    name: ['nostrud'],
    prizepool: ['dolor cupidatat'],
    serieId: [4],
    slug: ['v16'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'in voluptate u',
    prizepool: 'nostru',
    slug: 'clwi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftTournaments.getLolWildRiftTournamentsRunning({
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

## get_lol_wild_rift_tournaments_upcoming

List upcoming LoL Wild Rift tournaments

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverLolWildRiftShortTournaments,
  SearchOverLolWildRiftShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 4;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['id ea'],
    detailedStats: true,
    endAt: ['laboris'],
    hasBracket: true,
    id: [5],
    liveSupported: true,
    modifiedAt: ['ex sit ali'],
    name: ['reprehen'],
    prizepool: ['consectet'],
    serieId: [10],
    slug: ['pzqd3tmee_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ad sint'],
    detailedStats: [true],
    endAt: ['ut si'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['esse aliqua'],
    name: ['nostrud'],
    prizepool: ['dolor cupidatat'],
    serieId: [4],
    slug: ['v16'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'in voluptate u',
    prizepool: 'nostru',
    slug: 'clwi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftTournaments.getLolWildRiftTournamentsUpcoming({
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
