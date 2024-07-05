# ValorantLeaguesService

A list of all methods in the `ValorantLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description           |
| :-------------------------------------------- | :-------------------- |
| [get_valorant_leagues](#get_valorant_leagues) | List Valorant leagues |

## get_valorant_leagues

List Valorant leagues

- HTTP Method: `GET`
- Endpoint: `/valorant/leagues`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantLeagues](../models/FilterOverValorantLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantLeagues](../models/RangeOverValorantLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantLeagues](../models/SearchOverValorantLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverValorantLeagues = {
    id: [10],
    modifiedAt: ['consequat'],
    name: ['veniam'],
    slug: ['hpk6'],
    url: ['in officia'],
  };

  const range: RangeOverValorantLeagues = {
    id: [3],
    modifiedAt: ['officia'],
    name: ['ex es'],
    slug: ['n7ld51sj3'],
    url: ['sunt d'],
  };

  const search: SearchOverValorantLeagues = {
    name: 'ipsum Excepte',
    slug: '7p5pjypqh7',
    url: 'Ut ir',
  };
  const page = 1;

  const { data } = await pandascore.valorantLeagues.getValorantLeagues({
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
