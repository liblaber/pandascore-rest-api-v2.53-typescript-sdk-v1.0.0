# CsgoMatchPlayer

Player's data for a CSGO Match

**Properties**

| Name          | Type   | Required | Description                                                                                                                                                                                         |
| :------------ | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assists       | number | ✅       | Player's number of kill assists for a game                                                                                                                                                          |
| deaths        | number | ✅       | Player's number of deaths                                                                                                                                                                           |
| firstName     | string | ✅       | First name of the player. `null` if unknown                                                                                                                                                         |
| headshots     | number | ✅       | Player's number of headshots                                                                                                                                                                        |
| imageUrl      | string | ✅       | URL to the photo of the player. `null` if not available.                                                                                                                                            |
| kills         | number | ✅       | Player's number of kills                                                                                                                                                                            |
| lastName      | string | ✅       | Last name of the player. `null` if unknown                                                                                                                                                          |
| name          | string | ✅       | Professional name of the player                                                                                                                                                                     |
| nationality   | string | ✅       | Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown |
| numberOfGames | number | ✅       | Number of games                                                                                                                                                                                     |
| playerId      | number | ✅       | ID of the player                                                                                                                                                                                    |
| slug          | string | ✅       | Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.                                                                              |

<!-- This file was generated by liblab | https://liblab.com/ -->
