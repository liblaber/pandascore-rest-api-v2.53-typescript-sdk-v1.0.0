# StarCraft2TournamentsService

A list of all methods in the `StarCraft2TournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                       | Description                                    |
| :---------------------------------------------------------------------------- | :--------------------------------------------- |
| [get_starcraft_2_tournaments](#get_starcraft_2_tournaments)                   | List tournaments for the StarCraft 2 videogame |
| [get_starcraft_2_tournaments_past](#get_starcraft_2_tournaments_past)         | List past StarCraft 2 tournaments              |
| [get_starcraft_2_tournaments_running](#get_starcraft_2_tournaments_running)   | List running StarCraft 2 tournaments           |
| [get_starcraft_2_tournaments_upcoming](#get_starcraft_2_tournaments_upcoming) | List upcoming StarCraft 2 tournaments          |

## get_starcraft_2_tournaments

List tournaments for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/tournaments`

**Parameters**

| Name    | Type                                                                                      | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2ShortTournaments](../models/FilterOverStarcraft2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2ShortTournaments](../models/RangeOverStarcraft2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2ShortTournaments](../models/SearchOverStarcraft2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2ShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2ShortTournaments,
  SearchOverStarcraft2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2ShortTournaments: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['labor'],
    detailedStats: true,
    endAt: ['incididunt '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['sint'],
    name: ['mollit Duis'],
    prizepool: ['tempor'],
    serieId: [9],
    slug: ['nsn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2ShortTournaments: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['incididunt '],
    detailedStats: [true],
    endAt: ['mollit sit co'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['tempor'],
    name: ['ex Ex'],
    prizepool: ['magna'],
    serieId: [9],
    slug: ['nui1sjb1'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2ShortTournaments: SearchOverStarcraft2ShortTournaments = {
    name: 'mollit ea',
    prizepool: 'proident dolore',
    slug: '2fh161cl8e',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Tournaments.getStarcraft2Tournaments({
    filter: filterOverStarcraft2ShortTournaments,
    range: rangeOverStarcraft2ShortTournaments,
    sort: [[]],
    search: searchOverStarcraft2ShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_starcraft_2_tournaments_past

List past StarCraft 2 tournaments

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/tournaments/past`

**Parameters**

| Name    | Type                                                                                      | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2ShortTournaments](../models/FilterOverStarcraft2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2ShortTournaments](../models/RangeOverStarcraft2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2ShortTournaments](../models/SearchOverStarcraft2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2ShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2ShortTournaments,
  SearchOverStarcraft2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2ShortTournaments: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['labor'],
    detailedStats: true,
    endAt: ['incididunt '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['sint'],
    name: ['mollit Duis'],
    prizepool: ['tempor'],
    serieId: [9],
    slug: ['nsn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2ShortTournaments: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['incididunt '],
    detailedStats: [true],
    endAt: ['mollit sit co'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['tempor'],
    name: ['ex Ex'],
    prizepool: ['magna'],
    serieId: [9],
    slug: ['nui1sjb1'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2ShortTournaments: SearchOverStarcraft2ShortTournaments = {
    name: 'mollit ea',
    prizepool: 'proident dolore',
    slug: '2fh161cl8e',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Tournaments.getStarcraft2TournamentsPast({
    filter: filterOverStarcraft2ShortTournaments,
    range: rangeOverStarcraft2ShortTournaments,
    sort: [[]],
    search: searchOverStarcraft2ShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_starcraft_2_tournaments_running

List running StarCraft 2 tournaments

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/tournaments/running`

**Parameters**

| Name    | Type                                                                                      | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2ShortTournaments](../models/FilterOverStarcraft2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2ShortTournaments](../models/RangeOverStarcraft2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2ShortTournaments](../models/SearchOverStarcraft2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2ShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2ShortTournaments,
  SearchOverStarcraft2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2ShortTournaments: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['labor'],
    detailedStats: true,
    endAt: ['incididunt '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['sint'],
    name: ['mollit Duis'],
    prizepool: ['tempor'],
    serieId: [9],
    slug: ['nsn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2ShortTournaments: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['incididunt '],
    detailedStats: [true],
    endAt: ['mollit sit co'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['tempor'],
    name: ['ex Ex'],
    prizepool: ['magna'],
    serieId: [9],
    slug: ['nui1sjb1'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2ShortTournaments: SearchOverStarcraft2ShortTournaments = {
    name: 'mollit ea',
    prizepool: 'proident dolore',
    slug: '2fh161cl8e',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Tournaments.getStarcraft2TournamentsRunning({
    filter: filterOverStarcraft2ShortTournaments,
    range: rangeOverStarcraft2ShortTournaments,
    sort: [[]],
    search: searchOverStarcraft2ShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_starcraft_2_tournaments_upcoming

List upcoming StarCraft 2 tournaments

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                      | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2ShortTournaments](../models/FilterOverStarcraft2ShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2ShortTournaments](../models/RangeOverStarcraft2ShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2ShortTournaments](../models/SearchOverStarcraft2ShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2ShortTournaments,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverStarcraft2ShortTournaments,
  SearchOverStarcraft2ShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 3;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverStarcraft2ShortTournaments: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['labor'],
    detailedStats: true,
    endAt: ['incididunt '],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['sint'],
    name: ['mollit Duis'],
    prizepool: ['tempor'],
    serieId: [9],
    slug: ['nsn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverStarcraft2ShortTournaments: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['incididunt '],
    detailedStats: [true],
    endAt: ['mollit sit co'],
    hasBracket: [true],
    id: [8],
    modifiedAt: ['tempor'],
    name: ['ex Ex'],
    prizepool: ['magna'],
    serieId: [9],
    slug: ['nui1sjb1'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverStarcraft2ShortTournaments: SearchOverStarcraft2ShortTournaments = {
    name: 'mollit ea',
    prizepool: 'proident dolore',
    slug: '2fh161cl8e',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Tournaments.getStarcraft2TournamentsUpcoming({
    filter: filterOverStarcraft2ShortTournaments,
    range: rangeOverStarcraft2ShortTournaments,
    sort: [[]],
    search: searchOverStarcraft2ShortTournaments,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
