# StarCraftBroodWarTournamentsService

A list of all methods in the `StarCraftBroodWarTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description                                            |
| :-------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [get_starcraft_brood_war_tournaments](#get_starcraft_brood_war_tournaments)                   | List tournaments for the StarCraft Brood War videogame |
| [get_starcraft_brood_war_tournaments_past](#get_starcraft_brood_war_tournaments_past)         | List past StarCraft Brood War tournaments              |
| [get_starcraft_brood_war_tournaments_running](#get_starcraft_brood_war_tournaments_running)   | List running StarCraft Brood War tournaments           |
| [get_starcraft_brood_war_tournaments_upcoming](#get_starcraft_brood_war_tournaments_upcoming) | List upcoming StarCraft Brood War tournaments          |

## get_starcraft_brood_war_tournaments

List tournaments for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/tournaments`

**Parameters**

| Name    | Type                                                                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarShortTournaments](../models/FilterOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarShortTournaments](../models/RangeOverStarcraftBroodWarShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarShortTournaments](../models/SearchOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarShortTournaments,
  SearchOverStarcraftBroodWarShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraftBroodWarShortTournamentsVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarShortTournaments = {
    beginAt: ['n'],
    detailedStats: true,
    endAt: ['in veniam'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['offi'],
    name: ['nulla'],
    prizepool: ['ad nulla '],
    serieId: [1],
    slug: ['g'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraftBroodWarShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarShortTournaments = {
    beginAt: ['est exerci'],
    detailedStats: [true],
    endAt: ['fugia'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['enim in '],
    name: ['proident al'],
    prizepool: ['fugiat'],
    serieId: [6],
    slug: ['0_xv'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarShortTournaments = {
    name: 'sint nostr',
    prizepool: 'labori',
    slug: 'xxq',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarTournaments.getStarcraftBroodWarTournaments({
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

## get_starcraft_brood_war_tournaments_past

List past StarCraft Brood War tournaments

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/tournaments/past`

**Parameters**

| Name    | Type                                                                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarShortTournaments](../models/FilterOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarShortTournaments](../models/RangeOverStarcraftBroodWarShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarShortTournaments](../models/SearchOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarShortTournaments,
  SearchOverStarcraftBroodWarShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraftBroodWarShortTournamentsVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarShortTournaments = {
    beginAt: ['n'],
    detailedStats: true,
    endAt: ['in veniam'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['offi'],
    name: ['nulla'],
    prizepool: ['ad nulla '],
    serieId: [1],
    slug: ['g'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraftBroodWarShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarShortTournaments = {
    beginAt: ['est exerci'],
    detailedStats: [true],
    endAt: ['fugia'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['enim in '],
    name: ['proident al'],
    prizepool: ['fugiat'],
    serieId: [6],
    slug: ['0_xv'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarShortTournaments = {
    name: 'sint nostr',
    prizepool: 'labori',
    slug: 'xxq',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarTournaments.getStarcraftBroodWarTournamentsPast({
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

## get_starcraft_brood_war_tournaments_running

List running StarCraft Brood War tournaments

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/tournaments/running`

**Parameters**

| Name    | Type                                                                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarShortTournaments](../models/FilterOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarShortTournaments](../models/RangeOverStarcraftBroodWarShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarShortTournaments](../models/SearchOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarShortTournaments,
  SearchOverStarcraftBroodWarShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraftBroodWarShortTournamentsVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarShortTournaments = {
    beginAt: ['n'],
    detailedStats: true,
    endAt: ['in veniam'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['offi'],
    name: ['nulla'],
    prizepool: ['ad nulla '],
    serieId: [1],
    slug: ['g'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraftBroodWarShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarShortTournaments = {
    beginAt: ['est exerci'],
    detailedStats: [true],
    endAt: ['fugia'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['enim in '],
    name: ['proident al'],
    prizepool: ['fugiat'],
    serieId: [6],
    slug: ['0_xv'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarShortTournaments = {
    name: 'sint nostr',
    prizepool: 'labori',
    slug: 'xxq',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarTournaments.getStarcraftBroodWarTournamentsRunning({
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

## get_starcraft_brood_war_tournaments_upcoming

List upcoming StarCraft Brood War tournaments

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarShortTournaments](../models/FilterOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarShortTournaments](../models/RangeOverStarcraftBroodWarShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarShortTournaments](../models/SearchOverStarcraftBroodWarShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraftBroodWarShortTournaments,
  SearchOverStarcraftBroodWarShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraftBroodWarShortTournamentsVideogameTitle = 1;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverStarcraftBroodWarShortTournaments = {
    beginAt: ['n'],
    detailedStats: true,
    endAt: ['in veniam'],
    hasBracket: true,
    id: [10],
    liveSupported: true,
    modifiedAt: ['offi'],
    name: ['nulla'],
    prizepool: ['ad nulla '],
    serieId: [1],
    slug: ['g'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraftBroodWarShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverStarcraftBroodWarShortTournaments = {
    beginAt: ['est exerci'],
    detailedStats: [true],
    endAt: ['fugia'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['enim in '],
    name: ['proident al'],
    prizepool: ['fugiat'],
    serieId: [6],
    slug: ['0_xv'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverStarcraftBroodWarShortTournaments = {
    name: 'sint nostr',
    prizepool: 'labori',
    slug: 'xxq',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarTournaments.getStarcraftBroodWarTournamentsUpcoming({
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
