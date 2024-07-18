# PlayersService

A list of all methods in the `PlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                                                           | Description                                                                                  |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| [get_players](#get_players)                                                       | List players                                                                                 |
| [get_players_playerIdOrSlug](#get_players_playeridorslug)                         | Get a single player by ID or by slug                                                         |
| [get_players_playerIdOrSlug_leagues](#get_players_playeridorslug_leagues)         | List leagues for the given player. Only leagues from the player's current videogame.         |
| [get_players_playerIdOrSlug_matches](#get_players_playeridorslug_matches)         | List matches for the given player. Only matches from the player's current videogame.         |
| [get_players_playerIdOrSlug_series](#get_players_playeridorslug_series)           | List series for the given player. Only series from the player's current videogame.           |
| [get_players_playerIdOrSlug_tournaments](#get_players_playeridorslug_tournaments) | List tournaments for the given player. Only tournaments from the player's current videogame. |

## get_players

List players

- HTTP Method: `GET`
- Endpoint: `/players`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPlayers](../models/FilterOverPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPlayers](../models/RangeOverPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPlayers](../models/SearchOverPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverPlayers = {
  active: true,
  birthday: ["adipisicin"],
  firstName: ["culpa"],
  id: [6],
  lastName: ["consec"],
  modifiedAt: ["ea"],
  name: ["cupidat"],
  nationality: ["nostrud"],
  role: ["ipsum anim"],
  slug: ["90dzb1"],
  teamId: [3],
  videogameId: [videogameId]
};

const range: RangeOverPlayers = {
  birthday: ["irure "],
  firstName: ["tempor"],
  id: [1],
  lastName: ["enim officia no"],
  modifiedAt: ["aliqua s"],
  name: ["enim ipsum i"],
  nationality: ["dodolore ve"],
  role: ["volupta"],
  slug: ["tnv0"]
};

const search: SearchOverPlayers = {
  birthday: "minim dolor qui",
  firstName: "enim sint proid",
  lastName: "exercitatio",
  name: "et sed proiden",
  nationality: "elit sit",
  role: "magna ",
  slug: "5ts"
};
const page = 1;

  const { data } = await pandascoreClient.players.getPlayers(
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

## get_players_playerIdOrSlug

Get a single player by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/players/{player_id_or_slug}`

**Parameters**

| Name           | Type                                          | Required | Description         |
| :------------- | :-------------------------------------------- | :------- | :------------------ |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug |

**Return Type**

`Player`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const playerIdOrSlug = 9;

  const { data } = await pandascoreClient.players.getPlayersPlayerIdOrSlug();

  console.log(data);
})();
```

## get_players_playerIdOrSlug_leagues

List leagues for the given player. Only leagues from the player's current videogame.

- HTTP Method: `GET`
- Endpoint: `/players/{player_id_or_slug}/leagues`

**Parameters**

| Name           | Type                                                | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)       | ✅       | A player ID or slug                                                                                                                                 |
| filter         | [FilterOverLeagues](../models/FilterOverLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverLeagues](../models/RangeOverLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverLeagues](../models/SearchOverLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 9;

const filter: FilterOverLeagues = {
  id: [7],
  modifiedAt: ["offici"],
  name: ["ad ut"],
  slug: ["p_"],
  url: ["esse aliqu"]
};

const range: RangeOverLeagues = {
  id: [10],
  modifiedAt: ["ut nulla"],
  name: ["ea mol"],
  slug: ["pmjvmw-84d"],
  url: ["ea aliquip"]
};

const search: SearchOverLeagues = {
  name: "Duis dolo",
  slug: "-teig",
  url: "adipisicing"
};
const page = 1;

  const { data } = await pandascoreClient.players.getPlayersPlayerIdOrSlugLeagues(
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

## get_players_playerIdOrSlug_matches

List matches for the given player. Only matches from the player's current videogame.

- HTTP Method: `GET`
- Endpoint: `/players/{player_id_or_slug}/matches`

**Parameters**

| Name           | Type                                                | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)       | ✅       | A player ID or slug                                                                                                                                 |
| filter         | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 9;
const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "1125897835.45";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverMatches = {
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
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverMatches = {
  beginAt: ["al"],
  detailedStats: [true],
  draw: [true],
  endAt: ["do d"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["dolore ve"],
  name: ["dolore "],
  numberOfGames: [10],
  scheduledAt: ["nisi sed aut"],
  slug: ["bAjOZ"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "nulla veniam ",
  slug: "WfL1ZPQ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.players.getPlayersPlayerIdOrSlugMatches(
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

## get_players_playerIdOrSlug_series

List series for the given player. Only series from the player's current videogame.

- HTTP Method: `GET`
- Endpoint: `/players/{player_id_or_slug}/series`

**Parameters**

| Name           | Type                                              | Required | Description                                                                                                                                         |
| :------------- | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)     | ✅       | A player ID or slug                                                                                                                                 |
| filter         | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 9;
const filterOverSeriesVideogameTitle = 7;

const opponentId = 7;

const opponentType = OpponentType.Player;

const filter: FilterOverSeries = {
  beginAt: ["sunt cillum dol"],
  endAt: ["dolor"],
  id: [5],
  leagueId: [7],
  modifiedAt: ["deserunt"],
  name: ["laboris"],
  season: ["proident"],
  slug: ["_9"],
  videogameTitle: [filterOverSeriesVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentId = 7;

const opponentType = OpponentType.Player;

const range: RangeOverSeries = {
  beginAt: ["sint c"],
  endAt: ["ex dolore tempo"],
  id: [6],
  leagueId: [6],
  modifiedAt: ["lab"],
  name: ["animea labore e"],
  season: ["ipsum i"],
  slug: ["8"],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentType = OpponentType.Player;

const search: SearchOverSeries = {
  name: "fugia",
  season: "aute al",
  slug: "cc3u_",
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.players.getPlayersPlayerIdOrSlugSeries(
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

## get_players_playerIdOrSlug_tournaments

List tournaments for the given player. Only tournaments from the player's current videogame.

- HTTP Method: `GET`
- Endpoint: `/players/{player_id_or_slug}/tournaments`

**Parameters**

| Name           | Type                                                                  | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                         | ✅       | A player ID or slug                                                                                                                                 |
| filter         | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 9;
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const filterOverShortTournamentsVideogameTitle = 5;

const opponentId = 7;

const opponentType = OpponentType.Player;

const filter: FilterOverShortTournaments = {
  beginAt: ["pariat"],
  detailedStats: true,
  endAt: ["eli"],
  hasBracket: true,
  id: [4],
  liveSupported: true,
  modifiedAt: ["cillu"],
  name: ["Excepteur do"],
  prizepool: ["in ut veniam "],
  serieId: [10],
  slug: ["z160_"],
  tier: [searchOverValorantShortTournamentsTier2],
  videogameTitle: [filterOverShortTournamentsVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const opponentId = 7;

const opponentType = OpponentType.Player;

const range: RangeOverShortTournaments = {
  beginAt: ["et"],
  detailedStats: [true],
  endAt: ["commo"],
  hasBracket: [true],
  id: [1],
  modifiedAt: ["nul"],
  name: ["enim "],
  prizepool: ["qui ull"],
  serieId: [3],
  slug: ["vyokv"],
  tier: [searchOverValorantShortTournamentsTier2],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const opponentType = OpponentType.Player;

const search: SearchOverShortTournaments = {
  name: "sunt minim",
  prizepool: "utid magna es",
  slug: "50l9n",
  tier: searchOverValorantShortTournamentsTier2,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.players.getPlayersPlayerIdOrSlugTournaments(
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
