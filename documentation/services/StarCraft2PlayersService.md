# StarCraft2PlayersService

A list of all methods in the `StarCraft2PlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                |
| :-------------------------------------------------- | :----------------------------------------- |
| [get_starcraft_2_players](#get_starcraft_2_players) | List players for the StarCraft 2 videogame |

## get_starcraft_2_players

List players for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/players`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Players](../models/FilterOverStarcraft2Players.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Players](../models/RangeOverStarcraft2Players.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Players](../models/SearchOverStarcraft2Players.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverStarcraft2Players = {
  active: true,
  birthday: ["commodo au"],
  firstName: ["minim culpa"],
  id: [2],
  lastName: ["in ipsum"],
  modifiedAt: ["qui in"],
  name: ["ipsum velit a"],
  nationality: ["Duis ips"],
  role: ["id Excepteur"],
  slug: ["gno-yej179-"],
  teamId: [7],
  videogameId: [videogameId]
};

const range: RangeOverStarcraft2Players = {
  birthday: ["ut qui"],
  firstName: ["fugiat"],
  id: [7],
  lastName: ["occaecat"],
  modifiedAt: ["tempor Du"],
  name: ["fugiat"],
  nationality: ["dolore v"],
  role: ["reprehend"],
  slug: ["7s2vaxoc9"]
};

const search: SearchOverStarcraft2Players = {
  birthday: "voluptate in fu",
  firstName: "tempor id",
  lastName: "nostrud a",
  name: "ullamco ve",
  nationality: "quis id eiu",
  role: "fugiat eu",
  slug: "ku814hpvaf-"
};
const page = 1;

  const { data } = await pandascore.starCraft2Players.getStarcraft2Players(
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
