# ValorantPlayersService

A list of all methods in the `ValorantPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                             |
| :-------------------------------------------- | :-------------------------------------- |
| [get_valorant_players](#get_valorant_players) | List players for the Valorant videogame |

## get_valorant_players

List players for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/players`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantPlayers](../models/FilterOverValorantPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantPlayers](../models/RangeOverValorantPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantPlayers](../models/SearchOverValorantPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverValorantPlayers = {
  active: true,
  birthday: ["laboris"],
  firstName: ["tempor"],
  id: [2],
  lastName: ["veniam"],
  modifiedAt: ["Duis ex"],
  name: ["incididunt "],
  nationality: ["dolore"],
  role: ["aliqu"],
  slug: ["y"],
  teamId: [2],
  videogameId: [videogameId]
};

const range: RangeOverValorantPlayers = {
  birthday: ["exercit"],
  firstName: ["inExce"],
  id: [8],
  lastName: ["Lorem labor"],
  modifiedAt: ["elit id l"],
  name: ["irure incid"],
  nationality: ["ullamco "],
  role: ["fugiat labo"],
  slug: ["o"]
};

const search: SearchOverValorantPlayers = {
  birthday: "ea moll",
  firstName: "officia nulla",
  lastName: "labore eiu",
  name: "anim eu",
  nationality: "aliqua dolor",
  role: "consequat ",
  slug: "ybj02j05"
};
const page = 1;

  const { data } = await pandascoreClient.valorantPlayers.getValorantPlayers(
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
