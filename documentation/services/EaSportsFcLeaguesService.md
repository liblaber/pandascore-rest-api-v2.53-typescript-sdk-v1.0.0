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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverFifaLeagues = {
    id: [3],
    modifiedAt: ['est in a'],
    name: ['cupidatat'],
    slug: ['cnyn'],
    url: ['mollit t'],
  };

  const range: RangeOverFifaLeagues = {
    id: [6],
    modifiedAt: ['v'],
    name: ['sunt eius'],
    slug: ['54pkpqw'],
    url: ['in irure'],
  };

  const search: SearchOverFifaLeagues = {
    name: 'dolor sed ',
    slug: 'a:im',
    url: 'ipsum incidi',
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcLeagues.getFifaLeagues({
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
