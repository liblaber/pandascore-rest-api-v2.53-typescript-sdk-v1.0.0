# PubgTournamentsService

A list of all methods in the `PubgTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                             |
| :-------------------------------------------------------------- | :-------------------------------------- |
| [get_pubg_tournaments](#get_pubg_tournaments)                   | List tournaments for the PUBG videogame |
| [get_pubg_tournaments_past](#get_pubg_tournaments_past)         | List past PUBG tournaments              |
| [get_pubg_tournaments_running](#get_pubg_tournaments_running)   | List running PUBG tournaments           |
| [get_pubg_tournaments_upcoming](#get_pubg_tournaments_upcoming) | List upcoming PUBG tournaments          |

## get_pubg_tournaments

List tournaments for the PUBG videogame

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverPubgShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['anim'],
    detailedStats: true,
    endAt: ['amet inc'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolore'],
    name: ['dolor'],
    prizepool: ['do ut l'],
    serieId: [2],
    slug: ['2b0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['irure enim cul'],
    detailedStats: [true],
    endAt: ['pariatur id n'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['commodo i'],
    name: ['sed quis Ex'],
    prizepool: ['ipsum dolor n'],
    serieId: [9],
    slug: ['m8xyivdn'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverPubgShortTournaments = {
    name: 'minim volupta',
    prizepool: 'laboru',
    slug: 'uo8dnitlug5',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.pubgTournaments.getPubgTournaments({
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

## get_pubg_tournaments_past

List past PUBG tournaments

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments/past`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverPubgShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['anim'],
    detailedStats: true,
    endAt: ['amet inc'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolore'],
    name: ['dolor'],
    prizepool: ['do ut l'],
    serieId: [2],
    slug: ['2b0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['irure enim cul'],
    detailedStats: [true],
    endAt: ['pariatur id n'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['commodo i'],
    name: ['sed quis Ex'],
    prizepool: ['ipsum dolor n'],
    serieId: [9],
    slug: ['m8xyivdn'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverPubgShortTournaments = {
    name: 'minim volupta',
    prizepool: 'laboru',
    slug: 'uo8dnitlug5',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.pubgTournaments.getPubgTournamentsPast({
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

## get_pubg_tournaments_running

List running PUBG tournaments

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments/running`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverPubgShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['anim'],
    detailedStats: true,
    endAt: ['amet inc'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolore'],
    name: ['dolor'],
    prizepool: ['do ut l'],
    serieId: [2],
    slug: ['2b0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['irure enim cul'],
    detailedStats: [true],
    endAt: ['pariatur id n'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['commodo i'],
    name: ['sed quis Ex'],
    prizepool: ['ipsum dolor n'],
    serieId: [9],
    slug: ['m8xyivdn'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverPubgShortTournaments = {
    name: 'minim volupta',
    prizepool: 'laboru',
    slug: 'uo8dnitlug5',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.pubgTournaments.getPubgTournamentsRunning({
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

## get_pubg_tournaments_upcoming

List upcoming PUBG tournaments

- HTTP Method: `GET`
- Endpoint: `/pubg/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgShortTournaments](../models/FilterOverPubgShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgShortTournaments](../models/RangeOverPubgShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgShortTournaments](../models/SearchOverPubgShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverPubgShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverPubgShortTournaments = {
    beginAt: ['anim'],
    detailedStats: true,
    endAt: ['amet inc'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['dolore'],
    name: ['dolor'],
    prizepool: ['do ut l'],
    serieId: [2],
    slug: ['2b0'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverPubgShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverPubgShortTournaments = {
    beginAt: ['irure enim cul'],
    detailedStats: [true],
    endAt: ['pariatur id n'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['commodo i'],
    name: ['sed quis Ex'],
    prizepool: ['ipsum dolor n'],
    serieId: [9],
    slug: ['m8xyivdn'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverPubgShortTournaments = {
    name: 'minim volupta',
    prizepool: 'laboru',
    slug: 'uo8dnitlug5',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.pubgTournaments.getPubgTournamentsUpcoming({
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
