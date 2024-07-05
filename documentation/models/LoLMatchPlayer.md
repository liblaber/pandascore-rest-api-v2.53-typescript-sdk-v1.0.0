# LoLMatchPlayer

Player's data for a LoL Match

**Properties**

| Name          | Type               | Required | Description                                                                                                                                                                                         |
| :------------ | :----------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assists       | number             | ✅       |                                                                                                                                                                                                     |
| deaths        | number             | ✅       |                                                                                                                                                                                                     |
| firstName     | string             | ✅       | First name of the player. `null` if unknown                                                                                                                                                         |
| imageUrl      | string             | ✅       | URL to the photo of the player. `null` if not available.                                                                                                                                            |
| kills         | number             | ✅       |                                                                                                                                                                                                     |
| lastName      | string             | ✅       | Last name of the player. `null` if unknown                                                                                                                                                          |
| name          | string             | ✅       | Professional name of the player                                                                                                                                                                     |
| nationality   | string             | ✅       | Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown |
| numberOfGames | number             | ✅       | Number of games                                                                                                                                                                                     |
| playerId      | number             | ✅       | ID of the player                                                                                                                                                                                    |
| role          | LoLMatchPlayerRole | ✅       |                                                                                                                                                                                                     |
| slug          | string             | ✅       | Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.                                                                              |

# LoLMatchPlayerRole

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| adc  | string | ✅       | "adc"       |
| jun  | string | ✅       | "jun"       |
| mid  | string | ✅       | "mid"       |
| sup  | string | ✅       | "sup"       |
| top  | string | ✅       | "top"       |
