# CounterStrikePlayersService

A list of all methods in the `CounterStrikePlayersService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                                   |
| :------------------------------------ | :-------------------------------------------- |
| [get_csgo_players](#get_csgo_players) | List players for the Counter-Strike videogame |

## get_csgo_players

List players for the Counter-Strike videogame

- HTTP Method: `GET`
- Endpoint: `/csgo/players`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoPlayers](../models/FilterOverCsgoPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoPlayers](../models/RangeOverCsgoPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoPlayers](../models/SearchOverCsgoPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverCsgoPlayers = {
  active: true,
  birthday: ["nostrud "],
  firstName: ["eu anim exe"],
  id: [6],
  lastName: ["in amet"],
  modifiedAt: ["labore enim"],
  name: ["laborum "],
  nationality: ["magna "],
  role: ["tempor veniam"],
  slug: ["i"],
  teamId: [2],
  videogameId: [videogameId]
};

const range: RangeOverCsgoPlayers = {
  birthday: ["dosit"],
  firstName: ["irure pariat"],
  id: [5],
  lastName: ["aliqua pariatur"],
  modifiedAt: ["dolore do Lo"],
  name: ["deserunt"],
  nationality: ["ut in sunt"],
  role: ["quis ea lab"],
  slug: ["7"]
};

const search: SearchOverCsgoPlayers = {
  birthday: "qui ut cill",
  firstName: "dolore",
  lastName: "labore et",
  name: "voluptate",
  nationality: "adipisicing ",
  role: "adculpa e",
  slug: "v"
};
const page = 1;

  const { data } = await pandascoreClient.counterStrikePlayers.getCsgoPlayers(
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
