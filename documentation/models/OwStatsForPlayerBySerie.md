# OwStatsForPlayerBySerie

Player's aggregated statistics for a serie

**Properties**

| Name             | Type                               | Required | Description                                                                                                                                                                                                                                    |
| :--------------- | :--------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active           | boolean                            | ✅       | Whether player is active                                                                                                                                                                                                                       |
| age              | number                             | ✅       | Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above. |
| birthday         | string                             | ✅       | Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.                                                                                     |
| currentTeam      | OwStatsForPlayerBySerieCurrentTeam | ✅       |                                                                                                                                                                                                                                                |
| currentVideogame | any                                | ✅       |                                                                                                                                                                                                                                                |
| favoriteHeroes   | OwFavoriteHero[]                   | ✅       |                                                                                                                                                                                                                                                |
| firstName        | string                             | ✅       | First name of the player. `null` if unknown                                                                                                                                                                                                    |
| id               | number                             | ✅       | ID of the player                                                                                                                                                                                                                               |
| imageUrl         | string                             | ✅       | URL to the photo of the player. `null` if not available.                                                                                                                                                                                       |
| lastGames        | OwGameRoundPlayer[]                | ✅       |                                                                                                                                                                                                                                                |
| lastName         | string                             | ✅       | Last name of the player. `null` if unknown                                                                                                                                                                                                     |
| modifiedAt       | string                             | ✅       |                                                                                                                                                                                                                                                |
| name             | string                             | ✅       | Professional name of the player                                                                                                                                                                                                                |
| nationality      | string                             | ✅       | Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown                                            |
| role             | string                             | ✅       | Role/position of the player. Field value varies depending on the video game.`null` if unknown. <br/>**Note**: role is only available for DotA 2, League of Legends, and Overwatch players. <br/>`null` for other video games.                  |
| slug             | string                             | ✅       | Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.                                                                                                                         |
| stats            | OwPlayerStatsBySerie               | ✅       | Player's statistics for a serie                                                                                                                                                                                                                |
| teams            | BaseTeam[]                         | ✅       |                                                                                                                                                                                                                                                |

# OwStatsForPlayerBySerieCurrentTeam

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

<!-- This file was generated by liblab | https://liblab.com/ -->
