# Dota2PlayersService

A list of all methods in the `Dota2PlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                           |
| :-------------------------------------- | :------------------------------------ |
| [get_dota2_players](#get_dota2_players) | List players for the Dota 2 videogame |

## get_dota2_players

List players for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/players`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Players](../models/FilterOverDota2Players.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Players](../models/RangeOverDota2Players.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Players](../models/SearchOverDota2Players.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverDota2Players = {
  active: true,
  birthday: ["Duis ma"],
  firstName: ["minim"],
  id: [7],
  lastName: ["eiusmod in"],
  modifiedAt: ["cupidatat"],
  name: ["do Duis pro"],
  nationality: ["ullamco Ut"],
  role: ["dolore t"],
  slug: ["hu5v0"],
  teamId: [6],
  videogameId: [videogameId]
};

const range: RangeOverDota2Players = {
  birthday: ["ex tempor"],
  firstName: ["elit dolor qu"],
  id: [4],
  lastName: ["incididu"],
  modifiedAt: ["eu ea"],
  name: ["eanisi "],
  nationality: ["veniam"],
  role: ["ipsum"],
  slug: ["i57jy1"]
};

const search: SearchOverDota2Players = {
  birthday: "et incid",
  firstName: "deseru",
  lastName: "conse",
  name: "culpa",
  nationality: "dolor velit v",
  role: "velit",
  slug: "scuq9k0o"
};
const page = 1;

  const { data } = await pandascoreClient.dota2Players.getDota2Players(
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
