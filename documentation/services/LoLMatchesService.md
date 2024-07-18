# LoLMatchesService

A list of all methods in the `LoLMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                                        |
| :-------------------------------------------------------------- | :------------------------------------------------- |
| [get_lol_matches](#get_lol_matches)                             | List matches for the League of Legends videogame   |
| [get_lol_matches_past](#get_lol_matches_past)                   | List past League of Legends matches                |
| [get_lol_matches_running](#get_lol_matches_running)             | List running League of Legends matches             |
| [get_lol_matches_upcoming](#get_lol_matches_upcoming)           | List upcoming League of Legends matches            |
| [get_lol_matches_matchIdOrSlug](#get_lol_matches_matchidorslug) | Get a single League of Legends match by ID or slug |

## get_lol_matches

List matches for the League of Legends videogame

- HTTP Method: `GET`
- Endpoint: `/lol/matches`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLMatches](../models/FilterOverLoLMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLMatches](../models/RangeOverLoLMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLMatches](../models/SearchOverLoLMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLoLMatchesVideogameTitle = 9;

const filterOverLoLMatchesVideogameVersion = "076677.94865001934.580355685";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["nisi e"],
  detailedStats: true,
  draw: true,
  endAt: ["deserun"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [10],
  matchType: [matchType],
  modifiedAt: ["laborum "],
  name: ["sint velit"],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["Duis Lorem"],
  serieId: [1],
  slug: ["rki"],
  status: [matchStatus],
  tournamentId: [6],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["occaecat"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit est"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["labori"],
  name: ["cillum"],
  numberOfGames: [6],
  scheduledAt: ["ad dolor qu"],
  slug: ["XMb"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "etocc",
  slug: "WYcNZudjm l",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLMatches.getLolMatches(
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

## get_lol_matches_past

List past League of Legends matches

- HTTP Method: `GET`
- Endpoint: `/lol/matches/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLMatches](../models/FilterOverLoLMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLMatches](../models/RangeOverLoLMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLMatches](../models/SearchOverLoLMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLoLMatchesVideogameTitle = 9;

const filterOverLoLMatchesVideogameVersion = "076677.94865001934.580355685";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["nisi e"],
  detailedStats: true,
  draw: true,
  endAt: ["deserun"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [10],
  matchType: [matchType],
  modifiedAt: ["laborum "],
  name: ["sint velit"],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["Duis Lorem"],
  serieId: [1],
  slug: ["rki"],
  status: [matchStatus],
  tournamentId: [6],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["occaecat"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit est"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["labori"],
  name: ["cillum"],
  numberOfGames: [6],
  scheduledAt: ["ad dolor qu"],
  slug: ["XMb"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "etocc",
  slug: "WYcNZudjm l",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLMatches.getLolMatchesPast(
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

## get_lol_matches_running

List running League of Legends matches

- HTTP Method: `GET`
- Endpoint: `/lol/matches/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLMatches](../models/FilterOverLoLMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLMatches](../models/RangeOverLoLMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLMatches](../models/SearchOverLoLMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLoLMatchesVideogameTitle = 9;

const filterOverLoLMatchesVideogameVersion = "076677.94865001934.580355685";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["nisi e"],
  detailedStats: true,
  draw: true,
  endAt: ["deserun"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [10],
  matchType: [matchType],
  modifiedAt: ["laborum "],
  name: ["sint velit"],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["Duis Lorem"],
  serieId: [1],
  slug: ["rki"],
  status: [matchStatus],
  tournamentId: [6],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["occaecat"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit est"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["labori"],
  name: ["cillum"],
  numberOfGames: [6],
  scheduledAt: ["ad dolor qu"],
  slug: ["XMb"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "etocc",
  slug: "WYcNZudjm l",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLMatches.getLolMatchesRunning(
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

## get_lol_matches_upcoming

List upcoming League of Legends matches

- HTTP Method: `GET`
- Endpoint: `/lol/matches/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLMatches](../models/FilterOverLoLMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLMatches](../models/RangeOverLoLMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLMatches](../models/SearchOverLoLMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLoLMatchesVideogameTitle = 9;

const filterOverLoLMatchesVideogameVersion = "076677.94865001934.580355685";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["nisi e"],
  detailedStats: true,
  draw: true,
  endAt: ["deserun"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [10],
  matchType: [matchType],
  modifiedAt: ["laborum "],
  name: ["sint velit"],
  notStarted: true,
  numberOfGames: [123],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["Duis Lorem"],
  serieId: [1],
  slug: ["rki"],
  status: [matchStatus],
  tournamentId: [6],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["occaecat"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit est"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["labori"],
  name: ["cillum"],
  numberOfGames: [6],
  scheduledAt: ["ad dolor qu"],
  slug: ["XMb"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "etocc",
  slug: "WYcNZudjm l",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLMatches.getLolMatchesUpcoming(
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

## get_lol_matches_matchIdOrSlug

Get a single League of Legends match by ID or slug

- HTTP Method: `GET`
- Endpoint: `/lol/matches/{match_id_or_slug}`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`LoLMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 5;

  const { data } = await pandascoreClient.loLMatches.getLolMatchesMatchIdOrSlug();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
