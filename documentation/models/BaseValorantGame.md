# BaseValorantGame

A game

**Properties**

| Name          | Type                | Required | Description                                                                         |
| :------------ | :------------------ | :------- | :---------------------------------------------------------------------------------- |
| beginAt       | string              | ✅       | The game begin time, UTC. <br/>`null` when the game status is `not_started`         |
| complete      | boolean             | ✅       | Whether When `true`, the game statistics are complete and will not be updated again |
| detailedStats | boolean             | ✅       | Whether historical data is available for the game                                   |
| endAt         | string              | ✅       | The game end time, UTC. <br/>`null` when the game status is not `finished`          |
| finished      | boolean             | ✅       | Whether the game is finished                                                        |
| forfeit       | boolean             | ✅       | Whether the game has been forfeited                                                 |
| id            | number              | ✅       |                                                                                     |
| length        | number              | ✅       | Duration of the game in seconds. <br/>`null` when the game status is not `finished` |
| map           | BaseValorantGameMap | ✅       | An object that represents a Valorant map                                            |
| matchId       | number              | ✅       |                                                                                     |
| position      | number              | ✅       | Game position in the match. Starts at 1                                             |
| rounds        | ValorantGameRound[] | ✅       | Summary of rounds                                                                   |
| status        | GameStatus          | ✅       | The game status                                                                     |
| teams         | ValorantGameTeam[]  | ✅       |                                                                                     |
| winner        | GameWinner          | ✅       |                                                                                     |

# BaseValorantGameMap

An object that represents a Valorant map

**Properties**

| Name              | Type     | Required | Description                                                     |
| :---------------- | :------- | :------- | :-------------------------------------------------------------- |
| id                | number   | ✅       | ID of the map                                                   |
| imageUrl          | string   | ✅       | URL to an image of the map                                      |
| name              | string   | ✅       | Name of the map                                                 |
| slug              | string   | ✅       | Human-readable identifier of the map                            |
| videogameVersions | string[] | ✅       | Array of of video game versions (ie. patches) for this resource |
