# TournamentsService

A list of all methods in the `TournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description                                                |
| :-------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [get_tournaments](#get_tournaments)                                                           | List tournaments                                           |
| [get_tournaments_past](#get_tournaments_past)                                                 | List past tournaments                                      |
| [get_tournaments_running](#get_tournaments_running)                                           | List currently running tournaments                         |
| [get_tournaments_upcoming](#get_tournaments_upcoming)                                         | List upcoming tournaments                                  |
| [get_tournaments_tournamentIdOrSlug](#get_tournaments_tournamentidorslug)                     | Get a single tournament by ID or by slug                   |
| [get_tournaments_tournamentIdOrSlug_brackets](#get_tournaments_tournamentidorslug_brackets)   | Get the brackets of the given tournament                   |
| [get_tournaments_tournamentIdOrSlug_matches](#get_tournaments_tournamentidorslug_matches)     | List matches for the given tournament                      |
| [get_tournaments_tournamentIdOrSlug_rosters](#get_tournaments_tournamentidorslug_rosters)     | List participants (player or team) for a given tournament. |
| [get_tournaments_tournamentIdOrSlug_standings](#get_tournaments_tournamentidorslug_standings) | Get the current standings for a given tournament           |
| [get_tournaments_tournamentIdOrSlug_teams](#get_tournaments_tournamentidorslug_teams)         | List teams for the given tournament                        |

## get_tournaments

List tournaments

- HTTP Method: `GET`
- Endpoint: `/tournaments`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverShortTournaments,
  SearchOverShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverShortTournaments = {
    beginAt: ['ullamco magn'],
    detailedStats: true,
    endAt: ['mollit occ'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['dolor sunt ad e'],
    name: ['dolor quis es'],
    prizepool: ['irure '],
    serieId: [4],
    slug: ['l34'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverShortTournaments = {
    beginAt: ['non iru'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['la'],
    name: ['minim sit'],
    prizepool: ['pariatur id '],
    serieId: [1],
    slug: ['2aqc93'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverShortTournaments = {
    name: 'dolor',
    prizepool: 'ullamco',
    slug: '2',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournaments({
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

## get_tournaments_past

List past tournaments

- HTTP Method: `GET`
- Endpoint: `/tournaments/past`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverShortTournaments,
  SearchOverShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverShortTournaments = {
    beginAt: ['ullamco magn'],
    detailedStats: true,
    endAt: ['mollit occ'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['dolor sunt ad e'],
    name: ['dolor quis es'],
    prizepool: ['irure '],
    serieId: [4],
    slug: ['l34'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverShortTournaments = {
    beginAt: ['non iru'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['la'],
    name: ['minim sit'],
    prizepool: ['pariatur id '],
    serieId: [1],
    slug: ['2aqc93'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverShortTournaments = {
    name: 'dolor',
    prizepool: 'ullamco',
    slug: '2',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsPast({
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

## get_tournaments_running

List currently running tournaments

- HTTP Method: `GET`
- Endpoint: `/tournaments/running`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverShortTournaments,
  SearchOverShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverShortTournaments = {
    beginAt: ['ullamco magn'],
    detailedStats: true,
    endAt: ['mollit occ'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['dolor sunt ad e'],
    name: ['dolor quis es'],
    prizepool: ['irure '],
    serieId: [4],
    slug: ['l34'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverShortTournaments = {
    beginAt: ['non iru'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['la'],
    name: ['minim sit'],
    prizepool: ['pariatur id '],
    serieId: [1],
    slug: ['2aqc93'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverShortTournaments = {
    name: 'dolor',
    prizepool: 'ullamco',
    slug: '2',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsRunning({
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

## get_tournaments_upcoming

List upcoming tournaments

- HTTP Method: `GET`
- Endpoint: `/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverShortTournaments,
  SearchOverShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverShortTournaments = {
    beginAt: ['ullamco magn'],
    detailedStats: true,
    endAt: ['mollit occ'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['dolor sunt ad e'],
    name: ['dolor quis es'],
    prizepool: ['irure '],
    serieId: [4],
    slug: ['l34'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverShortTournaments = {
    beginAt: ['non iru'],
    detailedStats: [true],
    endAt: ['e'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['la'],
    name: ['minim sit'],
    prizepool: ['pariatur id '],
    serieId: [1],
    slug: ['2aqc93'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverShortTournaments = {
    name: 'dolor',
    prizepool: 'ullamco',
    slug: '2',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsUpcoming({
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

## get_tournaments_tournamentIdOrSlug

Get a single tournament by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/tournaments/{tournament_id_or_slug}`

**Parameters**

| Name               | Type                                                  | Required | Description             |
| :----------------- | :---------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug |

**Return Type**

`Tournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const tournamentIdOrSlug = 4;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlug();

  console.log(data);
})();
```

## get_tournaments_tournamentIdOrSlug_brackets

Get the brackets of the given tournament

- HTTP Method: `GET`
- Endpoint: `/tournaments/{tournament_id_or_slug}/brackets`

**Parameters**

| Name               | Type                                                  | Required | Description                                                                                                                                         |
| :----------------- | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug                                                                                                                             |
| filter             | [FilterOverBrackets](../models/FilterOverBrackets.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range              | [RangeOverBrackets](../models/RangeOverBrackets.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort               | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search             | [SearchOverBrackets](../models/SearchOverBrackets.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page               | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage            | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Bracket[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverBrackets, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, RangeOverBrackets, SearchOverBrackets, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 4;
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const filter: FilterOverBrackets = {
  beginAt: ["voluptat"],
  detailedStats: true,
  draw: true,
  endAt: ["ea ut min"],
  forfeit: true,
  id: [4],
  matchType: [matchType],
  modifiedAt: ["Ut"],
  name: ["veniam ad d"],
  numberOfGames: [123],
  scheduledAt: ["oc"],
  slug: ["fIZhH"],
  status: [matchStatus],
  tournamentId: [4],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const range: RangeOverBrackets = {
  beginAt: ["Du"],
  detailedStats: [true],
  draw: [true],
  endAt: ["nulla ess"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["et d"],
  name: ["nostrud "],
  numberOfGames: [4],
  scheduledAt: ["nost"],
  slug: ["dIKKhu"],
  status: [matchStatus],
  tournamentId: [1],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const matchWinnerType = MatchWinnerType.PLAYER;

const search: SearchOverBrackets = {
  matchType: matchType,
  name: "pariat",
  slug: "6MujqX8YF3",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugBrackets(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_tournaments_tournamentIdOrSlug_matches

List matches for the given tournament

- HTTP Method: `GET`
- Endpoint: `/tournaments/{tournament_id_or_slug}/matches`

**Parameters**

| Name               | Type                                                  | Required | Description                                                                                                                                         |
| :----------------- | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug                                                                                                                             |
| filter             | [FilterOverMatches](../models/FilterOverMatches.md)   | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range              | [RangeOverMatches](../models/RangeOverMatches.md)     | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort               | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search             | [SearchOverMatches](../models/SearchOverMatches.md)   | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page               | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage            | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, TournamentIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 4;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameIdOrSlug = VideogameId._1;;

const filterOverMatchesVideogameTitle = 4;

const filterOverMatchesVideogameVersion = "54.99205.442619";

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const filter: FilterOverMatches = {
  beginAt: ["ad non"],
  detailedStats: true,
  draw: true,
  endAt: ["repr"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["deser"],
  name: ["in labore t"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["quis conse"],
  serieId: [10],
  slug: ["JMIjc H"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const range: RangeOverMatches = {
  beginAt: ["ve"],
  detailedStats: [true],
  draw: [true],
  endAt: ["irure conse"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["adipisici"],
  name: ["pariatur m"],
  numberOfGames: [2],
  scheduledAt: ["al"],
  slug: ["on"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const matchWinnerType = MatchWinnerType.PLAYER;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "Duis fug",
  slug: "7jRFdQQ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugMatches(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_tournaments_tournamentIdOrSlug_rosters

List participants (player or team) for a given tournament.

- HTTP Method: `GET`
- Endpoint: `/tournaments/{tournament_id_or_slug}/rosters`

**Parameters**

| Name               | Type                                                  | Required | Description             |
| :----------------- | :---------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug |

**Return Type**

`TournamentRosters`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const tournamentIdOrSlug = 4;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugRosters();

  console.log(data);
})();
```

## get_tournaments_tournamentIdOrSlug_standings

Get the current standings for a given tournament

- HTTP Method: `GET`
- Endpoint: `/tournaments/{tournament_id_or_slug}/standings`

**Parameters**

| Name               | Type                                                  | Required | Description                                                          |
| :----------------- | :---------------------------------------------------- | :------- | :------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug                                              |
| page               | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage            | number                                                | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`Standing[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 4;
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugStandings(
  ,
  {
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_tournaments_tournamentIdOrSlug_teams

List teams for the given tournament

- HTTP Method: `GET`
- Endpoint: `/tournaments/{tournament_id_or_slug}/teams`

**Parameters**

| Name               | Type                                                  | Required | Description                                                                                                                                         |
| :----------------- | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug                                                                                                                             |
| filter             | [FilterOverTeams](../models/FilterOverTeams.md)       | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range              | [RangeOverTeams](../models/RangeOverTeams.md)         | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort               | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search             | [SearchOverTeams](../models/SearchOverTeams.md)       | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page               | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage            | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverTeams, Page, PandascoreClient, RangeOverTeams, SearchOverTeams, TournamentIdOrSlug, VideogameId } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 4;
const videogameId = VideogameId._1;

const filter: FilterOverTeams = {
  acronym: ["tempor do co"],
  id: [4],
  location: ["mollit commodo "],
  modifiedAt: ["cup"],
  name: ["in Lorem"],
  slug: ["cpvt"],
  videogameId: [videogameId]
};

const range: RangeOverTeams = {
  acronym: ["amet nostrud"],
  id: [6],
  location: ["voluptat"],
  modifiedAt: ["dolore eu amet"],
  name: ["in aut"],
  slug: ["96t71"]
};

const search: SearchOverTeams = {
  acronym: "consectetur L",
  location: "sint ex conse",
  name: "ea ullamco l",
  slug: "s9e12o"
};
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugTeams(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
