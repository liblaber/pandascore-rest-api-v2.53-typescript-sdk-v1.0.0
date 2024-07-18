# StarCraftBroodWarPlayersService

A list of all methods in the `StarCraftBroodWarPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                        |
| :------------------------------------------------------------------ | :------------------------------------------------- |
| [get_starcraft_brood_war_players](#get_starcraft_brood_war_players) | List players for the StarCraft Brood War videogame |

## get_starcraft_brood_war_players

List players for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/players`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarPlayers](../models/FilterOverStarcraftBroodWarPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarPlayers](../models/RangeOverStarcraftBroodWarPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarPlayers](../models/SearchOverStarcraftBroodWarPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverStarcraftBroodWarPlayers = {
  active: true,
  birthday: ["consequat "],
  firstName: ["dolore"],
  id: [9],
  lastName: ["adipi"],
  modifiedAt: ["id no"],
  name: ["ex dolor"],
  nationality: ["ad tempor m"],
  role: ["reprehende"],
  slug: ["fx5dlw"],
  teamId: [5],
  videogameId: [videogameId]
};

const range: RangeOverStarcraftBroodWarPlayers = {
  birthday: ["nisi adipisicin"],
  firstName: ["voluptat"],
  id: [7],
  lastName: ["proident"],
  modifiedAt: ["officia id"],
  name: ["adipisici"],
  nationality: ["qui Ut"],
  role: ["exercitatio"],
  slug: ["65"]
};

const search: SearchOverStarcraftBroodWarPlayers = {
  birthday: "qui enim",
  firstName: "cillum ut temp",
  lastName: "pariatur fugia",
  name: "ullamco ",
  nationality: "proiden",
  role: "officia",
  slug: "fepvp"
};
const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarPlayers.getStarcraftBroodWarPlayers(
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
