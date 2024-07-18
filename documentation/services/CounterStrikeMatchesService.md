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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 4;

const filterOverCsgoMatchesVideogameVersion = "46404802.4461.3142";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["incidi"],
  detailedStats: true,
  draw: true,
  endAt: ["exercita"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliqua"],
  name: ["aliquip eius"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["voluptate adipi"],
  serieId: [5],
  slug: ["kid"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["incididunt ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["in ex aute"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["do"],
  name: ["adipisici"],
  numberOfGames: [123],
  scheduledAt: ["dolor Ut"],
  slug: ["R37RucjN7s"],
  status: [matchStatus],
  tournamentId: [4],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "aliqua anim",
  slug: "x6lAktgCkB",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.counterStrikeMatches.getCsgoMatches(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 4;

const filterOverCsgoMatchesVideogameVersion = "46404802.4461.3142";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["incidi"],
  detailedStats: true,
  draw: true,
  endAt: ["exercita"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliqua"],
  name: ["aliquip eius"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["voluptate adipi"],
  serieId: [5],
  slug: ["kid"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["incididunt ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["in ex aute"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["do"],
  name: ["adipisici"],
  numberOfGames: [123],
  scheduledAt: ["dolor Ut"],
  slug: ["R37RucjN7s"],
  status: [matchStatus],
  tournamentId: [4],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "aliqua anim",
  slug: "x6lAktgCkB",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.counterStrikeMatches.getCsgoMatchesPast(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 4;

const filterOverCsgoMatchesVideogameVersion = "46404802.4461.3142";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["incidi"],
  detailedStats: true,
  draw: true,
  endAt: ["exercita"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliqua"],
  name: ["aliquip eius"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["voluptate adipi"],
  serieId: [5],
  slug: ["kid"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["incididunt ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["in ex aute"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["do"],
  name: ["adipisici"],
  numberOfGames: [123],
  scheduledAt: ["dolor Ut"],
  slug: ["R37RucjN7s"],
  status: [matchStatus],
  tournamentId: [4],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "aliqua anim",
  slug: "x6lAktgCkB",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.counterStrikeMatches.getCsgoMatchesRunning(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverCsgoMatchesVideogameTitle = 4;

const filterOverCsgoMatchesVideogameVersion = "46404802.4461.3142";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverCsgoMatches = {
  beginAt: ["incidi"],
  detailedStats: true,
  draw: true,
  endAt: ["exercita"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliqua"],
  name: ["aliquip eius"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverCsgoMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["voluptate adipi"],
  serieId: [5],
  slug: ["kid"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverCsgoMatchesVideogameTitle],
  videogameVersion: [filterOverCsgoMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverCsgoMatches = {
  beginAt: ["incididunt ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["in ex aute"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["do"],
  name: ["adipisici"],
  numberOfGames: [123],
  scheduledAt: ["dolor Ut"],
  slug: ["R37RucjN7s"],
  status: [matchStatus],
  tournamentId: [4],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverCsgoMatches = {
  matchType: matchType,
  name: "aliqua anim",
  slug: "x6lAktgCkB",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.counterStrikeMatches.getCsgoMatchesUpcoming(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 5;

  const { data } = await pandascoreClient.counterStrikeMatches.getCsgoMatchesMatchIdOrSlug();

  console.log(data);
})();
```
