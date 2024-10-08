# Tournament

**Properties**

| Name           | Type                     | Required | Description                                                                                                  |
| :------------- | :----------------------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| beginAt        | string                   | ✅       |                                                                                                              |
| detailedStats  | boolean                  | ✅       | Whether the tournament is expected to have detailed statistics available                                     |
| endAt          | string                   | ✅       |                                                                                                              |
| expectedRoster | TournamentRosterItem[]   | ✅       |                                                                                                              |
| hasBracket     | boolean                  | ✅       | Whether the tournament has a bracket                                                                         |
| id             | number                   | ✅       |                                                                                                              |
| league         | BaseLeague               | ✅       |                                                                                                              |
| leagueId       | number                   | ✅       |                                                                                                              |
| liveSupported  | boolean                  | ✅       | Whether live is supported                                                                                    |
| matches        | BaseMatch[]              | ✅       |                                                                                                              |
| modifiedAt     | string                   | ✅       |                                                                                                              |
| name           | string                   | ✅       |                                                                                                              |
| prizepool      | string                   | ✅       |                                                                                                              |
| serie          | BaseSerie                | ✅       |                                                                                                              |
| serieId        | number                   | ✅       |                                                                                                              |
| slug           | string                   | ✅       |                                                                                                              |
| teams          | BaseTeam[]               | ✅       |                                                                                                              |
| tier           | TournamentTier1          | ✅       | The tier of the tournament, ranging from 'S' to 'Unranked'. Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked' |
| videogame      | any                      | ✅       |                                                                                                              |
| videogameTitle | TournamentVideogameTitle | ✅       |                                                                                                              |
| winnerId       | TournamentWinnerId       | ✅       |                                                                                                              |
| winnerType     | TournamentWinnerType     | ✅       |                                                                                                              |

# TournamentTier1

The tier of the tournament, ranging from 'S' to 'Unranked'. Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| A        | string | ✅       | "a"         |
| B        | string | ✅       | "b"         |
| C        | string | ✅       | "c"         |
| D        | string | ✅       | "d"         |
| S        | string | ✅       | "s"         |
| UNRANKED | string | ✅       | "unranked"  |

# TournamentVideogameTitle

**Properties**

| Name        | Type        | Required | Description    |
| :---------- | :---------- | :------- | :------------- |
| id          | number      | ✅       |                |
| name        | string      | ✅       |                |
| slug        | string      | ✅       |                |
| videogameId | VideogameId | ✅       | A videogame ID |

# TournamentWinnerId

# TournamentWinnerType

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PLAYER | string | ✅       | "Player"    |
| TEAM   | string | ✅       | "Team"      |

<!-- This file was generated by liblab | https://liblab.com/ -->
