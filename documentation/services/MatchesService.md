# MatchesService

A list of all methods in the `MatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                                          |
| :-------------------------------------------------------------------------- | :--------------------------------------------------- |
| [get_matches](#get_matches)                                                 | List matches                                         |
| [get_matches_past](#get_matches_past)                                       | List past matches                                    |
| [get_matches_running](#get_matches_running)                                 | List currently running matches                       |
| [get_matches_upcoming](#get_matches_upcoming)                               | List upcoming matches                                |
| [get_matches_matchIdOrSlug](#get_matches_matchidorslug)                     | Get a single match by ID or by slug                  |
| [get_matches_matchIdOrSlug_opponents](#get_matches_matchidorslug_opponents) | List opponents (player or teams) for the given match |

## get_matches

List matches

- HTTP Method: `GET`
- Endpoint: `/matches`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const { data } = await pandascore.matches.getMatches(
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

## get_matches_past

List past matches

- HTTP Method: `GET`
- Endpoint: `/matches/past`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const { data } = await pandascore.matches.getMatchesPast(
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

## get_matches_running

List currently running matches

- HTTP Method: `GET`
- Endpoint: `/matches/running`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const { data } = await pandascore.matches.getMatchesRunning(
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

## get_matches_upcoming

List upcoming matches

- HTTP Method: `GET`
- Endpoint: `/matches/upcoming`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const { data } = await pandascore.matches.getMatchesUpcoming(
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

## get_matches_matchIdOrSlug

Get a single match by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/matches/{match_id_or_slug}`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`Match`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 6;

  const { data } = await pandascore.matches.getMatchesMatchIdOrSlug();

  console.log(data);
})();
```

## get_matches_matchIdOrSlug_opponents

List opponents (player or teams) for the given match

- HTTP Method: `GET`
- Endpoint: `/matches/{match_id_or_slug}/opponents`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`MatchOpponentsObject`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 6;

  const { data } = await pandascore.matches.getMatchesMatchIdOrSlugOpponents();

  console.log(data);
})();
```
