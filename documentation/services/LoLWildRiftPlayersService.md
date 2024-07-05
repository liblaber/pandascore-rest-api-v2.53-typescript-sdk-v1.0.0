# LoLWildRiftPlayersService

A list of all methods in the `LoLWildRiftPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                  |
| :------------------------------------------------------ | :------------------------------------------- |
| [get_lol_wild_rift_players](#get_lol_wild_rift_players) | List players for the LoL Wild Rift videogame |

## get_lol_wild_rift_players

List players for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/players`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftPlayers](../models/FilterOverLolWildRiftPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftPlayers](../models/RangeOverLolWildRiftPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftPlayers](../models/SearchOverLolWildRiftPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverLolWildRiftPlayers = {
  active: true,
  birthday: ["do minim dese"],
  firstName: ["deserun"],
  id: [8],
  lastName: ["dolore l"],
  modifiedAt: ["sed nostrud s"],
  name: ["tempo"],
  nationality: ["quiadipisici"],
  role: ["dolor"],
  slug: ["-9x"],
  teamId: [5],
  videogameId: [videogameId]
};

const range: RangeOverLolWildRiftPlayers = {
  birthday: ["eiusm"],
  firstName: ["dolore ea s"],
  id: [1],
  lastName: ["adipi"],
  modifiedAt: ["magna"],
  name: ["ameta"],
  nationality: ["dolor sin"],
  role: ["ad dolore"],
  slug: ["qcxwun"]
};

const search: SearchOverLolWildRiftPlayers = {
  birthday: "anim nulla off",
  firstName: "sitfug",
  lastName: "ut et",
  name: "esse ut pa",
  nationality: "consequat ",
  role: "in aliqua",
  slug: "ebqyb"
};
const page = 1;

  const { data } = await pandascore.loLWildRiftPlayers.getLolWildRiftPlayers(
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
