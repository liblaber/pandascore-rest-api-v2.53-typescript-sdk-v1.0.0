# BaseMatch

**Properties**

| Name                | Type              | Required | Description                              |
| :------------------ | :---------------- | :------- | :--------------------------------------- |
| beginAt             | string            | ✅       |                                          |
| detailedStats       | boolean           | ✅       | Whether the match offers full stats      |
| draw                | boolean           | ✅       | Whether result of the match is a draw    |
| endAt               | string            | ✅       |                                          |
| forfeit             | boolean           | ✅       | Whether match was forfeited              |
| gameAdvantage       | number            | ✅       | ID of the opponent with a game advantage |
| id                  | number            | ✅       |                                          |
| live                | MatchLive         | ✅       |                                          |
| matchType           | MatchType         | ✅       |                                          |
| modifiedAt          | string            | ✅       |                                          |
| name                | string            | ✅       |                                          |
| numberOfGames       | number            | ✅       | Number of games                          |
| originalScheduledAt | string            | ✅       |                                          |
| rescheduled         | boolean           | ✅       | Whether match has been rescheduled       |
| scheduledAt         | string            | ✅       |                                          |
| slug                | string            | ✅       |                                          |
| status              | MatchStatus       | ✅       |                                          |
| streamsList         | Stream[]          | ✅       |                                          |
| tournamentId        | number            | ✅       |                                          |
| winnerId            | BaseMatchWinnerId | ✅       |                                          |
| winnerType          | MatchWinnerType   | ✅       |                                          |

# BaseMatchWinnerId
