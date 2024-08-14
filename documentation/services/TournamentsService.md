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

  const filterOverShortTournamentsVideogameTitle = 5;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverShortTournaments: FilterOverShortTournaments = {
    beginAt: ['pariat'],
    detailedStats: true,
    endAt: ['eli'],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['cillu'],
    name: ['Excepteur do'],
    prizepool: ['in ut veniam '],
    serieId: [10],
    slug: ['z160_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverShortTournaments: RangeOverShortTournaments = {
    beginAt: ['et'],
    detailedStats: [true],
    endAt: ['commo'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['nul'],
    name: ['enim '],
    prizepool: ['qui ull'],
    serieId: [3],
    slug: ['vyokv'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverShortTournaments: SearchOverShortTournaments = {
    name: 'sunt minim',
    prizepool: 'utid magna es',
    slug: '50l9n',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournaments({
    filter: filterOverShortTournaments,
    range: rangeOverShortTournaments,
    sort: [[]],
    search: searchOverShortTournaments,
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

  const filterOverShortTournamentsVideogameTitle = 5;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverShortTournaments: FilterOverShortTournaments = {
    beginAt: ['pariat'],
    detailedStats: true,
    endAt: ['eli'],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['cillu'],
    name: ['Excepteur do'],
    prizepool: ['in ut veniam '],
    serieId: [10],
    slug: ['z160_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverShortTournaments: RangeOverShortTournaments = {
    beginAt: ['et'],
    detailedStats: [true],
    endAt: ['commo'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['nul'],
    name: ['enim '],
    prizepool: ['qui ull'],
    serieId: [3],
    slug: ['vyokv'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverShortTournaments: SearchOverShortTournaments = {
    name: 'sunt minim',
    prizepool: 'utid magna es',
    slug: '50l9n',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsPast({
    filter: filterOverShortTournaments,
    range: rangeOverShortTournaments,
    sort: [[]],
    search: searchOverShortTournaments,
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

  const filterOverShortTournamentsVideogameTitle = 5;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverShortTournaments: FilterOverShortTournaments = {
    beginAt: ['pariat'],
    detailedStats: true,
    endAt: ['eli'],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['cillu'],
    name: ['Excepteur do'],
    prizepool: ['in ut veniam '],
    serieId: [10],
    slug: ['z160_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverShortTournaments: RangeOverShortTournaments = {
    beginAt: ['et'],
    detailedStats: [true],
    endAt: ['commo'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['nul'],
    name: ['enim '],
    prizepool: ['qui ull'],
    serieId: [3],
    slug: ['vyokv'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverShortTournaments: SearchOverShortTournaments = {
    name: 'sunt minim',
    prizepool: 'utid magna es',
    slug: '50l9n',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsRunning({
    filter: filterOverShortTournaments,
    range: rangeOverShortTournaments,
    sort: [[]],
    search: searchOverShortTournaments,
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

  const filterOverShortTournamentsVideogameTitle = 5;

  const opponentId = 7;

  const opponentType = OpponentType.PLAYER;

  const filterOverShortTournaments: FilterOverShortTournaments = {
    beginAt: ['pariat'],
    detailedStats: true,
    endAt: ['eli'],
    hasBracket: true,
    id: [4],
    liveSupported: true,
    modifiedAt: ['cillu'],
    name: ['Excepteur do'],
    prizepool: ['in ut veniam '],
    serieId: [10],
    slug: ['z160_'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId1 = 7;

  const opponentType1 = OpponentType.PLAYER;

  const rangeOverShortTournaments: RangeOverShortTournaments = {
    beginAt: ['et'],
    detailedStats: [true],
    endAt: ['commo'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['nul'],
    name: ['enim '],
    prizepool: ['qui ull'],
    serieId: [3],
    slug: ['vyokv'],
    tier: [searchOverValorantShortTournamentsTier21],
    winnerId: [opponentId1],
    winnerType: [opponentType1],
  };
  const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType12 = OpponentType.PLAYER;

  const searchOverShortTournaments: SearchOverShortTournaments = {
    name: 'sunt minim',
    prizepool: 'utid magna es',
    slug: '50l9n',
    tier: searchOverValorantShortTournamentsTier212,
    winnerType: opponentType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsUpcoming({
    filter: filterOverShortTournaments,
    range: rangeOverShortTournaments,
    sort: [[]],
    search: searchOverShortTournaments,
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

  const tournamentIdOrSlug = 2;

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
import { FilterOverBrackets, MatchStatus, MatchType, MatchWinnerType, Page, PandascoreClient, RangeOverBrackets, SearchOverBrackets, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 2;
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.PLAYER;

const filterOverBrackets: FilterOverBrackets = {
  beginAt: ["velit dolor "],
  detailedStats: true,
  draw: true,
  endAt: ["elit "],
  forfeit: true,
  id: [1],
  matchType: [matchType],
  modifiedAt: ["irure id"],
  name: ["nostrud ex "],
  numberOfGames: [123],
  scheduledAt: ["tempor ut qui "],
  slug: ["e HEgmFUZPl"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType1 = MatchType.ALLGAMESPLAYED;

const matchStatus1 = MatchStatus.CANCELED;

const opponentId1 = 7;

const matchWinnerType1 = MatchWinnerType.PLAYER;

const rangeOverBrackets: RangeOverBrackets = {
  beginAt: ["tem"],
  detailedStats: [true],
  draw: [true],
  endAt: ["irure an"],
  forfeit: [true],
  id: [4],
  matchType: [matchType1],
  modifiedAt: ["labore n"],
  name: ["mollit nulla"],
  numberOfGames: [123],
  scheduledAt: ["in volupta"],
  slug: ["-"],
  status: [matchStatus1],
  tournamentId: [7],
  winnerId: [opponentId1],
  winnerType: [matchWinnerType1]
};
const matchType12 = MatchType.ALLGAMESPLAYED;

const matchStatus12 = MatchStatus.CANCELED;

const matchWinnerType12 = MatchWinnerType.PLAYER;

const searchOverBrackets: SearchOverBrackets = {
  matchType: matchType12,
  name: "quiscon",
  slug: "EvVWpSZ",
  status: matchStatus12,
  winnerType: matchWinnerType12
};
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugBrackets(
  ,
  {
		filter: filterOverBrackets,
		range: rangeOverBrackets,
    sort: [[]],
		search: searchOverBrackets,
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
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, Page, PandascoreClient, RangeOverMatches, SearchOverMatches, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 2;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameId = VideogameId._1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "1125897835.45";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.PLAYER;

const filterOverMatches: FilterOverMatches = {
  beginAt: ["ani"],
  detailedStats: true,
  draw: true,
  endAt: ["ad ut com"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["aute sit"],
  name: ["exercitation te"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["esse aute n"],
  serieId: [10],
  slug: ["HiGqjR9"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType1 = MatchType.ALLGAMESPLAYED;

const matchStatus1 = MatchStatus.CANCELED;

const opponentId1 = 7;

const matchWinnerType1 = MatchWinnerType.PLAYER;

const rangeOverMatches: RangeOverMatches = {
  beginAt: ["al"],
  detailedStats: [true],
  draw: [true],
  endAt: ["do d"],
  forfeit: [true],
  id: [6],
  matchType: [matchType1],
  modifiedAt: ["dolore ve"],
  name: ["dolore "],
  numberOfGames: [10],
  scheduledAt: ["nisi sed aut"],
  slug: ["bAjOZ"],
  status: [matchStatus1],
  tournamentId: [3],
  winnerId: [opponentId1],
  winnerType: [matchWinnerType1]
};
const matchType12 = MatchType.ALLGAMESPLAYED;

const matchStatus12 = MatchStatus.CANCELED;

const matchWinnerType12 = MatchWinnerType.PLAYER;

const searchOverMatches: SearchOverMatches = {
  matchType: matchType12,
  name: "nulla veniam ",
  slug: "WfL1ZPQ",
  status: matchStatus12,
  winnerType: matchWinnerType12
};
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugMatches(
  ,
  {
		filter: filterOverMatches,
		range: rangeOverMatches,
    sort: [[]],
		search: searchOverMatches,
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

  const tournamentIdOrSlug = 2;

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

  const tournamentIdOrSlug = 2;
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

  const tournamentIdOrSlug = 2;
const videogameId = VideogameId._1;

const filterOverTeams: FilterOverTeams = {
  acronym: ["qui dolore"],
  id: [9],
  location: ["in reprehende"],
  modifiedAt: ["elit"],
  name: ["deserunt conse"],
  slug: ["_pbld"],
  videogameId: [videogameId]
};

const rangeOverTeams: RangeOverTeams = {
  acronym: ["nulla adipis"],
  id: [6],
  location: ["amet comm"],
  modifiedAt: ["non"],
  name: ["adipisicing"],
  slug: ["b48hhqy"]
};

const searchOverTeams: SearchOverTeams = {
  acronym: "exercit",
  location: "est L",
  name: "culpa Duis t",
  slug: "f"
};
const page = 1;

  const { data } = await pandascoreClient.tournaments.getTournamentsTournamentIdOrSlugTeams(
  ,
  {
		filter: filterOverTeams,
		range: rangeOverTeams,
    sort: [[]],
		search: searchOverTeams,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
