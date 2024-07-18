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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverOwShortTournamentsVideogameTitle = 7;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['nulla adipi'],
    detailedStats: true,
    endAt: ['non '],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['nostrud'],
    name: ['Excepteur '],
    prizepool: ['ut in conse'],
    serieId: [6],
    slug: ['whv5t1by8yq'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['e'],
    detailedStats: [true],
    endAt: ['est'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['cupidatat '],
    name: ['ullamco null'],
    prizepool: ['consequ'],
    serieId: [7],
    slug: ['9sb0udh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'elit ad velit i',
    prizepool: 'velit',
    slug: 'pd9o',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owTournaments.getOwTournaments({
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverOwShortTournamentsVideogameTitle = 7;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['nulla adipi'],
    detailedStats: true,
    endAt: ['non '],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['nostrud'],
    name: ['Excepteur '],
    prizepool: ['ut in conse'],
    serieId: [6],
    slug: ['whv5t1by8yq'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['e'],
    detailedStats: [true],
    endAt: ['est'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['cupidatat '],
    name: ['ullamco null'],
    prizepool: ['consequ'],
    serieId: [7],
    slug: ['9sb0udh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'elit ad velit i',
    prizepool: 'velit',
    slug: 'pd9o',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owTournaments.getOwTournamentsPast({
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverOwShortTournamentsVideogameTitle = 7;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['nulla adipi'],
    detailedStats: true,
    endAt: ['non '],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['nostrud'],
    name: ['Excepteur '],
    prizepool: ['ut in conse'],
    serieId: [6],
    slug: ['whv5t1by8yq'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['e'],
    detailedStats: [true],
    endAt: ['est'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['cupidatat '],
    name: ['ullamco null'],
    prizepool: ['consequ'],
    serieId: [7],
    slug: ['9sb0udh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'elit ad velit i',
    prizepool: 'velit',
    slug: 'pd9o',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owTournaments.getOwTournamentsRunning({
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverOwShortTournamentsVideogameTitle = 7;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const filter: FilterOverOwShortTournaments = {
    beginAt: ['nulla adipi'],
    detailedStats: true,
    endAt: ['non '],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['nostrud'],
    name: ['Excepteur '],
    prizepool: ['ut in conse'],
    serieId: [6],
    slug: ['whv5t1by8yq'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverOwShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 5;

  const opponentType = OpponentType.Player;

  const range: RangeOverOwShortTournaments = {
    beginAt: ['e'],
    detailedStats: [true],
    endAt: ['est'],
    hasBracket: [true],
    id: [3],
    modifiedAt: ['cupidatat '],
    name: ['ullamco null'],
    prizepool: ['consequ'],
    serieId: [7],
    slug: ['9sb0udh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverOwShortTournaments = {
    name: 'elit ad velit i',
    prizepool: 'velit',
    slug: 'pd9o',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owTournaments.getOwTournamentsUpcoming({
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
