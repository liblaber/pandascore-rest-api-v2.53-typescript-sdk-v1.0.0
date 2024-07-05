# CsgoPlayerForAllStatsPlayers

**Properties**

| Name      | Type                                | Required | Description                                 |
| :-------- | :---------------------------------- | :------- | :------------------------------------------ |
| firstName | string                              | ✅       | First name of the player. `null` if unknown |
| id        | number                              | ✅       | ID of the player                            |
| lastName  | string                              | ✅       | Last name of the player. `null` if unknown  |
| name      | string                              | ✅       | Professional name of the player             |
| stats     | CsgoPlayerStatsForAllPlayersByMatch | ✅       | Statistics for all players for a match      |
