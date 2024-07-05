# CsgoGame

**Properties**

| Name          | Type               | Required | Description                                                                         |
| :------------ | :----------------- | :------- | :---------------------------------------------------------------------------------- |
| beginAt       | string             | ✅       | The game begin time, UTC. <br/>`null` when the game status is `not_started`         |
| complete      | boolean            | ✅       | Whether When `true`, the game statistics are complete and will not be updated again |
| detailedStats | boolean            | ✅       | Whether historical data is available for the game                                   |
| endAt         | string             | ✅       | The game end time, UTC. <br/>`null` when the game status is not `finished`          |
| finished      | boolean            | ✅       | Whether the game is finished                                                        |
| forfeit       | boolean            | ✅       | Whether the game has been forfeited                                                 |
| id            | number             | ✅       | Counter-Strike game ID                                                              |
| length        | number             | ✅       | Duration of the game in seconds. <br/>`null` when the game status is not `finished` |
| map           | CsgoGameMap        | ✅       |                                                                                     |
| match         | FullGameMatch      | ✅       | A match                                                                             |
| matchId       | number             | ✅       |                                                                                     |
| players       | CsgoGamePlayer[]   | ✅       |                                                                                     |
| position      | number             | ✅       | Game position in the match. Starts at 1                                             |
| rounds        | CsgoRound[]        | ✅       |                                                                                     |
| roundsScore   | CsgoRoundsScore[]  | ✅       |                                                                                     |
| status        | GameStatus         | ✅       | The game status                                                                     |
| teams         | BaseTeam[]         | ✅       |                                                                                     |
| winner        | GameWinner         | ✅       |                                                                                     |
| winnerType    | CsgoGameWinnerType | ✅       |                                                                                     |

# CsgoGameMap

**Properties**

| Name     | Type   | Required | Description                          |
| :------- | :----- | :------- | :----------------------------------- |
| id       | number | ✅       | The ID of the map.                   |
| imageUrl | string | ✅       | A URL to the image of the map.       |
| name     | string | ✅       | The name of the map.                 |
| slug     | string | ✅       | Human-readable identifier of the map |

# CsgoGameWinnerType

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| Player | string | ✅       | "Player"    |
| Team   | string | ✅       | "Team"      |
