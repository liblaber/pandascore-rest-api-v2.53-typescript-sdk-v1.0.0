# EaSportsFcLeaguesService

A list of all methods in the `EaSportsFcLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description               |
| :------------------------------------ | :------------------------ |
| [get_fifa_leagues](#get_fifa_leagues) | List EA Sports FC leagues |

## get_fifa_leagues

List EA Sports FC leagues

- HTTP Method: `GET`
- Endpoint: `/fifa/leagues`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaLeagues](../models/FilterOverFifaLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaLeagues](../models/RangeOverFifaLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaLeagues](../models/SearchOverFifaLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverFifaLeagues = {
    id: [10],
    modifiedAt: ['irure r'],
    name: ['cillum ni'],
    slug: ['9_bf7ubca'],
    url: ['officia'],
  };

  const range: RangeOverFifaLeagues = {
    id: [6],
    modifiedAt: ['Duis nostru'],
    name: ['aliquip sit '],
    slug: ['746:x'],
    url: ['minim cillum c'],
  };

  const search: SearchOverFifaLeagues = {
    name: 'culpa',
    slug: '4k:li7ru',
    url: 'dolore',
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcLeagues.getFifaLeagues({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```
