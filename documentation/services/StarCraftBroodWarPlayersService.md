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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverStarcraftBroodWarPlayers = {
  active: true,
  birthday: ["adipi"],
  firstName: ["do proid"],
  id: [6],
  lastName: ["sit quis"],
  modifiedAt: ["aute dol"],
  name: ["velit do"],
  nationality: ["elitad occaec"],
  role: ["aliqu"],
  slug: ["9"],
  teamId: [7],
  videogameId: [videogameId]
};

const range: RangeOverStarcraftBroodWarPlayers = {
  birthday: ["ut nulla ea"],
  firstName: ["offici"],
  id: [6],
  lastName: ["enim anim sit "],
  modifiedAt: ["Excepteur e"],
  name: ["amet sint"],
  nationality: ["dolore laborum "],
  role: ["consequa"],
  slug: ["sneuh"]
};

const search: SearchOverStarcraftBroodWarPlayers = {
  birthday: "dolor",
  firstName: "elit ",
  lastName: "estqui",
  name: "et officia aute",
  nationality: "ut Exc",
  role: "in aute",
  slug: "f5vm4iqe"
};
const page = 1;

  const { data } = await pandascore.starCraftBroodWarPlayers.getStarcraftBroodWarPlayers(
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
