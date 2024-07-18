# Dota2GameMatch

**Properties**

| Name                | Type                   | Required | Description                              |
| :------------------ | :--------------------- | :------- | :--------------------------------------- |
| beginAt             | string                 | ✅       |                                          |
| detailedStats       | boolean                | ✅       | Whether the match offers full stats      |
| draw                | boolean                | ✅       | Whether result of the match is a draw    |
| endAt               | string                 | ✅       |                                          |
| forfeit             | boolean                | ✅       | Whether match was forfeited              |
| gameAdvantage       | number                 | ✅       | ID of the opponent with a game advantage |
| games               | Game[]                 | ✅       |                                          |
| id                  | number                 | ✅       |                                          |
| league              | BaseLeague             | ✅       |                                          |
| leagueId            | number                 | ✅       |                                          |
| live                | MatchLive              | ✅       |                                          |
| matchType           | MatchType              | ✅       |                                          |
| modifiedAt          | string                 | ✅       |                                          |
| name                | string                 | ✅       |                                          |
| numberOfGames       | number                 | ✅       | Number of games                          |
| opponents           | Opponent[]             | ✅       |                                          |
| originalScheduledAt | string                 | ✅       |                                          |
| rescheduled         | boolean                | ✅       | Whether match has been rescheduled       |
| results             | MatchResult[]          | ✅       |                                          |
| scheduledAt         | string                 | ✅       |                                          |
| serie               | BaseSerie              | ✅       |                                          |
| serieId             | number                 | ✅       |                                          |
| slug                | string                 | ✅       |                                          |
| status              | MatchStatus            | ✅       |                                          |
| streamsList         | Stream[]               | ✅       |                                          |
| tournament          | BaseTournament         | ✅       |                                          |
| tournamentId        | number                 | ✅       |                                          |
| winner              | Dota2GameMatchWinner   | ✅       |                                          |
| winnerId            | Dota2GameMatchWinnerId | ✅       |                                          |
| winnerType          | MatchWinnerType        | ✅       |                                          |

# Dota2GameMatchWinner

# Winner1_4

**Properties**

| Name        | Type    | Required | Description                                                                                                                                                                                                                                    |
| :---------- | :------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active      | boolean | ✅       | Whether player is active                                                                                                                                                                                                                       |
| age         | number  | ✅       | Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above. |
| birthday    | string  | ✅       | Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.                                                                                     |
| firstName   | string  | ✅       | First name of the player. `null` if unknown                                                                                                                                                                                                    |
| id          | number  | ✅       | ID of the player                                                                                                                                                                                                                               |
| imageUrl    | string  | ✅       | URL to the photo of the player. `null` if not available.                                                                                                                                                                                       |
| lastName    | string  | ✅       | Last name of the player. `null` if unknown                                                                                                                                                                                                     |
| modifiedAt  | string  | ✅       |                                                                                                                                                                                                                                                |
| name        | string  | ✅       | Professional name of the player                                                                                                                                                                                                                |
| nationality | string  | ✅       | Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown                                            |
| role        | string  | ✅       | Role/position of the player. Field value varies depending on the video game.`null` if unknown. <br/>**Note**: role is only available for DotA 2, League of Legends, and Overwatch players. <br/>`null` for other video games.                  |
| slug        | string  | ✅       | Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.                                                                                                                         |

# Winner2_4

**Properties**

| Name       | Type   | Required | Description                      |
| :--------- | :----- | :------- | :------------------------------- |
| acronym    | string | ✅       |                                  |
| id         | number | ✅       |                                  |
| imageUrl   | string | ✅       | URL of the team logo             |
| location   | string | ✅       | The team's organization location |
| modifiedAt | string | ✅       |                                  |
| name       | string | ✅       | The name of the team.            |
| slug       | string | ✅       |                                  |

# Dota2GameMatchWinnerId

<!-- This file was generated by liblab | https://liblab.com/ -->
