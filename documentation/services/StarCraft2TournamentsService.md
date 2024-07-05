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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['cupidatat '],
    detailedStats: true,
    endAt: ['et'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['deserunt '],
    name: ['velit Lor'],
    prizepool: ['proident non '],
    serieId: [8],
    slug: ['dvtig4'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['es'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['sint labor'],
    name: ['laboris ut repr'],
    prizepool: ['officia i'],
    serieId: [7],
    slug: ['9'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraft2ShortTournaments = {
    name: 'nisiamet',
    prizepool: 'eiusmod',
    slug: 'mb',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraft2Tournaments.getStarcraft2Tournaments({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['cupidatat '],
    detailedStats: true,
    endAt: ['et'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['deserunt '],
    name: ['velit Lor'],
    prizepool: ['proident non '],
    serieId: [8],
    slug: ['dvtig4'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['es'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['sint labor'],
    name: ['laboris ut repr'],
    prizepool: ['officia i'],
    serieId: [7],
    slug: ['9'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraft2ShortTournaments = {
    name: 'nisiamet',
    prizepool: 'eiusmod',
    slug: 'mb',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraft2Tournaments.getStarcraft2TournamentsPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['cupidatat '],
    detailedStats: true,
    endAt: ['et'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['deserunt '],
    name: ['velit Lor'],
    prizepool: ['proident non '],
    serieId: [8],
    slug: ['dvtig4'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['es'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['sint labor'],
    name: ['laboris ut repr'],
    prizepool: ['officia i'],
    serieId: [7],
    slug: ['9'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraft2ShortTournaments = {
    name: 'nisiamet',
    prizepool: 'eiusmod',
    slug: 'mb',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraft2Tournaments.getStarcraft2TournamentsRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverStarcraft2ShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverStarcraft2ShortTournaments = {
    beginAt: ['cupidatat '],
    detailedStats: true,
    endAt: ['et'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['deserunt '],
    name: ['velit Lor'],
    prizepool: ['proident non '],
    serieId: [8],
    slug: ['dvtig4'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverStarcraft2ShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverStarcraft2ShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['es'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['sint labor'],
    name: ['laboris ut repr'],
    prizepool: ['officia i'],
    serieId: [7],
    slug: ['9'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverStarcraft2ShortTournaments = {
    name: 'nisiamet',
    prizepool: 'eiusmod',
    slug: 'mb',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.starCraft2Tournaments.getStarcraft2TournamentsUpcoming({
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
