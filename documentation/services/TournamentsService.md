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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverShortTournaments = {
    beginAt: ['reprehe'],
    detailedStats: true,
    endAt: ['eu i'],
    hasBracket: true,
    id: [1],
    liveSupported: true,
    modifiedAt: ['reprehender'],
    name: ['exeu occaec'],
    prizepool: ['incididunt dolo'],
    serieId: [7],
    slug: ['1jet3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverShortTournaments = {
    beginAt: ['ullamco ut '],
    detailedStats: [true],
    endAt: ['occaecat'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['et occaecat'],
    name: ['ad veniam'],
    prizepool: ['Duisdo Ut ea '],
    serieId: [4],
    slug: ['5ucx7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverShortTournaments = {
    name: 'officia f',
    prizepool: 'Duis ',
    slug: '803',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.tournaments.getTournaments({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverShortTournaments = {
    beginAt: ['reprehe'],
    detailedStats: true,
    endAt: ['eu i'],
    hasBracket: true,
    id: [1],
    liveSupported: true,
    modifiedAt: ['reprehender'],
    name: ['exeu occaec'],
    prizepool: ['incididunt dolo'],
    serieId: [7],
    slug: ['1jet3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverShortTournaments = {
    beginAt: ['ullamco ut '],
    detailedStats: [true],
    endAt: ['occaecat'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['et occaecat'],
    name: ['ad veniam'],
    prizepool: ['Duisdo Ut ea '],
    serieId: [4],
    slug: ['5ucx7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverShortTournaments = {
    name: 'officia f',
    prizepool: 'Duis ',
    slug: '803',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverShortTournaments = {
    beginAt: ['reprehe'],
    detailedStats: true,
    endAt: ['eu i'],
    hasBracket: true,
    id: [1],
    liveSupported: true,
    modifiedAt: ['reprehender'],
    name: ['exeu occaec'],
    prizepool: ['incididunt dolo'],
    serieId: [7],
    slug: ['1jet3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverShortTournaments = {
    beginAt: ['ullamco ut '],
    detailedStats: [true],
    endAt: ['occaecat'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['et occaecat'],
    name: ['ad veniam'],
    prizepool: ['Duisdo Ut ea '],
    serieId: [4],
    slug: ['5ucx7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverShortTournaments = {
    name: 'officia f',
    prizepool: 'Duis ',
    slug: '803',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverShortTournaments = {
    beginAt: ['reprehe'],
    detailedStats: true,
    endAt: ['eu i'],
    hasBracket: true,
    id: [1],
    liveSupported: true,
    modifiedAt: ['reprehender'],
    name: ['exeu occaec'],
    prizepool: ['incididunt dolo'],
    serieId: [7],
    slug: ['1jet3'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverShortTournaments = {
    beginAt: ['ullamco ut '],
    detailedStats: [true],
    endAt: ['occaecat'],
    hasBracket: [true],
    id: [1],
    modifiedAt: ['et occaecat'],
    name: ['ad veniam'],
    prizepool: ['Duisdo Ut ea '],
    serieId: [4],
    slug: ['5ucx7'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverShortTournaments = {
    name: 'officia f',
    prizepool: 'Duis ',
    slug: '803',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsUpcoming({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const tournamentIdOrSlug = 10;

  const { data } = await pandascore.tournaments.getTournamentsTournamentIdOrSlug();

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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverBrackets = {
  beginAt: ["nis"],
  detailedStats: true,
  draw: true,
  endAt: ["id veniam p"],
  forfeit: true,
  id: [9],
  matchType: [matchType],
  modifiedAt: ["Excepteur "],
  name: ["quis ma"],
  numberOfGames: [5],
  scheduledAt: ["dolor"],
  slug: ["qTpBi"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverBrackets = {
  beginAt: ["occaec"],
  detailedStats: [true],
  draw: [true],
  endAt: ["s"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["aliqua deserunt"],
  name: ["in no"],
  numberOfGames: [6],
  scheduledAt: ["in aute"],
  slug: ["8 jEeW_g Q"],
  status: [matchStatus],
  tournamentId: [7],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverBrackets = {
  matchType: matchType,
  name: "amet consectet",
  slug: "UeK",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsTournamentIdOrSlugBrackets(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "657764.975739.16948626";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverMatches = {
  beginAt: ["dolor"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut do ullamco"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["con"],
  name: ["mollit conseq"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sint"],
  serieId: [9],
  slug: ["BfunCxm5-40"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverMatches = {
  beginAt: ["dolore dolor e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eiusmo"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["sint venia"],
  name: ["labore sunt"],
  numberOfGames: [4],
  scheduledAt: ["occaecat n"],
  slug: ["FlKZ"],
  status: [matchStatus],
  tournamentId: [1],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "ut fugiat e",
  slug: "grZ8U",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsTournamentIdOrSlugMatches(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const tournamentIdOrSlug = 10;

  const { data } = await pandascore.tournaments.getTournamentsTournamentIdOrSlugRosters();

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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsTournamentIdOrSlugStandings(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const videogameId = VideogameId.1;

const filter: FilterOverTeams = {
  acronym: ["exercitatio"],
  id: [3],
  location: ["nulla Duis"],
  modifiedAt: ["proide"],
  name: ["Duis dol"],
  slug: ["ge1f18b"],
  videogameId: [videogameId]
};

const range: RangeOverTeams = {
  acronym: ["enimreprehend"],
  id: [2],
  location: ["dolore aut"],
  modifiedAt: ["d"],
  name: ["commodo"],
  slug: ["ky5r5rk49"]
};

const search: SearchOverTeams = {
  acronym: "offici",
  location: "Duis si",
  name: "irure",
  slug: "r2l-397wrlz"
};
const page = 1;

  const { data } = await pandascore.tournaments.getTournamentsTournamentIdOrSlugTeams(
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
