# FilterOverCsgoShortTournaments

**Properties**

| Name           | Type                                           | Required | Description                                                                                              |
| :------------- | :--------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------- |
| beginAt        | string[]                                       | ❌       |                                                                                                          |
| detailedStats  | boolean                                        | ❌       | Whether the tournament is expected to have detailed statistics available                                 |
| endAt          | string[]                                       | ❌       |                                                                                                          |
| hasBracket     | boolean                                        | ❌       | Whether the tournament has a bracket                                                                     |
| id             | number[]                                       | ❌       |                                                                                                          |
| liveSupported  | boolean                                        | ❌       | Whether live is supported                                                                                |
| modifiedAt     | string[]                                       | ❌       |                                                                                                          |
| name           | string[]                                       | ❌       |                                                                                                          |
| prizepool      | string[]                                       | ❌       |                                                                                                          |
| serieId        | number[]                                       | ❌       |                                                                                                          |
| slug           | string[]                                       | ❌       |                                                                                                          |
| tier           | SearchOverValorantShortTournamentsTier2[]      | ❌       |                                                                                                          |
| videogameTitle | FilterOverCsgoShortTournamentsVideogameTitle[] | ❌       | A videogame title id or slug. <br/>Only for `/csgo/*`, `/codmw/*`, `/fifa/*` and `/ow/*` endpoints <br/> |
| winnerId       | OpponentId[]                                   | ❌       |                                                                                                          |
| winnerType     | OpponentType[]                                 | ❌       |                                                                                                          |

# FilterOverCsgoShortTournamentsVideogameTitle
