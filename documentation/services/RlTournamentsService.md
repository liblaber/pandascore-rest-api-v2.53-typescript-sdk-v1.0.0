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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['sed aliqu'],
    detailedStats: true,
    endAt: ['proid'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['l'],
    name: ['proide'],
    prizepool: ['proiden'],
    serieId: [7],
    slug: ['q3r18me3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['ea'],
    detailedStats: [true],
    endAt: ['ut'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat nulla e'],
    name: ['culpa do'],
    prizepool: ['culpa es'],
    serieId: [5],
    slug: ['8y'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverRlShortTournaments = {
    name: 'et velit id re',
    prizepool: 'labore cupid',
    slug: 'd',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.rlTournaments.getRlTournaments({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['sed aliqu'],
    detailedStats: true,
    endAt: ['proid'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['l'],
    name: ['proide'],
    prizepool: ['proiden'],
    serieId: [7],
    slug: ['q3r18me3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['ea'],
    detailedStats: [true],
    endAt: ['ut'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat nulla e'],
    name: ['culpa do'],
    prizepool: ['culpa es'],
    serieId: [5],
    slug: ['8y'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverRlShortTournaments = {
    name: 'et velit id re',
    prizepool: 'labore cupid',
    slug: 'd',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.rlTournaments.getRlTournamentsPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['sed aliqu'],
    detailedStats: true,
    endAt: ['proid'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['l'],
    name: ['proide'],
    prizepool: ['proiden'],
    serieId: [7],
    slug: ['q3r18me3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['ea'],
    detailedStats: [true],
    endAt: ['ut'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat nulla e'],
    name: ['culpa do'],
    prizepool: ['culpa es'],
    serieId: [5],
    slug: ['8y'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverRlShortTournaments = {
    name: 'et velit id re',
    prizepool: 'labore cupid',
    slug: 'd',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.rlTournaments.getRlTournamentsRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverRlShortTournamentsVideogameTitle = 8;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['sed aliqu'],
    detailedStats: true,
    endAt: ['proid'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['l'],
    name: ['proide'],
    prizepool: ['proiden'],
    serieId: [7],
    slug: ['q3r18me3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['ea'],
    detailedStats: [true],
    endAt: ['ut'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['fugiat nulla e'],
    name: ['culpa do'],
    prizepool: ['culpa es'],
    serieId: [5],
    slug: ['8y'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverRlShortTournaments = {
    name: 'et velit id re',
    prizepool: 'labore cupid',
    slug: 'd',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.rlTournaments.getRlTournamentsUpcoming({
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
