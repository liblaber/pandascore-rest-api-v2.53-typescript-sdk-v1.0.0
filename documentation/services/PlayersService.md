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
import {
  FilterOverPlayers,
  Page,
  PandascoreClient,
  RangeOverPlayers,
  SearchOverPlayers,
  VideogameId,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const videogameId = VideogameId._1;

  const filter: FilterOverPlayers = {
    active: true,
    birthday: ['dolor nisi '],
    firstName: ['eiusmod lab'],
    id: [7],
    lastName: ['nostrud'],
    modifiedAt: ['ipsum an'],
    name: ['consequat '],
    nationality: ['Lorem dolor lab'],
    role: ['ut aute sint '],
    slug: ['ynw'],
    teamId: [4],
    videogameId: [videogameId],
  };

  const range: RangeOverPlayers = {
    birthday: ['Excep'],
    firstName: ['adipisicing'],
    id: [10],
    lastName: ['dolor i'],
    modifiedAt: ['ut Ut in'],
    name: ['culpa'],
    nationality: ['do ipsum labor'],
    role: ['laboris aute'],
    slug: ['1h-2'],
  };

  const search: SearchOverPlayers = {
    birthday: 'inull',
    firstName: 'et nulla',
    lastName: 'nostru',
    name: 'repre',
    nationality: 'ametirure es',
    role: 'ea sunt ',
    slug: 'fkl011unb',
  };
  const page = 1;

  const { data } = await pandascoreClient.players.getPlayers({
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
import { PandascoreClient, PlayerIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const playerIdOrSlug = 3;

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
import { FilterOverLeagues, Page, PandascoreClient, PlayerIdOrSlug, RangeOverLeagues, SearchOverLeagues } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 3;

const filter: FilterOverLeagues = {
  id: [1],
  modifiedAt: ["culpa Except"],
  name: ["id sint adipi"],
  slug: ["fsqr"],
  url: ["fugiat quis"]
};

const range: RangeOverLeagues = {
  id: [5],
  modifiedAt: ["eius"],
  name: ["amet pariatur "],
  slug: ["qbz8gy"],
  url: ["amet m"]
};

const search: SearchOverLeagues = {
  name: "enim minim et",
  slug: "2wv",
  url: "sit es"
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
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 3;
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
import { FilterOverSeries, OpponentId, OpponentType, Page, PandascoreClient, PlayerIdOrSlug, RangeOverSeries, SearchOverSeries } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 3;
const filterOverSeriesVideogameTitle = 8;

const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const filter: FilterOverSeries = {
  beginAt: ["el"],
  endAt: ["dolo"],
  id: [10],
  leagueId: [1],
  modifiedAt: ["adipisic"],
  name: ["et qui reprehe"],
  season: ["ea Dui"],
  slug: ["jinn8"],
  videogameTitle: [filterOverSeriesVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const range: RangeOverSeries = {
  beginAt: ["sun"],
  endAt: ["f"],
  id: [7],
  leagueId: [6],
  modifiedAt: ["cupi"],
  name: ["aliqua in"],
  season: ["Except"],
  slug: ["-"],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentType = OpponentType.PLAYER;

const search: SearchOverSeries = {
  name: "aliquip eu e",
  season: "et officia lab",
  slug: "ai8df",
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
import { FilterOverShortTournaments, OpponentId, OpponentType, Page, PandascoreClient, PlayerIdOrSlug, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2 } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 3;
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const filterOverShortTournamentsVideogameTitle = 2;

const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const filter: FilterOverShortTournaments = {
  beginAt: ["ullamco magn"],
  detailedStats: true,
  endAt: ["mollit occ"],
  hasBracket: true,
  id: [6],
  liveSupported: true,
  modifiedAt: ["dolor sunt ad e"],
  name: ["dolor quis es"],
  prizepool: ["irure "],
  serieId: [4],
  slug: ["l34"],
  tier: [searchOverValorantShortTournamentsTier2],
  videogameTitle: [filterOverShortTournamentsVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const range: RangeOverShortTournaments = {
  beginAt: ["non iru"],
  detailedStats: [true],
  endAt: ["e"],
  hasBracket: [true],
  id: [7],
  modifiedAt: ["la"],
  name: ["minim sit"],
  prizepool: ["pariatur id "],
  serieId: [1],
  slug: ["2aqc93"],
  tier: [searchOverValorantShortTournamentsTier2],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const opponentType = OpponentType.PLAYER;

const search: SearchOverShortTournaments = {
  name: "dolor",
  prizepool: "ullamco",
  slug: "2",
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

<!-- This file was generated by liblab | https://liblab.com/ -->
