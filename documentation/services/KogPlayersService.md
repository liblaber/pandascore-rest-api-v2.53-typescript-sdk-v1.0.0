# KogPlayersService

A list of all methods in the `KogPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                  |
| :---------------------------------- | :------------------------------------------- |
| [get_kog_players](#get_kog_players) | List players for the King of Glory videogame |

## get_kog_players

List players for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/players`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogPlayers](../models/FilterOverKogPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogPlayers](../models/RangeOverKogPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogPlayers](../models/SearchOverKogPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverKogPlayers = {
  active: true,
  birthday: ["Duis aute sit"],
  firstName: ["occaec"],
  id: [6],
  lastName: ["mollit"],
  modifiedAt: ["in"],
  name: ["laboris aliqua "],
  nationality: ["proident i"],
  role: ["venia"],
  slug: ["pdt-82"],
  teamId: [7],
  videogameId: [videogameId]
};

const range: RangeOverKogPlayers = {
  birthday: ["ad elit "],
  firstName: ["tempor"],
  id: [6],
  lastName: ["aute ali"],
  modifiedAt: ["consectetu"],
  name: ["sintin"],
  nationality: ["elit occaeca"],
  role: ["minim "],
  slug: ["_qmb96lw89"]
};

const search: SearchOverKogPlayers = {
  birthday: "nisi sed deseru",
  firstName: "cupid",
  lastName: "aliqua magna no",
  name: "in dolore ",
  nationality: "proident",
  role: "magna cu",
  slug: "wiv"
};
const page = 1;

  const { data } = await pandascoreClient.kogPlayers.getKogPlayers(
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```
