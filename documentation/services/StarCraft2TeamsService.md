# StarCraft2TeamsService

A list of all methods in the `StarCraft2TeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                              |
| :---------------------------------------------- | :--------------------------------------- |
| [get_starcraft_2_teams](#get_starcraft_2_teams) | List teams for the StarCraft 2 videogame |

## get_starcraft_2_teams

List teams for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/teams`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Teams](../models/FilterOverStarcraft2Teams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Teams](../models/RangeOverStarcraft2Teams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Teams](../models/SearchOverStarcraft2Teams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverStarcraft2Teams = {
  acronym: ["eiusmod dolor "],
  id: [8],
  location: ["irure ut"],
  modifiedAt: ["sed"],
  name: ["ea dol"],
  slug: ["56-8gshw"],
  videogameId: [videogameId]
};

const range: RangeOverStarcraft2Teams = {
  acronym: ["dolore nisi exe"],
  id: [4],
  location: ["in sunt do repr"],
  modifiedAt: ["n"],
  name: ["mollit "],
  slug: ["6w60bnb7rk-"]
};

const search: SearchOverStarcraft2Teams = {
  acronym: "laboris incidi",
  location: "nulla do ",
  name: "offici",
  slug: "2"
};
const page = 1;

  const { data } = await pandascore.starCraft2Teams.getStarcraft2Teams(
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
