# StarCraftBroodWarMatchesService

A list of all methods in the `StarCraftBroodWarMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description                                        |
| :------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [get_starcraft_brood_war_matches](#get_starcraft_brood_war_matches)                   | List matches for the StarCraft Brood War videogame |
| [get_starcraft_brood_war_matches_past](#get_starcraft_brood_war_matches_past)         | List past StarCraft Brood War matches              |
| [get_starcraft_brood_war_matches_running](#get_starcraft_brood_war_matches_running)   | List running StarCraft Brood War matches           |
| [get_starcraft_brood_war_matches_upcoming](#get_starcraft_brood_war_matches_upcoming) | List upcoming StarCraft Brood War matches          |

## get_starcraft_brood_war_matches

List matches for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraftBroodWarMatchesVideogameTitle = 7;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "36795.89.22961879";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["eu exe"],
  detailedStats: true,
  draw: true,
  endAt: ["irure lab"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["exercita"],
  name: ["Lorem "],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed culpa la"],
  serieId: [3],
  slug: ["UDtH"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["Duis incididu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ex do cupi"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["aliqu"],
  name: ["in no"],
  numberOfGames: [123],
  scheduledAt: ["elit nisi"],
  slug: ["EZr49Ap-"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "dolor ut enim",
  slug: "KpN_Jh",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatches(
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

## get_starcraft_brood_war_matches_past

List past StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/past`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraftBroodWarMatchesVideogameTitle = 7;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "36795.89.22961879";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["eu exe"],
  detailedStats: true,
  draw: true,
  endAt: ["irure lab"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["exercita"],
  name: ["Lorem "],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed culpa la"],
  serieId: [3],
  slug: ["UDtH"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["Duis incididu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ex do cupi"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["aliqu"],
  name: ["in no"],
  numberOfGames: [123],
  scheduledAt: ["elit nisi"],
  slug: ["EZr49Ap-"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "dolor ut enim",
  slug: "KpN_Jh",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatchesPast(
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

## get_starcraft_brood_war_matches_running

List running StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/running`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraftBroodWarMatchesVideogameTitle = 7;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "36795.89.22961879";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["eu exe"],
  detailedStats: true,
  draw: true,
  endAt: ["irure lab"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["exercita"],
  name: ["Lorem "],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed culpa la"],
  serieId: [3],
  slug: ["UDtH"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["Duis incididu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ex do cupi"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["aliqu"],
  name: ["in no"],
  numberOfGames: [123],
  scheduledAt: ["elit nisi"],
  slug: ["EZr49Ap-"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "dolor ut enim",
  slug: "KpN_Jh",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatchesRunning(
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

## get_starcraft_brood_war_matches_upcoming

List upcoming StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/upcoming`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraftBroodWarMatchesVideogameTitle = 7;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "36795.89.22961879";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["eu exe"],
  detailedStats: true,
  draw: true,
  endAt: ["irure lab"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [1],
  matchType: [matchType],
  modifiedAt: ["exercita"],
  name: ["Lorem "],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed culpa la"],
  serieId: [3],
  slug: ["UDtH"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["Duis incididu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ex do cupi"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["aliqu"],
  name: ["in no"],
  numberOfGames: [123],
  scheduledAt: ["elit nisi"],
  slug: ["EZr49Ap-"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "dolor ut enim",
  slug: "KpN_Jh",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatchesUpcoming(
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
