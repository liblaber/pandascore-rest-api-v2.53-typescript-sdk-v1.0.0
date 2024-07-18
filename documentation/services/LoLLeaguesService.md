# LoLLeaguesService

A list of all methods in the `LoLLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                    |
| :---------------------------------- | :----------------------------- |
| [get_lol_leagues](#get_lol_leagues) | List League of Legends leagues |

## get_lol_leagues

List League of Legends leagues

- HTTP Method: `GET`
- Endpoint: `/lol/leagues`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLLeagues](../models/FilterOverLoLLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLLeagues](../models/RangeOverLoLLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLLeagues](../models/SearchOverLoLLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLLeagues = {
    id: [3],
    modifiedAt: ['dol'],
    name: ['mollit occa'],
    slug: ['evf'],
    url: ['magna dolor ali'],
  };

  const range: RangeOverLoLLeagues = {
    id: [7],
    modifiedAt: ['quis'],
    name: ['adipisicing'],
    slug: ['_l-t'],
    url: ['cillum esse al'],
  };

  const search: SearchOverLoLLeagues = {
    name: 'Lorem de',
    slug: ':1pcxkfbh7q',
    url: 'labore',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLLeagues.getLolLeagues({
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
