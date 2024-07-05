# StarCraft2LeaguesService

A list of all methods in the `StarCraft2LeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description              |
| :-------------------------------------------------- | :----------------------- |
| [get_starcraft_2_leagues](#get_starcraft_2_leagues) | List StarCraft 2 leagues |

## get_starcraft_2_leagues

List StarCraft 2 leagues

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/leagues`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Leagues](../models/FilterOverStarcraft2Leagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Leagues](../models/RangeOverStarcraft2Leagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Leagues](../models/SearchOverStarcraft2Leagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverStarcraft2Leagues = {
    id: [1],
    modifiedAt: ['de'],
    name: ['eiusmod'],
    slug: ['8ja0-wmhji'],
    url: ['dolore'],
  };

  const range: RangeOverStarcraft2Leagues = {
    id: [8],
    modifiedAt: ['est ea i'],
    name: ['ut in et Duis'],
    slug: ['_6kk0u8q68h'],
    url: ['tempor '],
  };

  const search: SearchOverStarcraft2Leagues = {
    name: 'non irure sun',
    slug: 'mj:1n29',
    url: 'nulla con',
  };
  const page = 1;

  const { data } = await pandascore.starCraft2Leagues.getStarcraft2Leagues({
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
