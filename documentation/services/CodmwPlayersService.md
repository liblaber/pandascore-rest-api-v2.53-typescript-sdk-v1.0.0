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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverCodmwPlayers = {
  active: true,
  birthday: ["laboris s"],
  firstName: ["ea su"],
  id: [4],
  lastName: ["nisi "],
  modifiedAt: ["sit sed non al"],
  name: ["ea occaecat "],
  nationality: ["velit i"],
  role: ["ut ven"],
  slug: ["0x"],
  teamId: [2],
  videogameId: [videogameId]
};

const range: RangeOverCodmwPlayers = {
  birthday: ["exdo aute"],
  firstName: ["fugiat D"],
  id: [3],
  lastName: ["anim e"],
  modifiedAt: ["la"],
  name: ["ipsum veniam"],
  nationality: ["nisi min"],
  role: ["anim aliqua"],
  slug: ["tdx6k-"]
};

const search: SearchOverCodmwPlayers = {
  birthday: "Ut non amet ",
  firstName: "dolore comm",
  lastName: "minim ",
  name: "amet d",
  nationality: "ut minim",
  role: "enimut ex si",
  slug: "mpp4jva"
};
const page = 1;

  const { data } = await pandascoreClient.codmwPlayers.getCodmwPlayers(
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
