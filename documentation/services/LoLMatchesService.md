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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverLoLMatchesVideogameTitle = 1;

const filterOverLoLMatchesVideogameVersion = "936417967.301.42";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["Ut"],
  detailedStats: true,
  draw: true,
  endAt: ["aliq"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["dolor iru"],
  name: ["ut in repreh"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor sunt"],
  serieId: [5],
  slug: ["lk"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["ullamco ea"],
  detailedStats: [true],
  draw: [true],
  endAt: ["pariat"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sint anim "],
  name: ["Duis in et"],
  numberOfGames: [123],
  scheduledAt: ["magna a"],
  slug: ["l5R6YvV2PWZ"],
  status: [matchStatus],
  tournamentId: [6],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "velit",
  slug: "az",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.loLMatches.getLolMatches(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverLoLMatchesVideogameTitle = 1;

const filterOverLoLMatchesVideogameVersion = "936417967.301.42";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["Ut"],
  detailedStats: true,
  draw: true,
  endAt: ["aliq"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["dolor iru"],
  name: ["ut in repreh"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor sunt"],
  serieId: [5],
  slug: ["lk"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["ullamco ea"],
  detailedStats: [true],
  draw: [true],
  endAt: ["pariat"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sint anim "],
  name: ["Duis in et"],
  numberOfGames: [123],
  scheduledAt: ["magna a"],
  slug: ["l5R6YvV2PWZ"],
  status: [matchStatus],
  tournamentId: [6],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "velit",
  slug: "az",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.loLMatches.getLolMatchesPast(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverLoLMatchesVideogameTitle = 1;

const filterOverLoLMatchesVideogameVersion = "936417967.301.42";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["Ut"],
  detailedStats: true,
  draw: true,
  endAt: ["aliq"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["dolor iru"],
  name: ["ut in repreh"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor sunt"],
  serieId: [5],
  slug: ["lk"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["ullamco ea"],
  detailedStats: [true],
  draw: [true],
  endAt: ["pariat"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sint anim "],
  name: ["Duis in et"],
  numberOfGames: [123],
  scheduledAt: ["magna a"],
  slug: ["l5R6YvV2PWZ"],
  status: [matchStatus],
  tournamentId: [6],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "velit",
  slug: "az",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.loLMatches.getLolMatchesRunning(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverLoLMatchesVideogameTitle = 1;

const filterOverLoLMatchesVideogameVersion = "936417967.301.42";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLoLMatches = {
  beginAt: ["Ut"],
  detailedStats: true,
  draw: true,
  endAt: ["aliq"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["dolor iru"],
  name: ["ut in repreh"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverLoLMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor sunt"],
  serieId: [5],
  slug: ["lk"],
  status: [matchStatus],
  tournamentId: [9],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLoLMatchesVideogameTitle],
  videogameVersion: [filterOverLoLMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLoLMatches = {
  beginAt: ["ullamco ea"],
  detailedStats: [true],
  draw: [true],
  endAt: ["pariat"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sint anim "],
  name: ["Duis in et"],
  numberOfGames: [123],
  scheduledAt: ["magna a"],
  slug: ["l5R6YvV2PWZ"],
  status: [matchStatus],
  tournamentId: [6],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLoLMatches = {
  matchType: matchType,
  name: "velit",
  slug: "az",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.loLMatches.getLolMatchesUpcoming(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 6;

  const { data } = await pandascore.loLMatches.getLolMatchesMatchIdOrSlug();

  console.log(data);
})();
```
