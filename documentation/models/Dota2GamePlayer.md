# Dota2GamePlayer

Player's data for a game

**Properties**

| Name                   | Type                    | Required | Description                             |
| :--------------------- | :---------------------- | :------- | :-------------------------------------- |
| abilities              | Dota2PerHeroAbility[]   | ✅       |                                         |
| assists                | number                  | ✅       | Player's number of assists for a game   |
| campsStacked           | number                  | ✅       |                                         |
| creepsStacked          | number                  | ✅       |                                         |
| damageTaken            | number                  | ✅       |                                         |
| deaths                 | number                  | ✅       |                                         |
| denies                 | number                  | ✅       | Number of denies performed by a player  |
| faction                | Dota2GamePlayerFaction  | ✅       |                                         |
| gameId                 | number                  | ✅       |                                         |
| goldPerMin             | number                  | ✅       |                                         |
| goldRemaining          | number                  | ✅       |                                         |
| goldSpent              | number                  | ✅       |                                         |
| heal                   | number                  | ✅       | Healing (in HP) performed by the player |
| hero                   | Dota2GamePlayerHero     | ✅       |                                         |
| heroDamage             | number                  | ✅       |                                         |
| heroLevel              | number                  | ✅       |                                         |
| items                  | Dota2Item[]             | ✅       |                                         |
| kills                  | number                  | ✅       |                                         |
| laneCreep              | number                  | ✅       |                                         |
| lastHits               | number                  | ✅       |                                         |
| netWorth               | number                  | ✅       | Net worth of the player                 |
| neutralCreep           | number                  | ✅       |                                         |
| observerUsed           | number                  | ✅       |                                         |
| observerWardsDestroyed | number                  | ✅       |                                         |
| observerWardsPurchased | number                  | ✅       |                                         |
| opponent               | Dota2GamePlayerOpponent | ✅       |                                         |
| player                 | BasePlayer              | ✅       |                                         |
| role                   | number                  | ✅       | Position of the player (1, 2, 3, 4, 5)  |
| sentryUsed             | number                  | ✅       |                                         |
| sentryWardsDestroyed   | number                  | ✅       |                                         |
| sentryWardsPurchased   | number                  | ✅       |                                         |
| teamId                 | number                  | ✅       |                                         |
| towerDamage            | number                  | ✅       |                                         |
| towerKills             | number                  | ✅       |                                         |
| xpPerMin               | number                  | ✅       |                                         |

# Dota2GamePlayerFaction

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| DIRE    | string | ✅       | "dire"      |
| RADIANT | string | ✅       | "radiant"   |

# Dota2GamePlayerHero

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| id            | number | ✅       |             |
| imageUrl      | string | ✅       |             |
| localizedName | string | ✅       |             |
| name          | string | ✅       |             |

# Dota2GamePlayerOpponent

# Opponent1_2

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

# Opponent2_2

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
