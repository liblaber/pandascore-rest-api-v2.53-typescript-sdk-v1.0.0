# LoLWildRiftLeaguesService

A list of all methods in the `LoLWildRiftLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                |
| :------------------------------------------------------ | :------------------------- |
| [get_lol_wild_rift_leagues](#get_lol_wild_rift_leagues) | List LoL Wild Rift leagues |

## get_lol_wild_rift_leagues

List LoL Wild Rift leagues

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/leagues`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftLeagues](../models/FilterOverLolWildRiftLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftLeagues](../models/RangeOverLolWildRiftLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftLeagues](../models/SearchOverLolWildRiftLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLolWildRiftLeagues = {
    id: [7],
    modifiedAt: ['laborum commo'],
    name: ['offici'],
    slug: ['aua2'],
    url: ['ut tempor ipsu'],
  };

  const range: RangeOverLolWildRiftLeagues = {
    id: [1],
    modifiedAt: ['aliquip'],
    name: ['Excepte'],
    slug: ['3-_m-u2zm7'],
    url: ['ea Duis'],
  };

  const search: SearchOverLolWildRiftLeagues = {
    name: 'sit officia ',
    slug: 'vmrxzc',
    url: 'cillum E',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftLeagues.getLolWildRiftLeagues({
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
