# CodmwPlayersService

A list of all methods in the `CodmwPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                          |
| :-------------------------------------- | :----------------------------------- |
| [get_codmw_players](#get_codmw_players) | List players for the CODMW videogame |

## get_codmw_players

List players for the CODMW videogame

- HTTP Method: `GET`
- Endpoint: `/codmw/players`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwPlayers](../models/FilterOverCodmwPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwPlayers](../models/RangeOverCodmwPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwPlayers](../models/SearchOverCodmwPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverCodmwPlayers = {
  active: true,
  birthday: ["ut dolore in"],
  firstName: ["ipsum eu"],
  id: [8],
  lastName: ["non qui la"],
  modifiedAt: ["i"],
  name: ["mollit pariatur"],
  nationality: ["elit quis ut"],
  role: ["sed deserun"],
  slug: ["mjcw7hpma"],
  teamId: [3],
  videogameId: [videogameId]
};

const range: RangeOverCodmwPlayers = {
  birthday: ["fugiat"],
  firstName: ["dolor ul"],
  id: [1],
  lastName: ["esse Duis do c"],
  modifiedAt: ["velit m"],
  name: ["cillum labor"],
  nationality: ["sit cupida"],
  role: ["elit vo"],
  slug: ["-0cah-72ky"]
};

const search: SearchOverCodmwPlayers = {
  birthday: "esse nulla L",
  firstName: "ea quis nulla",
  lastName: "ipsum",
  name: "auteeiu",
  nationality: "labore r",
  role: "adanim do",
  slug: "_jq82"
};
const page = 1;

  const { data } = await pandascore.codmwPlayers.getCodmwPlayers(
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
