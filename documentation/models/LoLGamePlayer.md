# LoLGamePlayer

Player's data for a Game

**Properties**

| Name                       | Type                   | Required | Description                                                                                                                                                |
| :------------------------- | :--------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assists                    | number                 | ✅       |                                                                                                                                                            |
| champion                   | LoLGamePlayerChampion  | ✅       |                                                                                                                                                            |
| creepScore                 | number                 | ✅       | The player's Creep Score (CS.) <br/> <br/>NB: Creep Score can be different that the number of minions killed because neutral monsters can give more score. |
| csAt14                     | number                 | ✅       | The player's Creep Score (CS.) at 14minutes                                                                                                                |
| csDiffAt14                 | number                 | ✅       | Player CS difference compared to their lane opponent at the 14th minute in-game                                                                            |
| deaths                     | number                 | ✅       |                                                                                                                                                            |
| flags                      | LoLFlags               | ✅       |                                                                                                                                                            |
| gameId                     | number                 | ✅       | LoL game ID                                                                                                                                                |
| goldEarned                 | number                 | ✅       |                                                                                                                                                            |
| goldPercentage             | number                 | ✅       | Percentage of gold the player had compared to the total gold of the team                                                                                   |
| goldSpent                  | number                 | ✅       |                                                                                                                                                            |
| items                      | BaseLoLItem[]          | ✅       |                                                                                                                                                            |
| kills                      | number                 | ✅       |                                                                                                                                                            |
| killsCounters              | LoLKillCounters        | ✅       |                                                                                                                                                            |
| killsSeries                | LoLKillsSeries         | ✅       |                                                                                                                                                            |
| largestCriticalStrike      | number                 | ✅       |                                                                                                                                                            |
| largestKillingSpree        | number                 | ✅       |                                                                                                                                                            |
| largestMultiKill           | number                 | ✅       |                                                                                                                                                            |
| level                      | number                 | ✅       |                                                                                                                                                            |
| magicDamage                | LoLMagicDamage         | ✅       |                                                                                                                                                            |
| masteries                  | LoLMastery[]           | ✅       |                                                                                                                                                            |
| minionsKilled              | number                 | ✅       | The player's Creep Score (CS.)                                                                                                                             |
| opponent                   | LoLGamePlayerOpponent  | ✅       |                                                                                                                                                            |
| physicalDamage             | LoLPhysicalDamage      | ✅       |                                                                                                                                                            |
| player                     | BasePlayer             | ✅       |                                                                                                                                                            |
| playerId                   | number                 | ✅       | ID of the player                                                                                                                                           |
| role                       | LoLGamePlayerRole      | ✅       |                                                                                                                                                            |
| runes                      | LoLRune[]              | ✅       |                                                                                                                                                            |
| runesReforged              | LoLPlayerRunesReforged | ✅       |                                                                                                                                                            |
| spells                     | LoLSpell[]             | ✅       |                                                                                                                                                            |
| team                       | BaseTeam               | ✅       |                                                                                                                                                            |
| totalDamage                | LoLTotalDamage         | ✅       |                                                                                                                                                            |
| totalHeal                  | number                 | ✅       |                                                                                                                                                            |
| totalTimeCrowdControlDealt | number                 | ✅       |                                                                                                                                                            |
| totalUnitsHealed           | number                 | ✅       |                                                                                                                                                            |
| trueDamage                 | LoLTrueDamage          | ✅       |                                                                                                                                                            |
| wards                      | LoLWards               | ✅       |                                                                                                                                                            |
| wardsPlaced                | number                 | ✅       |                                                                                                                                                            |

# LoLGamePlayerChampion

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| id       | number | ✅       |             |
| imageUrl | string | ✅       |             |
| name     | string | ✅       |             |

# LoLGamePlayerOpponent

# Opponent1_3

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

# Opponent2_3

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

# LoLGamePlayerRole

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| adc  | string | ✅       | "adc"       |
| jun  | string | ✅       | "jun"       |
| mid  | string | ✅       | "mid"       |
| sup  | string | ✅       | "sup"       |
| top  | string | ✅       | "top"       |

<!-- This file was generated by liblab | https://liblab.com/ -->
