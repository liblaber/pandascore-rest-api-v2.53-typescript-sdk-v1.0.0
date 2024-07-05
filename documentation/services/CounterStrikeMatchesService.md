# CounterStrikeMatchesService

A list of all methods in the `CounterStrikeMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                                     |
| :---------------------------------------------------------------- | :---------------------------------------------- |
| [get_csgo_matches](#get_csgo_matches)                             | List matches for the Counter-Strike videogame   |
| [get_csgo_matches_past](#get_csgo_matches_past)                   | List past Counter-Strike matches                |
| [get_csgo_matches_running](#get_csgo_matches_running)             | List running Counter-Strike matches             |
| [get_csgo_matches_upcoming](#get_csgo_matches_upcoming)           | List upcoming Counter-Strike matches            |
| [get_csgo_matches_matchIdOrSlug](#get_csgo_matches_matchidorslug) | Get a single Counter-Strike match by ID or slug |

## get_csgo_matches

List matches for the Counter-Strike videogame

- HTTP Method: `GET`
- Endpoint: `/csgo/matches`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoMatches](../models/FilterOverCsgoMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoMatches](../models/RangeOverCsgoMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoMatches](../models/SearchOverCsgoMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 9;

const filterOverCsgoMatchesVideogameVersion = "22784.7475613843";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["in cupidata"],
  detailedStats: true,
  draw: true,
  endAt: ["conse"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["ma"],
  name: ["veniam c"],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cillu"],
  serieId: [1],
  slug: ["p"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["laborum do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor e"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["proident eu "],
  name: ["ut dolor"],
  numberOfGames: [7],
  scheduledAt: ["voluptate"],
  slug: ["BaMl"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "consequat",
  slug: "hnLrlT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.counterStrikeMatches.getCsgoMatches(
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

## get_csgo_matches_past

List past Counter-Strike matches

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/past`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoMatches](../models/FilterOverCsgoMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoMatches](../models/RangeOverCsgoMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoMatches](../models/SearchOverCsgoMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 9;

const filterOverCsgoMatchesVideogameVersion = "22784.7475613843";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["in cupidata"],
  detailedStats: true,
  draw: true,
  endAt: ["conse"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["ma"],
  name: ["veniam c"],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cillu"],
  serieId: [1],
  slug: ["p"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["laborum do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor e"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["proident eu "],
  name: ["ut dolor"],
  numberOfGames: [7],
  scheduledAt: ["voluptate"],
  slug: ["BaMl"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "consequat",
  slug: "hnLrlT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.counterStrikeMatches.getCsgoMatchesPast(
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

## get_csgo_matches_running

List running Counter-Strike matches

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/running`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoMatches](../models/FilterOverCsgoMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoMatches](../models/RangeOverCsgoMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoMatches](../models/SearchOverCsgoMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 9;

const filterOverCsgoMatchesVideogameVersion = "22784.7475613843";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["in cupidata"],
  detailedStats: true,
  draw: true,
  endAt: ["conse"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["ma"],
  name: ["veniam c"],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cillu"],
  serieId: [1],
  slug: ["p"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["laborum do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor e"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["proident eu "],
  name: ["ut dolor"],
  numberOfGames: [7],
  scheduledAt: ["voluptate"],
  slug: ["BaMl"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "consequat",
  slug: "hnLrlT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.counterStrikeMatches.getCsgoMatchesRunning(
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

## get_csgo_matches_upcoming

List upcoming Counter-Strike matches

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/upcoming`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoMatches](../models/FilterOverCsgoMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoMatches](../models/RangeOverCsgoMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoMatches](../models/SearchOverCsgoMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 9;

const filterOverCsgoMatchesVideogameVersion = "22784.7475613843";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["in cupidata"],
  detailedStats: true,
  draw: true,
  endAt: ["conse"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["ma"],
  name: ["veniam c"],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cillu"],
  serieId: [1],
  slug: ["p"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["laborum do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor e"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["proident eu "],
  name: ["ut dolor"],
  numberOfGames: [7],
  scheduledAt: ["voluptate"],
  slug: ["BaMl"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "consequat",
  slug: "hnLrlT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.counterStrikeMatches.getCsgoMatchesUpcoming(
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

## get_csgo_matches_matchIdOrSlug

Get a single Counter-Strike match by ID or slug

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/{match_id_or_slug}`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`CsgoMatch`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 6;

  const { data } = await pandascore.counterStrikeMatches.getCsgoMatchesMatchIdOrSlug();

  console.log(data);
})();
```
