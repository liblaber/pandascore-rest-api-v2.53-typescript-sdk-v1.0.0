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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLLeagues = {
    id: [10],
    modifiedAt: ['ul'],
    name: ['et elit '],
    slug: ['uld589je'],
    url: ['consequat a'],
  };

  const range: RangeOverLoLLeagues = {
    id: [4],
    modifiedAt: ['nostr'],
    name: ['occae'],
    slug: ['2'],
    url: ['non a'],
  };

  const search: SearchOverLoLLeagues = {
    name: 'mollit e',
    slug: 'i-fa',
    url: 'culpa elit',
  };
  const page = 1;

  const { data } = await pandascore.loLLeagues.getLolLeagues({
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
