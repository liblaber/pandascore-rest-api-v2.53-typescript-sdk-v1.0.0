# OwTournamentsService

A list of all methods in the `OwTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                  |
| :---------------------------------------------------------- | :------------------------------------------- |
| [get_ow_tournaments](#get_ow_tournaments)                   | List tournaments for the Overwatch videogame |
| [get_ow_tournaments_past](#get_ow_tournaments_past)         | List past Overwatch tournaments              |
| [get_ow_tournaments_running](#get_ow_tournaments_running)   | List running Overwatch tournaments           |
| [get_ow_tournaments_upcoming](#get_ow_tournaments_upcoming) | List upcoming Overwatch tournaments          |

## get_ow_tournaments

List tournaments for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/tournaments`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwShortTournaments](../models/FilterOverOwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwShortTournaments](../models/RangeOverOwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwShortTournaments](../models/SearchOverOwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverOwShortTournamentsVideogameTitle = 5;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['eu nu'],
    detailedStats: true,
    endAt: ['n'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['proid'],
    name: ['auteenim Ut rep'],
    prizepool: ['esse anim culp'],
    serieId: [4],
    slug: ['41y_yf-8qjn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['in'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['fugiat'],
    name: ['eu reprehen'],
    prizepool: ['nostrud'],
    serieId: [2],
    slug: ['jk3apxr'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'reprehenderit',
    prizepool: 'Lorem',
    slug: 'er49fbsvw',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.owTournaments.getOwTournaments({
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

## get_ow_tournaments_past

List past Overwatch tournaments

- HTTP Method: `GET`
- Endpoint: `/ow/tournaments/past`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwShortTournaments](../models/FilterOverOwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwShortTournaments](../models/RangeOverOwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwShortTournaments](../models/SearchOverOwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverOwShortTournamentsVideogameTitle = 5;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['eu nu'],
    detailedStats: true,
    endAt: ['n'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['proid'],
    name: ['auteenim Ut rep'],
    prizepool: ['esse anim culp'],
    serieId: [4],
    slug: ['41y_yf-8qjn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['in'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['fugiat'],
    name: ['eu reprehen'],
    prizepool: ['nostrud'],
    serieId: [2],
    slug: ['jk3apxr'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'reprehenderit',
    prizepool: 'Lorem',
    slug: 'er49fbsvw',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.owTournaments.getOwTournamentsPast({
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

## get_ow_tournaments_running

List running Overwatch tournaments

- HTTP Method: `GET`
- Endpoint: `/ow/tournaments/running`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwShortTournaments](../models/FilterOverOwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwShortTournaments](../models/RangeOverOwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwShortTournaments](../models/SearchOverOwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverOwShortTournamentsVideogameTitle = 5;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['eu nu'],
    detailedStats: true,
    endAt: ['n'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['proid'],
    name: ['auteenim Ut rep'],
    prizepool: ['esse anim culp'],
    serieId: [4],
    slug: ['41y_yf-8qjn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['in'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['fugiat'],
    name: ['eu reprehen'],
    prizepool: ['nostrud'],
    serieId: [2],
    slug: ['jk3apxr'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'reprehenderit',
    prizepool: 'Lorem',
    slug: 'er49fbsvw',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.owTournaments.getOwTournamentsRunning({
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

## get_ow_tournaments_upcoming

List upcoming Overwatch tournaments

- HTTP Method: `GET`
- Endpoint: `/ow/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwShortTournaments](../models/FilterOverOwShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwShortTournaments](../models/RangeOverOwShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwShortTournaments](../models/SearchOverOwShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverOwShortTournamentsVideogameTitle = 5;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['eu nu'],
    detailedStats: true,
    endAt: ['n'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['proid'],
    name: ['auteenim Ut rep'],
    prizepool: ['esse anim culp'],
    serieId: [4],
    slug: ['41y_yf-8qjn'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['in'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [6],
    modifiedAt: ['fugiat'],
    name: ['eu reprehen'],
    prizepool: ['nostrud'],
    serieId: [2],
    slug: ['jk3apxr'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'reprehenderit',
    prizepool: 'Lorem',
    slug: 'er49fbsvw',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.owTournaments.getOwTournamentsUpcoming({
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
