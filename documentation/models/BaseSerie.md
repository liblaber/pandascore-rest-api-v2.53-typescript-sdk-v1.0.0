# BaseSerie

**Properties**

| Name       | Type                | Required | Description |
| :--------- | :------------------ | :------- | :---------- |
| beginAt    | string              | ✅       |             |
| endAt      | string              | ✅       |             |
| fullName   | string              | ✅       |             |
| id         | number              | ✅       |             |
| leagueId   | number              | ✅       |             |
| modifiedAt | string              | ✅       |             |
| name       | string              | ✅       |             |
| season     | string              | ✅       |             |
| slug       | string              | ✅       |             |
| winnerId   | BaseSerieWinnerId   | ✅       |             |
| winnerType | BaseSerieWinnerType | ✅       |             |
| year       | number              | ✅       |             |

# BaseSerieWinnerId

# BaseSerieWinnerType

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| Player | string | ✅       | "Player"    |
| Team   | string | ✅       | "Team"      |
