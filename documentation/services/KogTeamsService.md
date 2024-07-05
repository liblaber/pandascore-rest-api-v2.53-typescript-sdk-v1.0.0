# KogTeamsService

A list of all methods in the `KogTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                |
| :------------------------------ | :----------------------------------------- |
| [get_kog_teams](#get_kog_teams) | List teams for the King of Glory videogame |

## get_kog_teams

List teams for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/teams`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogTeams](../models/FilterOverKogTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogTeams](../models/RangeOverKogTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogTeams](../models/SearchOverKogTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverKogTeams = {
  acronym: ["aliquip qui"],
  id: [7],
  location: ["laboris"],
  modifiedAt: ["velit in"],
  name: ["amet Du"],
  slug: ["2m"],
  videogameId: [videogameId]
};

const range: RangeOverKogTeams = {
  acronym: ["dolore"],
  id: [7],
  location: ["ea exercitatio"],
  modifiedAt: ["offi"],
  name: ["fugiat ir"],
  slug: ["fz7zjo1xs"]
};

const search: SearchOverKogTeams = {
  acronym: "est sed occa",
  location: "do pariat",
  name: "nisi ea",
  slug: "kl"
};
const page = 1;

  const { data } = await pandascore.kogTeams.getKogTeams(
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
